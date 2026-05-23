import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import useVoiceAssistant from '../hooks/useVoiceAssistant';

const practices = [
  {
    id: 1, subject: 'math', icon: '➕', title: 'Math Practice',
    desc: 'Practice numbers and shapes', color: 'from-blue-500 to-blue-700',
    exercises: [
      { q: 'How many sides does a triangle have?', options: ['2', '3', '4', '5'], answer: 1 },
      { q: 'What comes after 4?', options: ['3', '6', '5', '7'], answer: 2 },
      { q: 'What shape is round?', options: ['Square', 'Triangle', 'Circle', 'Rectangle'], answer: 2 },
    ]
  },
  {
    id: 2, subject: 'science', icon: '🔬', title: 'Science Practice',
    desc: 'Practice animals and weather', color: 'from-green-500 to-green-700',
    exercises: [
      { q: 'What sound does a cat make?', options: ['Bark', 'Meow', 'Moo', 'Tweet'], answer: 1 },
      { q: 'What gives us light during the day?', options: ['Moon', 'Stars', 'Sun', 'Lamp'], answer: 2 },
      { q: 'Which animal has wings?', options: ['Dog', 'Fish', 'Cat', 'Bird'], answer: 3 },
    ]
  },
  {
    id: 3, subject: 'english', icon: '📖', title: 'English Practice',
    desc: 'Practice letters and colors', color: 'from-purple-500 to-purple-700',
    exercises: [
      { q: 'A is for ___?', options: ['Ball', 'Cat', 'Apple', 'Dog'], answer: 2 },
      { q: 'What color is the sky?', options: ['Red', 'Green', 'Yellow', 'Blue'], answer: 3 },
      { q: 'B is for ___?', options: ['Apple', 'Banana', 'Cat', 'Dog'], answer: 1 },
    ]
  },
];

const PracticeSession = ({ practice, onFinish }) => {
  const { say } = useVoiceAssistant();
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = practice.exercises[current];

  const handleAnswer = (idx) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === q.answer) {
      setScore(s => s + 1);
      say('Correct! Well done!');
    } else {
      say(`Not quite! The answer is ${q.options[q.answer]}`);
    }
  };

  const handleNext = () => {
    if (current < practice.exercises.length - 1) {
      setCurrent(c => c + 1);
      setSelected(null);
    } else {
      setDone(true);
      say(`Practice complete! You got ${score + (selected === q.answer ? 1 : 0)} out of ${practice.exercises.length}!`);
    }
  };

  if (done) return (
    <div className="text-center py-12 pt-16">
      <div className="text-7xl mb-4">🏆</div>
      <h2 className="text-3xl font-extrabold text-gray-800 mb-2">Practice Done!</h2>
      <p className="text-xl text-gray-600 mb-8">
        You scored <strong className="text-green-600">{score}</strong> out of <strong>{practice.exercises.length}</strong>!
      </p>
      <button onClick={onFinish}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white
          px-8 py-3 rounded-2xl font-bold hover:opacity-90 transition-all">
        Back to Practice
      </button>
    </div>
  );

  return (
    <div className="max-w-xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <span className="text-sm text-gray-500 font-medium">
          Question {current + 1} of {practice.exercises.length}
        </span>
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
          ⭐ {score} pts
        </span>
      </div>

      <div className={`bg-gradient-to-r ${practice.color} text-white rounded-3xl p-8 text-center mb-6`}>
        <p className="text-2xl font-bold">{q.q}</p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        {q.options.map((opt, idx) => {
          let style = 'bg-white border-2 border-gray-200 hover:border-blue-400';
          if (selected !== null) {
            if (idx === q.answer) style = 'bg-green-100 border-2 border-green-500 text-green-700 font-bold';
            else if (idx === selected) style = 'bg-red-100 border-2 border-red-400 text-red-700';
          }
          return (
            <button key={idx} onClick={() => handleAnswer(idx)} disabled={selected !== null}
              className={`p-4 rounded-2xl text-lg transition-all ${style}`}>
              {opt}
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <button onClick={handleNext}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white
            py-4 rounded-2xl text-lg font-bold hover:opacity-90 transition-all">
          {current < practice.exercises.length - 1 ? 'Next →' : 'See Results 🏆'}
        </button>
      )}
    </div>
  );
};

const Practice = () => {
  const { say } = useVoiceAssistant();
  const { isLoggedIn } = useAuth();
  const [activePractice, setActivePractice] = useState(null);

  if (!isLoggedIn) return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50
      flex items-center justify-center px-6">
      <div className="text-center">
        <div className="text-7xl mb-6">🔒</div>
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4">Login to Practice!</h1>
        <p className="text-gray-500 mb-8">Create an account to access practice sessions</p>
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

  if (activePractice) return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-6 pt-30">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
        <h1 className="text-2xl font-extrabold text-primary mb-8 text-center">
          {activePractice.icon} {activePractice.title}
        </h1>
        <PracticeSession
          practice={activePractice}
          onFinish={() => setActivePractice(null)}
        />
      </div>
    </main>
  );

  return (
    <main id="main-content" className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-6">
      <div className="max-w-4xl mx-auto pt-18">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2"> Practice Zone</h1>
        <p className="text-gray-500 mb-10 text-lg">Choose a subject and practice what you learned!</p>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
          {practices.map(p => (
            <li key={p.id}>
              <button
                onClick={() => { setActivePractice(p); say(`Starting ${p.title}`); }}
                className="w-full block rounded-3xl overflow-hidden shadow-lg
                  hover:shadow-2xl transition-all hover:-translate-y-2 text-left"
              >
                <div className={`bg-gradient-to-br ${p.color} p-10 text-center text-white`}>
                  <span className="text-6xl block mb-3">{p.icon}</span>
                  <h2 className="text-xl font-extrabold">{p.title}</h2>
                </div>
                <div className="bg-white p-4 text-center border-t-4 border-yellow-400">
                  <p className="text-gray-500 text-sm">{p.desc}</p>
                  <p className="text-primary font-bold text-sm mt-1">
                    {p.exercises.length} questions
                  </p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Practice;