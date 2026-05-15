import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { signData } from '../data/signData';
import SignCard from '../components/signs/SignCard';
import useVoiceAssistant from '../hooks/useVoiceAssistant';

const LessonDetail = () => {
  const { subject, lessonId } = useParams();
  const navigate = useNavigate();
  const { say } = useVoiceAssistant();
  const [progress, setProgress] = useState(0);

  const subjectData = signData[subject];
  const lesson = subjectData?.lessons.find(l => l.id === lessonId);

  useEffect(() => {
    if (lesson) {
      say(`Lesson: ${lesson.title}. ${lesson.description}. There are ${lesson.signs.length} signs to learn.`);
    }
  }, [lesson]);

  useEffect(() => {
    if (lesson) {
      const practiced = JSON.parse(localStorage.getItem(`practiced-${lessonId}`) || '[]');
      setProgress(Math.round((practiced.length / lesson.signs.length) * 100));
    }
  }, [lessonId]);

  if (!lesson) return (
    <main className="text-center py-20">
      <h1 className="text-2xl font-bold text-danger">Lesson not found</h1>
      <Link to="/lessons" className="text-primary underline mt-4 block">Back to Lessons</Link>
    </main>
  );

  return (
    <main id="main-content" className="max-w-5xl mx-auto py-12 px-6">
      {/* Header */}
      <div className="mb-8">
        <Link
          to={`/lessons/${subject}`}
          className="text-primary text-sm underline mb-4 block"
        >
          ← Back to {subjectData.title}
        </Link>
        <h1 className="text-4xl font-bold text-primary mb-2">{lesson.title}</h1>
        <p className="text-gray-500 mb-4">{lesson.description}</p>

        {/* Progress bar */}
        <div
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Lesson progress: ${progress}%`}
          className="w-full bg-gray-200 rounded-full h-3"
        >
          <div
            className="bg-success h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-gray-500 mt-1">{progress}% complete</p>
      </div>

      {/* Sign Cards Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        role="list"
        aria-label="Sign language cards"
      >
        {lesson.signs.map((sign, index) => (
          <SignCard key={sign.word} sign={sign} index={index} />
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-12">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-100 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-200"
        >
          ← Previous
        </button>
        <button
          onClick={() => {
            say('Great work! Lesson complete!');
            navigate(`/lessons/${subject}`);
          }}
          className="bg-success text-white px-6 py-3 rounded-xl hover:bg-green-600"
        >
          Complete Lesson ✅
        </button>
      </div>
    </main>
  );
};

export default LessonDetail;