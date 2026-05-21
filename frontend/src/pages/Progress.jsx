import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { lessonData } from '../data/lessonData';

const BADGES = {
  'first-lesson': { icon: '🌟', title: 'First Lesson', desc: 'Completed your first lesson!' },
  'explorer': { icon: '🧭', title: 'Explorer', desc: 'Completed 3 lessons!' },
  'champion': { icon: '🏆', title: 'Champion', desc: 'Completed 6 lessons!' },
};

const Progress = () => {
  const { isLoggedIn, user } = useAuth();

  if (!isLoggedIn) return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50
      flex items-center justify-center px-6">
      <div className="text-center">
        <div className="text-7xl mb-6">📊</div>
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4">Track Your Progress!</h1>
        <p className="text-gray-500 mb-8">Login to see your learning stats and badges</p>
        <div className="flex gap-4 justify-center">
          <Link to="/login" className="bg-gradient-to-r from-blue-600 to-purple-600
            text-white px-8 py-3 rounded-2xl font-bold hover:opacity-90">
            Login
          </Link>
          <Link to="/register" className="bg-yellow-400 text-gray-900
            px-8 py-3 rounded-2xl font-bold hover:bg-yellow-300">
            Register
          </Link>
        </div>
      </div>
    </main>
  );

  const progress = user?.progress || {};
  const badges = user?.badges || [];
  const quizScores = user?.quizScores || [];
  const completedCount = Object.keys(progress).length;

  // Total topics count
  const totalTopics = Object.values(lessonData).reduce(
    (acc, subject) => acc + subject.topics.length, 0
  );

  const overallPercent = Math.round((completedCount / totalTopics) * 100);

  // Average score
  const avgScore = quizScores.length > 0
    ? Math.round(quizScores.reduce((a, b) => a + b.score, 0) / quizScores.length)
    : 0;

  return (
    <main id="main-content" className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-10 pt-18">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
            My Progress
          </h1>
          <p className="text-gray-500 text-lg">
            Keep it up, <strong>{user?.name?.split(' ')[0]}</strong>! You are doing amazing! 🌟
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            { icon: '📚', label: 'Lessons Done', value: completedCount, color: 'from-blue-500 to-blue-700' },
            { icon: '🏆', label: 'Badges Earned', value: badges.length, color: 'from-yellow-400 to-orange-500' },
            { icon: '⭐', label: 'Avg Quiz Score', value: `${avgScore}pts`, color: 'from-purple-500 to-purple-700' },
          ].map(stat => (
            <div key={stat.label}
              className={`bg-gradient-to-br ${stat.color} text-white rounded-3xl p-8 text-center shadow-xl`}>
              <div className="text-5xl mb-3">{stat.icon}</div>
              <div className="text-4xl font-extrabold">{stat.value}</div>
              <div className="text-white/80 mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Overall Progress */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-6">Overall Progress</h2>
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>{completedCount} of {totalTopics} topics completed</span>
            <span className="font-bold text-primary">{overallPercent}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-5">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-5
                rounded-full transition-all duration-700"
              style={{ width: `${overallPercent}%` }}
            />
          </div>
        </div>

        {/* Subject Progress */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-6">Subject Progress</h2>
          <div className="space-y-6">
            {Object.entries(lessonData).map(([key, subject]) => {
              const done = subject.topics.filter(
                t => progress[`${key}-${t.id}`]
              ).length;
              const pct = Math.round((done / subject.topics.length) * 100);
              const colors = { math: 'from-blue-500 to-blue-600', science: 'from-green-500 to-green-600', english: 'from-purple-500 to-purple-600' };

              return (
                <div key={key}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-gray-700 flex items-center gap-2">
                      {subject.icon} {subject.title}
                    </span>
                    <span className="text-sm text-gray-500">
                      {done}/{subject.topics.length} topics · {pct}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4">
                    <div
                      className={`bg-gradient-to-r ${colors[key]} h-4 rounded-full transition-all duration-700`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Badges */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-6">🏅 My Badges</h2>
          {badges.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">🔒</div>
              <p className="text-gray-500">Complete lessons to earn badges!</p>
              <Link to="/lessons"
                className="inline-block mt-4 bg-gradient-to-r from-blue-600 to-purple-600
                  text-white px-6 py-3 rounded-2xl font-bold hover:opacity-90">
                Start Learning →
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {badges.map(badgeKey => {
                const badge = BADGES[badgeKey];
                return badge ? (
                  <div key={badgeKey}
                    className="bg-gradient-to-br from-yellow-50 to-orange-50
                      border-2 border-yellow-200 rounded-2xl p-6 text-center">
                    <div className="text-5xl mb-3">{badge.icon}</div>
                    <h3 className="font-extrabold text-gray-800">{badge.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{badge.desc}</p>
                  </div>
                ) : null;
              })}
            </div>
          )}
        </div>

      </div>
    </main>
  );
};

export default Progress;