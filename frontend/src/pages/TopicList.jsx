import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { lessonData } from '../data/lessonData';
import useVoiceAssistant from '../hooks/useVoiceAssistant';

const colorMap = {
  blue: 'bg-blue-50 border-blue-200 hover:border-blue-400',
  green: 'bg-green-50 border-green-200 hover:border-green-400',
  purple: 'bg-purple-50 border-purple-200 hover:border-purple-400',
};

const TopicList = () => {
  const { subject } = useParams();
  const { say } = useVoiceAssistant();
  const data = lessonData[subject];

  useEffect(() => {
    if (data) say(`Welcome to ${data.title}! Pick a topic to start learning.`);
  }, [data]);

  if (!data) return (
    <main className="text-center py-20">
      <h1 className="text-2xl font-bold text-red-500">Subject not found</h1>
      <Link to="/lessons" className="text-primary underline mt-4 block">Back to Lessons</Link>
    </main>
  );

  return (
    <main id="main-content" className="max-w-4xl mx-auto py-12 px-6">
      <Link to="/lessons" className="text-primary text-sm underline mb-6 block">← Back to Subjects</Link>
      <h1 className="text-4xl font-bold mb-2 text-primary">
        {data.icon} {data.title}
      </h1>
      <p className="text-gray-500 mb-8">Choose a topic to start learning!</p>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
        {data.topics.map(topic => (
          <li key={topic.id}>
            <Link
              to={`/lessons/${subject}/${topic.id}`}
              onClick={() => say(`Opening ${topic.title}`)}
              aria-label={`Start topic: ${topic.title}`}
              className={`block border-2 rounded-2xl p-6 transition-all hover:shadow-lg
                ${colorMap[data.color]}`}
            >
              <span className="text-4xl block mb-3" aria-hidden="true">{topic.icon}</span>
              <h2 className="text-xl font-bold mb-1">{topic.title}</h2>
              <p className="text-gray-500 text-sm">{topic.description}</p>
              <p className="text-xs text-gray-400 mt-2">{topic.slides.length} slides</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default TopicList;