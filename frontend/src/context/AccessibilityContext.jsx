import React, { createContext, useState, useContext, useEffect } from 'react';

const AccessibilityContext = createContext();

export const AccessibilityProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [language, setLanguage] = useState('en');

  const toggleHighContrast = () => {
    setHighContrast(prev => !prev);
    console.log('Contrast toggled');
  };

  const toggleVoice = () => {
  setVoiceEnabled(prev => {
    const newValue = !prev;
    if (!newValue) {
      window.speechSynthesis.cancel(); // ✅ immediately stops
    }
    return newValue;
  });
};

  const increaseFontSize = () => setFontSize(prev =>
    prev === 'normal' ? 'large' : prev === 'large' ? 'xlarge' : 'xlarge'
  );

  const decreaseFontSize = () => setFontSize(prev =>
    prev === 'xlarge' ? 'large' : prev === 'large' ? 'normal' : 'normal'
  );

  useEffect(() => {
    const root = document.documentElement;
    if (fontSize === 'large') root.style.fontSize = '20px';
    else if (fontSize === 'xlarge') root.style.fontSize = '24px';
    else root.style.fontSize = '16px';
  }, [fontSize]);

  useEffect(() => {
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [highContrast]);

  return (
    <AccessibilityContext.Provider value={{
      fontSize, highContrast, voiceEnabled, language,
      toggleHighContrast, toggleVoice, increaseFontSize,
      decreaseFontSize, setLanguage
    }}>
      <div className={`
        ${highContrast ? 'bg-black text-white' : 'bg-white text-gray-900'}
        ${fontSize === 'large' ? 'text-lg' : fontSize === 'xlarge' ? 'text-xl' : 'text-base'}
        min-h-screen transition-all duration-300
      `}>
        {children}
      </div>
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => useContext(AccessibilityContext);