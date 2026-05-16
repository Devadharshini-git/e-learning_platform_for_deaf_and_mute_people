import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Brain,
  Mic,
  HandMetal,
  BarChart3,
  Accessibility,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

import useVoiceAssistant from '../hooks/useVoiceAssistant';

const features = [
  {
    icon: HandMetal,
    title: 'Sign Language',
    desc: 'Every lesson taught through sign language animations',
  },
  {
    icon: Mic,
    title: 'Voice Assistant',
    desc: 'Hands-free navigation for visually impaired learners',
  },
  {
    icon: Brain,
    title: 'AI Powered',
    desc: 'Smart explanations that adapt to young learners',
  },
  {
    icon: Sparkles,
    title: 'Interactive Quizzes',
    desc: 'Practice and improve with engaging activities',
  },
  {
    icon: Accessibility,
    title: 'Accessibility',
    desc: 'Designed for deaf, mute and visually impaired children',
  },
  {
    icon: BarChart3,
    title: 'Progress Tracking',
    desc: 'Monitor learning achievements and daily growth',
  },
];

const subjects = [
  {
    id: 'math',
    title: 'Mathematics',
    desc: 'Numbers, patterns & problem solving',
    accent: 'from-blue-500/20 to-indigo-500/20',
    border: 'border-blue-200/40',
  },
  {
    id: 'science',
    title: 'Science',
    desc: 'Explore nature, animals & experiments',
    accent: 'from-emerald-500/20 to-green-500/20',
    border: 'border-emerald-200/40',
  },
  {
    id: 'english',
    title: 'English',
    desc: 'Letters, vocabulary & communication',
    accent: 'from-violet-500/20 to-fuchsia-500/20',
    border: 'border-violet-200/40',
  },
];

