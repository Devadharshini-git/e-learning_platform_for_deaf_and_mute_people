import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  Calculator,
  FlaskConical,
  Languages,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

import useVoiceAssistant from '../hooks/useVoiceAssistant';

const subjects = [
  {
    id: 'math',
    title: 'Mathematics',
    icon: Calculator,
    desc: 'Numbers, shapes and problem solving',
    accent: 'from-blue-500/20 to-indigo-500/20',
    border: 'border-blue-100',
  },
  {
    id: 'science',
    title: 'Science',
    icon: FlaskConical,
    desc: 'Animals, weather and discoveries',
    accent: 'from-emerald-500/20 to-green-500/20',
    border: 'border-emerald-100',
  },
  {
    id: 'english',
    title: 'English',
    icon: Languages,
    desc: 'Letters, communication and vocabulary',
    accent: 'from-violet-500/20 to-fuchsia-500/20',
    border: 'border-violet-100',
  },
];

const Lessons = () => {
  const { say } = useVoiceAssistant();

  useEffect(() => {
    say(
      'Welcome to Lessons! Choose a subject. Mathematics, Science, or English.'
    );
  }, []);

  return (
    <main
      id="main-content"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#f5f7fb]
        px-6
        py-20
      "
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">

        <div
          className="
            absolute
            left-0
            top-0
            h-[450px]
            w-[450px]
            rounded-full
            bg-blue-200/30
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            h-[450px]
            w-[450px]
            rounded-full
            bg-violet-200/30
            blur-3xl
          "
        />

      </div>

      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mx-auto max-w-4xl text-center">

          {/* BADGE */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/60
              bg-white/80
              px-5
              py-2.5
              backdrop-blur-xl
              shadow-[0_10px_30px_rgba(15,23,42,0.06)]
            "
          >

            <Sparkles size={16} className="text-blue-600" />

            <span className="text-sm font-medium text-slate-700">
              Interactive Learning Subjects
            </span>

          </div>

          {/* TITLE */}
          <h1
            className="
              mt-8
              text-5xl
              font-black
              leading-[0.95]
              tracking-[-0.05em]
              text-slate-900
              md:text-7xl
            "
          >
            Choose Your
            <span
              className="
                block
                bg-gradient-to-r
                from-blue-600
                to-violet-600
                bg-clip-text
                text-transparent
              "
            >
              Subject
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-lg
              leading-relaxed
              text-slate-600
              md:text-xl
            "
          >
            Start your interactive learning journey with engaging
            lessons designed using accessibility, AI assistance
            and inclusive learning experiences.
          </p>

        </div>

        {/* SUBJECT GRID */}
        <ul
          className="
            mt-20
            grid
            grid-cols-1
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
          role="list"
        >

          {subjects.map(subject => {
            const Icon = subject.icon;

            return (
              <li key={subject.id}>

                <Link
                  to={`/lessons/${subject.id}`}
                  onClick={() => say(`Opening ${subject.title}`)}
                  aria-label={`Open ${subject.title}`}
                  className="group block h-full"
                >

                  <div
                    className="
                      relative
                      flex
                      h-full
                      flex-col
                      overflow-hidden
                      rounded-[36px]
                      border
                      border-white/60
                      bg-white/80
                      backdrop-blur-2xl
                      shadow-[0_20px_60px_rgba(15,23,42,0.06)]
                      transition-all
                      duration-500
                      hover:-translate-y-2
                      hover:shadow-[0_30px_80px_rgba(15,23,42,0.12)]
                    "
                  >

                    {/* TOP SECTION */}
                    <div
                      className={`
                        relative
                        overflow-hidden
                        border-b
                        ${subject.border}
                        bg-gradient-to-br
                        ${subject.accent}
                        p-8
                      `}
                    >

                      {/* GLOW */}
                      <div
                        className="
                          absolute
                          right-0
                          top-0
                          h-40
                          w-40
                          rounded-full
                          bg-white/20
                          blur-3xl
                        "
                      />

                      <div className="relative z-10">

                        {/* ICON */}
                        <div
                          className="
                            flex
                            h-20
                            w-20
                            items-center
                            justify-center
                            rounded-[24px]
                            bg-white/80
                            shadow-lg
                            transition-transform
                            duration-300
                            group-hover:scale-105
                          "
                        >
                          <Icon size={34} className="text-slate-900" />
                        </div>

                        {/* TITLE */}
                        <h2
                          className="
                            mt-8
                            text-3xl
                            font-black
                            tracking-tight
                            text-slate-900
                          "
                        >
                          {subject.title}
                        </h2>

                        {/* DESC */}
                        <p
                          className="
                            mt-4
                            text-lg
                            leading-relaxed
                            text-slate-600
                          "
                        >
                          {subject.desc}
                        </p>

                      </div>

                    </div>

                    {/* BOTTOM */}
                    <div className="flex flex-1 items-center justify-between p-6">

                      <div>

                        <p className="text-sm font-medium text-slate-400">
                          Start Learning
                        </p>

                        <h3
                          className="
                            mt-1
                            text-lg
                            font-semibold
                            text-slate-900
                          "
                        >
                          Open Lessons
                        </h3>

                      </div>

                      {/* ARROW */}
                      <div
                        className="
                          flex
                          h-14
                          w-14
                          items-center
                          justify-center
                          rounded-2xl
                          bg-slate-900
                          text-white
                          shadow-xl
                          transition-all
                          duration-300
                          group-hover:translate-x-1
                        "
                      >
                        <ArrowRight size={20} />
                      </div>

                    </div>

                  </div>

                </Link>

              </li>
            );
          })}

        </ul>

        {/* CTA */}
        <div className="mt-28">

          <div
            className="
              relative
              overflow-hidden
              rounded-[40px]
              bg-[#0f172a]
              px-8
              py-20
              text-center
              shadow-[0_30px_80px_rgba(15,23,42,0.25)]
              md:px-16
            "
          >

            {/* GLOW */}
            <div
              className="
                absolute
                left-1/2
                top-0
                h-72
                w-72
                -translate-x-1/2
                rounded-full
                bg-blue-500/20
                blur-3xl
              "
            />

            <div className="relative z-10">

              <h2
                className="
                  text-4xl
                  font-black
                  tracking-[-0.04em]
                  text-white
                  md:text-6xl
                "
              >
                Learning Made Accessible
              </h2>

              <p
                className="
                  mx-auto
                  mt-6
                  max-w-3xl
                  text-lg
                  leading-relaxed
                  text-slate-300
                "
              >
                Explore sign language powered lessons with AI assistance,
                interactive activities and accessible learning tools.
              </p>

              <Link
                to="/practice"
                className="
                  mt-10
                  inline-flex
                  items-center
                  gap-3
                  rounded-2xl
                  bg-white
                  px-8
                  py-4
                  text-base
                  font-semibold
                  text-slate-900
                  shadow-2xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                Practice Skills
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
};

export default Lessons;