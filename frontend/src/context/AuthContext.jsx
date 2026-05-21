import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Load user from localStorage on app start
  useEffect(() => {
    const savedUser = localStorage.getItem('signlearn_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const register = (name, email, password, userType) => {
    // Get existing users
    const existing = JSON.parse(localStorage.getItem('signlearn_users') || '[]');

    // Check if email already exists
    if (existing.find(u => u.email === email)) {
      return { success: false, message: 'Email already registered!' };
    }

    // Create new user
    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      userType,
      joinedAt: new Date().toISOString(),
      progress: {},
      badges: [],
      quizScores: [],
    };

    // Save to users list
    existing.push(newUser);
    localStorage.setItem('signlearn_users', JSON.stringify(existing));

    // Auto login after register
    const { password: _, ...safeUser } = newUser;
    localStorage.setItem('signlearn_user', JSON.stringify(safeUser));
    setUser(safeUser);
    setIsLoggedIn(true);

    return { success: true };
  };

  const login = (email, password) => {
    const existing = JSON.parse(localStorage.getItem('signlearn_users') || '[]');
    const found = existing.find(u => u.email === email && u.password === password);

    if (!found) {
      return { success: false, message: 'Invalid email or password!' };
    }

    const { password: _, ...safeUser } = found;
    localStorage.setItem('signlearn_user', JSON.stringify(safeUser));
    setUser(safeUser);
    setIsLoggedIn(true);

    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem('signlearn_user');
    setUser(null);
    setIsLoggedIn(false);
  };

  const saveProgress = (subject, topicId, score) => {
    const savedUser = JSON.parse(localStorage.getItem('signlearn_user'));
    if (!savedUser) return;

    savedUser.progress = savedUser.progress || {};
    savedUser.progress[`${subject}-${topicId}`] = {
      completed: true,
      score,
      completedAt: new Date().toISOString(),
    };

    // Award badges
    const completedCount = Object.keys(savedUser.progress).length;
    savedUser.badges = savedUser.badges || [];

    if (completedCount >= 1 && !savedUser.badges.includes('first-lesson')) {
      savedUser.badges.push('first-lesson');
    }
    if (completedCount >= 3 && !savedUser.badges.includes('explorer')) {
      savedUser.badges.push('explorer');
    }
    if (completedCount >= 6 && !savedUser.badges.includes('champion')) {
      savedUser.badges.push('champion');
    }

    // Save quiz score
    savedUser.quizScores = savedUser.quizScores || [];
    savedUser.quizScores.push({ subject, topicId, score, date: new Date().toISOString() });

    localStorage.setItem('signlearn_user', JSON.stringify(savedUser));
    setUser({ ...savedUser });

    // Also update in users list
    const users = JSON.parse(localStorage.getItem('signlearn_users') || '[]');
    const idx = users.findIndex(u => u.id === savedUser.id);
    if (idx !== -1) {
      users[idx] = { ...users[idx], ...savedUser };
      localStorage.setItem('signlearn_users', JSON.stringify(users));
    }
  };

  return (
    <AuthContext.Provider value={{
      user, isLoggedIn, register, login, logout, saveProgress
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);