const Home = () => {
  const { say } = useVoiceAssistant();

  useEffect(() => {
    say(
      'Welcome to SignLearn! A fun place to learn Mathematics, Science and English through sign language!'
    );
  }, []);

  return (
    <main
      id="main-content"
      className="
        relative
        overflow-hidden
        bg-[#f5f7fb]
        text-slate-900
      "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-violet-200/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-cyan-100/40 blur-3xl" />
      </div>

      {/* HERO */}
      <section className="px-6 pt-16 pb-28 md:pt-24 md:pb-36">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <div>

            {/* BADGE */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border border-white/60
                bg-white/80
                px-5
                py-2.5
                backdrop-blur-xl
                shadow-[0_10px_30px_rgba(15,23,42,0.06)]
              "
            >
              <Sparkles size={16} className="text-blue-600" />

              <span className="text-sm font-medium text-slate-700">
                Inclusive AI Learning Platform
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
                xl:text-[88px]
              "
            >
              Learn Through
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
                Sign Language
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-8
                max-w-2xl
                text-lg
                leading-relaxed
                text-slate-600
                md:text-xl
              "
            >
              SignLearn makes education accessible and engaging for deaf,
              mute and visually impaired learners using AI assistance,
              interactive lessons and inclusive learning experiences.
            </p>

            {/* BUTTONS */}
            <div className="mt-12 flex flex-wrap gap-4">

              <Link
                to="/lessons"
                aria-label="Start learning now"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-2xl
                  bg-slate-900
                  px-8
                  py-4
                  text-base
                  font-semibold
                  text-white
                  shadow-[0_15px_40px_rgba(15,23,42,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-slate-800
                "
              >
                Start Learning
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/practice"
                className="
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white/80
                  px-8
                  py-4
                  text-base
                  font-semibold
                  text-slate-800
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white
                  hover:shadow-lg
                "
              >
                Practice Skills
              </Link>

            </div>

            {/* STATS */}
            <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3">

              {[
                ['100+', 'Interactive Lessons'],
                ['AI', 'Voice Assistance'],
                ['24/7', 'Accessible Learning'],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="
                    rounded-3xl
                    border
                    border-white/60
                    bg-white/70
                    p-6
                    backdrop-blur-2xl
                    shadow-[0_10px_40px_rgba(15,23,42,0.06)]
                  "
                >
                  <h3 className="text-3xl font-black tracking-tight text-slate-900">
                    {value}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    {label}
                  </p>
                </div>
              ))}

            </div>

          </div>

          {/* RIGHT PANEL */}
          <div className="relative">

            <div
              className="
                relative
                overflow-hidden
                rounded-[36px]
                border
                border-white/60
                bg-white/70
                p-8
                backdrop-blur-2xl
                shadow-[0_25px_80px_rgba(15,23,42,0.10)]
              "
            >
              {/* TOP */}
              <div className="mb-10 flex items-center justify-between">

                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Smart Learning Dashboard
                  </p>

                  <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">
                    SignLearn
                  </h2>
                </div>

                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-slate-900
                    shadow-xl
                  "
                >
                  <HandMetal size={28} className="text-white" />
                </div>

              </div>

              {/* SUBJECTS */}
              <div className="space-y-5">

                {subjects.map(subject => (
                  <Link
                    key={subject.id}
                    to={`/lessons/${subject.id}`}
                    onClick={() => say(`Opening ${subject.title}`)}
                    className="block group"
                  >
                    <div
                      className={`
                        relative
                        overflow-hidden
                        rounded-[28px]
                        border
                        ${subject.border}
                        bg-gradient-to-br
                        ${subject.accent}
                        p-7
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-2xl
                      `}
                    >

                      <div
                        className="
                          absolute
                          right-0
                          top-0
                          h-32
                          w-32
                          rounded-full
                          bg-white/20
                          blur-3xl
                        "
                      />

                      <div className="relative flex items-center justify-between">

                        <div>

                          <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                            {subject.title}
                          </h3>

                          <p className="mt-2 text-slate-600">
                            {subject.desc}
                          </p>

                        </div>

                        <div
                          className="
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-xl
                            bg-white/70
                            text-slate-900
                            shadow-md
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                          "
                        >
                          <ArrowRight size={18} />
                        </div>

                      </div>

                    </div>
                  </Link>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">

          {/* SECTION HEADER */}
          <div className="mx-auto max-w-3xl text-center">

            <h2
              className="
                text-4xl
                font-black
                tracking-[-0.04em]
                text-slate-900
                md:text-6xl
              "
            >
              Built For Inclusive Learning
            </h2>

            <p
              className="
                mt-6
                text-lg
                leading-relaxed
                text-slate-600
              "
            >
              Modern AI-powered accessibility tools designed to create
              engaging and effective learning experiences for every child.
            </p>

          </div>

          {/* FEATURE GRID */}
          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {features.map(feature => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-white/60
                    bg-white/70
                    p-8
                    backdrop-blur-xl
                    shadow-[0_10px_40px_rgba(15,23,42,0.06)]
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-[0_20px_60px_rgba(15,23,42,0.10)]
                  "
                >

                  <div
                    className="
                      absolute
                      right-0
                      top-0
                      h-32
                      w-32
                      rounded-full
                      bg-blue-100/40
                      blur-3xl
                    "
                  />

                  <div
                    className="
                      relative
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-slate-900
                      shadow-lg
                    "
                  >
                    <Icon size={28} className="text-white" />
                  </div>

                  <h3
                    className="
                      relative
                      mt-8
                      text-2xl
                      font-bold
                      tracking-tight
                      text-slate-900
                    "
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="
                      relative
                      mt-4
                      leading-relaxed
                      text-slate-600
                    "
                  >
                    {feature.desc}
                  </p>

                </article>
              );
            })}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-32">

        <div
          className="
            relative
            mx-auto
            max-w-7xl
            overflow-hidden
            rounded-[40px]
            bg-[#0f172a]
            px-8
            py-20
            shadow-[0_30px_80px_rgba(15,23,42,0.25)]
            md:px-16
          "
        >

          {/* GLOW */}
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative z-10 text-center">

            <h2
              className="
                text-4xl
                font-black
                tracking-[-0.04em]
                text-white
                md:text-6xl
              "
            >
              Start Your Learning Journey
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-lg
                leading-relaxed
                text-slate-300
              "
            >
              Experience accessible education powered by AI assistance,
              interactive learning and inclusive design principles.
            </p>

            <Link
              to="/lessons"
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
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
              "
            >
              Begin Learning
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Home;