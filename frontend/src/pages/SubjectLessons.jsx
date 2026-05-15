import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { signData } from '../data/signData';
import useVoiceAssistant from '../hooks/useVoiceAssistant';

const SubjectLessons = () => {
  const { subject } = useParams();
  const { say } = useVoiceAssistant();
  const data = signData[subject];

  useEffect(() => {
    if (data) say(`${data.title} lessons. Choose a lesson to begin.`);
  }, [data]);

  if (!data) return (
    <main className="text-center py-20">
      <h1 className="text-2xl font-bold text-danger">Subject not found</h1>
      <Link to="/lessons" className="text-primary underline mt-4 block">Back to Lessons</Link>
    </main>
  );

  return (
    <main id="main-content" className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-8 text-primary">{data.title}</h1>
      <ul className="space-y-4" role="list">
        {data.lessons.map(lesson => (
          <li key={lesson.id}>
            <article className="bg-white border border-gray-200 rounded-xl p-6 flex justify-between items-center hover:shadow-lg transition-shadow">
              <div>
                <h2 className="text-xl font-semibold">{lesson.title}</h2>
                <p className="text-gray-500 text-sm mt-1">{lesson.description}</p>
                <p className="text-xs text-gray-400 mt-1">{lesson.signs.length} signs to learn</p>
              </div>
              <Link
                to={`/lessons/${subject}/${lesson.id}`}
                aria-label={`Start lesson: ${lesson.title}`}
                onClick={() => say(`Opening ${lesson.title}`)}
                className="bg-primary text-white px-5 py-2 rounded-lg hover:bg-blue-700 focus-visible:ring-4 focus-visible:ring-yellow-400"
              >
                Start →
              </Link>
            </article>
          </li>
        ))}
      </ul>
      <Link to="/lessons" className="inline-block mt-8 text-primary underline">← Back to Lessons</Link>
    </main>
  );
};

export default SubjectLessons;