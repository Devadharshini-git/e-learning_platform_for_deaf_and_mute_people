import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useVoiceAssistant from '../hooks/useVoiceAssistant';

const subjects = [
  { id: 'math', title: 'Mathematics', icon: '➕', desc: 'Numbers, shapes and more!', color: 'from-blue-400 to-blue-600' },
  { id: 'science', title: 'Science', icon: '🔬', desc: 'Animals, weather and nature!', color: 'from-green-400 to-green-600' },
  { id: 'english', title: 'English', icon: '📖', desc: 'Letters, colors and words!', color: 'from-purple-400 to-purple-600' },
];

const Lessons = () => {
  const { say } = useVoiceAssistant();

  useEffect(() => {
    say('Welcome to Lessons! Choose a subject. Mathematics, Science, or English.');
  }, []);

  return (
    <main id="main-content" className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-2 text-primary">📚 Choose a Subject</h1>
      <p className="text-gray-500 mb-10">What would you like to learn today?</p>

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
        {subjects.map(subject => (
          <li key={subject.id}>
            <Link
              to={`/lessons/${subject.id}`}
              onClick={() => say(`Opening ${subject.title}`)}
              aria-label={`Open ${subject.title}`}
              className="block rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl
                transition-all hover:-translate-y-1 focus-visible:ring-4 focus-visible:ring-yellow-400"
            >
              <div className={`bg-gradient-to-br ${subject.color} p-10 text-center text-white`}>
                <span className="text-6xl block mb-3" aria-hidden="true">{subject.icon}</span>
                <h2 className="text-2xl font-bold">{subject.title}</h2>
              </div>
              <div className="bg-white p-4 text-center">
                <p className="text-gray-500 text-sm">{subject.desc}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Lessons;