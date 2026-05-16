import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import {
  ArrowLeft,
  ArrowRight,
  Volume2,
  CheckCircle2,
  Brain,
  Sparkles,
} from 'lucide-react';

import { lessonData } from '../data/lessonData';
import useVoiceAssistant from '../hooks/useVoiceAssistant';

import Quiz from '../components/quiz/Quiz';
import AIExplainer from '../components/lesson/AIExplainer';

const LessonPlayer = () => {
  const { subject, topicId } = useParams();

  const navigate = useNavigate();

  const { say } = useVoiceAssistant();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [practicedSlides, setPracticedSlides] = useState(new Set());

  const data = lessonData[subject];

  const topic = data?.topics.find(t => t.id === topicId);

  const slide = topic?.slides[currentSlide];

  const total = topic?.slides.length || 0;

  const topicKey = topicId?.split('-')[1];

  const progress = Math.round((practicedSlides.size / total) * 100);

  useEffect(() => {
    if (slide) {
      say(`${slide.concept}. ${slide.explanation}. ${slide.funFact}`);
    }
  }, [currentSlide]);

  const handleNext = () => {
    setPracticedSlides(prev => {
      const updated = new Set(prev);
      updated.add(currentSlide);
      return updated;
    });

    if (currentSlide < total - 1) {
      setCurrentSlide(prev => prev + 1);
    } else {
      setCompleted(true);
      say('Amazing! You finished the lesson! Want to try the quiz?');
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  /* QUIZ SCREEN */
  if (showQuiz) {
    return (
      <main
        id="main-content"
        className="
          min-h-screen
          bg-[#f5f7fb]
          px-6
          py-16
        "
      >
        <div className="mx-auto max-w-3xl">

          <div
            className="
              rounded-[36px]
              border
              border-white/60
              bg-white/80
              p-10
              backdrop-blur-2xl
              shadow-[0_20px_70px_rgba(15,23,42,0.08)]
            "
          >

            <div className="mb-12 text-center">

              <div
                className="
                  mx-auto
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-3xl
                  bg-slate-900
                  shadow-xl
                "
              >
                <Brain size={34} className="text-white" />
              </div>

              <h1
                className="
                  mt-8
                  text-5xl
                  font-black
                  tracking-[-0.04em]
                  text-slate-900
                "
              >
                Quiz Time
              </h1>

              <p className="mt-4 text-lg text-slate-600">
                Test your understanding and improve your learning.
              </p>

            </div>

            <Quiz
              subject={subject}
              topic={topicKey}
              onClose={() => {
                setShowQuiz(false);
                navigate(`/lessons/${subject}`);
              }}
            />

          </div>

        </div>
      </main>
    );
  }

  /* COMPLETION SCREEN */
  if (completed) {
    return (
      <main
        className="
          relative
          flex
          min-h-screen
          items-center
          justify-center
          overflow-hidden
          bg-[#f5f7fb]
          px-6
          py-20
        "
      >

        {/* BACKGROUND */}
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-200/30 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-violet-200/30 blur-3xl" />
        </div>

        <div
          className="
            relative
            z-10
            w-full
            max-w-2xl
            rounded-[40px]
            border
            border-white/60
            bg-white/80
            p-12
            text-center
            backdrop-blur-2xl
            shadow-[0_30px_80px_rgba(15,23,42,0.10)]
          "
        >

          <div
            className="
              mx-auto
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-[28px]
              bg-slate-900
              shadow-2xl
            "
          >
            <CheckCircle2 size={42} className="text-white" />
          </div>

          <h1
            className="
              mt-10
              text-5xl
              font-black
              tracking-[-0.04em]
              text-slate-900
            "
          >
            Lesson Complete
          </h1>

          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              text-lg
              leading-relaxed
              text-slate-600
            "
          >
            You successfully completed
            <span className="font-semibold text-slate-900">
              {' '} {topic.title}
            </span>.
            Keep learning and continue building your skills.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-3">

            <button
              onClick={() => setShowQuiz(true)}
              className="
                rounded-2xl
                bg-slate-900
                px-6
                py-4
                text-sm
                font-semibold
                text-white
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-slate-800
              "
            >
              Take Quiz
            </button>

            <button
              onClick={() => {
                setCurrentSlide(0);
                setCompleted(false);
                setPracticedSlides(new Set());
              }}
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-6
                py-4
                text-sm
                font-semibold
                text-slate-800
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              Try Again
            </button>

            <Link
              to={`/lessons/${subject}`}
              className="
                flex
                items-center
                justify-center
                rounded-2xl
                border
                border-slate-200
                bg-slate-100
                px-6
                py-4
                text-sm
                font-semibold
                text-slate-900
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              More Topics
            </Link>

          </div>

        </div>

      </main>
    );
  }

  /* NOT FOUND */
  if (!topic || !slide) {
    return (
      <main
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-[#f5f7fb]
          px-6
        "
      >
        <div className="text-center">

          <h1
            className="
              text-5xl
              font-black
              tracking-tight
              text-slate-900
            "
          >
            Lesson Not Found
          </h1>

          <Link
            to="/lessons"
            className="
              mt-6
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-blue-600
            "
          >
            <ArrowLeft size={16} />
            Back to Lessons
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main
      id="main-content"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#f5f7fb]
        px-6
        py-10
      "
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-violet-200/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl">

        {/* TOP BAR */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">

          <Link
            to={`/lessons/${subject}`}
            className="
              inline-flex
              items-center
              gap-2
              rounded-2xl
              border
              border-white/60
              bg-white/80
              px-5
              py-3
              text-sm
              font-semibold
              text-slate-800
              backdrop-blur-xl
              shadow-[0_10px_30px_rgba(15,23,42,0.06)]
              transition-all
              duration-300
              hover:-translate-y-1
            "
          >
            <ArrowLeft size={16} />
            Back
          </Link>

          <div
            className="
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-white/60
              bg-white/80
              px-5
              py-3
              backdrop-blur-xl
              shadow-[0_10px_30px_rgba(15,23,42,0.06)]
            "
          >

            <span className="text-sm font-semibold text-slate-700">
              Slide {currentSlide + 1} / {total}
            </span>

            <div
              className="
                rounded-full
                bg-slate-900
                px-3
                py-1
                text-xs
                font-bold
                text-white
              "
            >
              {progress}%
            </div>

          </div>

        </div>

        {/* PROGRESS */}
        <div
          className="
            mb-10
            h-3
            overflow-hidden
            rounded-full
            bg-slate-200
          "
        >
          <div
            className="
              h-full
              rounded-full
              bg-gradient-to-r
              from-blue-600
              to-violet-600
              transition-all
              duration-700
            "
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* MAIN CARD */}
        <div
          className="
            overflow-hidden
            rounded-[40px]
            border
            border-white/60
            bg-white/80
            backdrop-blur-2xl
            shadow-[0_25px_80px_rgba(15,23,42,0.08)]
          "
        >

          {/* HEADER */}
          <div
            className="
              relative
              overflow-hidden
              border-b
              border-white/20
              bg-[#0f172a]
              px-10
              py-14
            "
          >

            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="relative z-10 text-center">

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.35rem]
                  text-slate-400
                "
              >
                {topic.title}
              </p>

              <h1
                className="
                  mt-5
                  text-4xl
                  font-black
                  tracking-[-0.04em]
                  text-white
                  md:text-6xl
                "
              >
                {slide.concept}
              </h1>

            </div>

          </div>

          {/* MEDIA SECTION */}
          <div
            className="
              border-b
              border-slate-100
              bg-gradient-to-b
              from-slate-50
              to-white
              px-8
              py-14
            "
          >

            <div className="mb-10 text-center">

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.35rem]
                  text-slate-400
                "
              >
                Sign Language Animation
              </p>

            </div>

            <div className="flex justify-center">

              <div
                className="
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/60
                  bg-white
                  shadow-[0_20px_60px_rgba(15,23,42,0.10)]
                "
              >

                <div className="h-[320px] w-[320px]">

                  <img
                    src={slide.gif}
                    alt={slide.gifAlt}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />

                  <div
                    className="
                      hidden
                      h-full
                      w-full
                      flex-col
                      items-center
                      justify-center
                      bg-slate-100
                    "
                  >

                    <Sparkles size={48} className="text-slate-400" />

                    <p className="mt-4 text-sm font-medium text-slate-500">
                      Animation Preview
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* CONTENT */}
          <div className="space-y-6 p-8 md:p-10">

            {/* EXPLANATION */}
            <div
              className="
                rounded-[30px]
                border
                border-slate-100
                bg-slate-50
                p-8
              "
            >

              <h3 className="text-lg font-bold text-slate-900">
                Explanation
              </h3>

              <p
                className="
                  mt-4
                  text-lg
                  leading-relaxed
                  text-slate-600
                "
              >
                {slide.explanation}
              </p>

            </div>

            {/* EXAMPLE */}
            <div
              className="
                rounded-[30px]
                border
                border-blue-100
                bg-blue-50/70
                p-8
              "
            >

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.35rem]
                  text-blue-500
                "
              >
                Example
              </p>

              <p
                className="
                  mt-5
                  text-3xl
                  font-black
                  tracking-tight
                  text-slate-900
                "
              >
                {slide.example}
              </p>

            </div>

            {/* FUN FACT */}
            <div
              className="
                rounded-[30px]
                border
                border-amber-100
                bg-amber-50/70
                p-8
              "
            >

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.35rem]
                  text-amber-600
                "
              >
                Fun Fact
              </p>

              <p
                className="
                  mt-5
                  text-lg
                  leading-relaxed
                  text-slate-700
                "
              >
                {slide.funFact}
              </p>

            </div>

            {/* AI EXPLAINER */}
            <AIExplainer
              concept={slide.concept}
              subject={subject}
            />

          </div>

        </div>

        {/* CONTROLS */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">

          <button
            onClick={handlePrev}
            disabled={currentSlide === 0}
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-2xl
              border
              border-slate-200
              bg-white
              py-4
              text-sm
              font-semibold
              text-slate-800
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            <ArrowLeft size={16} />
            Previous
          </button>

          <button
            onClick={() =>
              say(`${slide.concept}. ${slide.explanation}`)
            }
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-2xl
              border
              border-amber-200
              bg-amber-50
              py-4
              text-sm
              font-semibold
              text-amber-900
              transition-all
              duration-300
              hover:-translate-y-1
            "
          >
            <Volume2 size={18} />
            Repeat
          </button>

          <button
            onClick={handleNext}
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-2xl
              bg-slate-900
              py-4
              text-sm
              font-semibold
              text-white
              shadow-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-slate-800
            "
          >
            {currentSlide === total - 1
              ? 'Complete Lesson'
              : 'Next'}

            <ArrowRight size={16} />
          </button>

        </div>

      </div>

    </main>
  );
};

export default LessonPlayer;