import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { lessonData } from '../data/lessonData';
import useVoiceAssistant from '../hooks/useVoiceAssistant';

const LessonPlayer = () => {
  const { subject, topicId } = useParams();
  const navigate = useNavigate();
  const { say } = useVoiceAssistant();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [completed, setCompleted] = useState(false);

  const data = lessonData[subject];
  const topic = data?.topics.find(t => t.id === topicId);
  const slide = topic?.slides[currentSlide];
  const total = topic?.slides.length || 0;

  useEffect(() => {
    if (slide) {
      say(`${slide.concept}. ${slide.explanation}. ${slide.funFact}`);
    }
  }, [currentSlide, slide]);

  if (!topic || !slide) return (
    <main className="text-center py-20">
      <h1 className="text-2xl font-bold text-red-500">Lesson not found</h1>
      <Link to="/lessons" className="text-primary underline mt-4 block">Back to Lessons</Link>
    </main>
  );

  const handleNext = () => {
    if (currentSlide < total - 1) {
      setCurrentSlide(prev => prev + 1);
    } else {
      setCompleted(true);
      say('Amazing! You finished this lesson! Great job!');
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) setCurrentSlide(prev => prev - 1);
  };

  const handleRepeat = () => say(`${slide.concept}. ${slide.explanation}`);

  if (completed) return (
    <main className="text-center py-20 px-6">
      <div className="text-8xl mb-6">🎉</div>
      <h1 className="text-4xl font-bold text-success mb-4">Amazing Work!</h1>
      <p className="text-xl text-gray-600 mb-8">You finished <strong>{topic.title}</strong>!</p>
      <div className="flex gap-4 justify-center flex-wrap">
        <button
          onClick={() => { setCurrentSlide(0); setCompleted(false); }}
          className="bg-primary text-white px-8 py-3 rounded-xl hover:bg-blue-700"
        >
          🔁 Try Again
        </button>
        <Link
          to={`/lessons/${subject}`}
          className="bg-gray-100 text-gray-700 px-8 py-3 rounded-xl hover:bg-gray-200"
        >
          📚 More Topics
        </Link>
      </div>
    </main>
  );

  return (
    <main id="main-content" className="max-w-3xl mx-auto py-8 px-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <Link to={`/lessons/${subject}`} className="text-primary text-sm underline">
          ← Back
        </Link>
        <span className="text-sm text-gray-500 font-medium">
          {currentSlide + 1} / {total}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-3 mb-8"
        role="progressbar"
        aria-valuenow={currentSlide + 1}
        aria-valuemin={1}
        aria-valuemax={total}
        aria-label={`Slide ${currentSlide + 1} of ${total}`}
      >
        <div
          className="bg-primary h-3 rounded-full transition-all duration-500"
          style={{ width: `${((currentSlide + 1) / total) * 100}%` }}
        />
      </div>

      {/* Slide Card */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">

        {/* Concept title */}
        <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white text-center">
          <h1 className="text-3xl font-bold">{slide.concept}</h1>
        </div>

        {/* Sign language GIF */}
        <div className="bg-gray-50 p-6 flex justify-center border-b border-gray-100">
          <div className="text-center">
            <p className="text-xs text-gray-400 mb-3 uppercase tracking-wide">Sign Language</p>
            <img
              src={slide.gif}
              alt={slide.gifAlt}
              className="w-48 h-48 object-cover rounded-2xl shadow-md mx-auto"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback if GIF fails */}
            <div
              className="w-48 h-48 bg-blue-50 rounded-2xl shadow-md mx-auto
                items-center justify-center text-6xl hidden"
              aria-hidden="true"
            >
              🤟
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Explanation */}
          <div aria-live="polite">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              {slide.explanation}
            </p>
          </div>

          {/* Example */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 text-center">
            <p className="text-2xl font-bold text-primary">{slide.example}</p>
          </div>

          {/* Fun fact */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 text-center">
            <p className="text-sm text-yellow-800">{slide.funFact}</p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-3 mt-8 justify-between">
        <button
          onClick={handlePrev}
          disabled={currentSlide === 0}
          aria-label="Previous slide"
          className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-2xl text-lg font-semibold
            hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          ← Prev
        </button>

        <button
          onClick={handleRepeat}
          aria-label="Repeat this slide"
          className="flex-1 bg-yellow-100 text-yellow-800 py-4 rounded-2xl text-lg font-semibold
            hover:bg-yellow-200 transition-all"
        >
          🔊 Repeat
        </button>

        <button
          onClick={handleNext}
          aria-label={currentSlide === total - 1 ? 'Complete lesson' : 'Next slide'}
          className="flex-1 bg-primary text-white py-4 rounded-2xl text-lg font-semibold
            hover:bg-blue-700 transition-all"
        >
          {currentSlide === total - 1 ? '✅ Done!' : 'Next →'}
        </button>
      </div>
    </main>
  );
};

export default LessonPlayer;