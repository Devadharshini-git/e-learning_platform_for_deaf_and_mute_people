import React from 'react';

import {
  BookOpen,
  HandMetal,
  Brain,
  Flame,
  Trophy,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';

const stats = [
  {
    title: 'Lessons Completed',
    value: '18',
    icon: BookOpen,
    accent: 'from-blue-500/20 to-cyan-500/20',
    iconBg: 'bg-blue-600',
  },
  {
    title: 'Practice Sessions',
    value: '42',
    icon: HandMetal,
    accent: 'from-violet-500/20 to-fuchsia-500/20',
    iconBg: 'bg-violet-600',
  },
  {
    title: 'Quiz Accuracy',
    value: '91%',
    icon: Brain,
    accent: 'from-emerald-500/20 to-green-500/20',
    iconBg: 'bg-emerald-600',
  },
  {
    title: 'Learning Streak',
    value: '12 Days',
    icon: Flame,
    accent: 'from-orange-500/20 to-red-500/20',
    iconBg: 'bg-orange-500',
  },
];

const achievements = [
  'Completed Mathematics Basics',
  'Perfect Science Quiz Score',
  '7-Day Practice Streak',
  'Accessibility Champion',
];

const subjects = [
  {
    title: 'Mathematics',
    progress: '85%',
    width: '85%',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Science',
    progress: '72%',
    width: '72%',
    color: 'from-emerald-500 to-green-500',
  },
  {
    title: 'English',
    progress: '64%',
    width: '64%',
    color: 'from-violet-500 to-fuchsia-500',
  },
];

const Progress = () => {
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
              Personalized Learning Dashboard
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
            Learning
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
              Progress
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-lg
              leading-relaxed
              text-slate-600
              md:text-xl
            "
          >
            Track your lessons, quizzes, achievements and practice
            sessions with an accessibility-first learning dashboard.
          </p>

        </div>

        {/* STATS */}
        <section
          className="
            mt-20
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
            xl:grid-cols-4
          "
        >

          {stats.map(item => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/60
                  bg-white/80
                  p-7
                  backdrop-blur-2xl
                  shadow-[0_20px_60px_rgba(15,23,42,0.06)]
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-[0_30px_80px_rgba(15,23,42,0.12)]
                "
              >

                {/* GLOW */}
                <div
                  className={`
                    absolute
                    right-0
                    top-0
                    h-40
                    w-40
                    rounded-full
                    bg-gradient-to-br
                    ${item.accent}
                    blur-3xl
                  `}
                />

                <div className="relative z-10">

                  {/* ICON */}
                  <div
                    className={`
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      ${item.iconBg}
                      shadow-xl
                    `}
                  >
                    <Icon size={28} className="text-white" />
                  </div>

                  {/* TEXT */}
                  <p
                    className="
                      mt-6
                      text-sm
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      text-slate-400
                    "
                  >
                    {item.title}
                  </p>

                  <h2
                    className="
                      mt-3
                      text-4xl
                      font-black
                      tracking-tight
                      text-slate-900
                    "
                  >
                    {item.value}
                  </h2>

                </div>

              </div>
            );
          })}

        </section>

        {/* DASHBOARD */}
        <section
          className="
            mt-10
            grid
            grid-cols-1
            gap-8
            lg:grid-cols-3
          "
        >

          {/* LEFT SIDE */}
          <div
            className="
              lg:col-span-2
              rounded-[40px]
              border
              border-white/60
              bg-white/80
              p-8
              backdrop-blur-2xl
              shadow-[0_30px_80px_rgba(15,23,42,0.08)]
              md:p-10
            "
          >

            {/* TOP */}
            <div
              className="
                flex
                flex-col
                gap-6
                md:flex-row
                md:items-center
                md:justify-between
              "
            >

              <div>

                <p
                  className="
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-blue-600
                  "
                >
                  Weekly Performance
                </p>

                <h2
                  className="
                    mt-3
                    text-4xl
                    font-black
                    tracking-tight
                    text-slate-900
                  "
                >
                  Learning Overview
                </h2>

              </div>

              <div
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-2xl
                  bg-slate-900
                  px-6
                  py-4
                  text-white
                  shadow-xl
                "
              >

                <ArrowUpRight size={18} />

                <span className="font-semibold">
                  78% Overall Progress
                </span>

              </div>

            </div>

            {/* SUBJECTS */}
            <div className="mt-12 space-y-8">

              {subjects.map(subject => (
                <div key={subject.title}>

                  <div className="mb-4 flex items-center justify-between">

                    <h3
                      className="
                        text-lg
                        font-bold
                        text-slate-800
                      "
                    >
                      {subject.title}
                    </h3>

                    <span
                      className="
                        text-sm
                        font-semibold
                        text-slate-500
                      "
                    >
                      {subject.progress}
                    </span>

                  </div>

                  <div
                    className="
                      h-4
                      w-full
                      overflow-hidden
                      rounded-full
                      bg-slate-200
                    "
                  >

                    <div
                      className={`
                        h-full
                        rounded-full
                        bg-gradient-to-r
                        ${subject.color}
                      `}
                      style={{
                        width: subject.width,
                      }}
                    />

                  </div>

                </div>
              ))}

            </div>

            {/* BOTTOM CARDS */}
            <div
              className="
                mt-12
                grid
                grid-cols-1
                gap-6
                md:grid-cols-2
              "
            >

              {/* DAILY GOAL */}
              <div
                className="
                  overflow-hidden
                  rounded-[32px]
                  bg-gradient-to-br
                  from-blue-600
                  to-violet-600
                  p-7
                  text-white
                  shadow-[0_25px_60px_rgba(59,130,246,0.30)]
                "
              >

                <p
                  className="
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-blue-100
                  "
                >
                  Daily Goal
                </p>

                <h3
                  className="
                    mt-4
                    text-4xl
                    font-black
                    tracking-tight
                  "
                >
                  80%
                </h3>

                <p className="mt-4 text-blue-100 leading-relaxed">
                  You are doing great today. Keep learning and
                  maintain your progress streak.
                </p>

              </div>

              {/* MILESTONE */}
              <div
                className="
                  overflow-hidden
                  rounded-[32px]
                  bg-[#0f172a]
                  p-7
                  text-white
                  shadow-[0_25px_60px_rgba(15,23,42,0.25)]
                "
              >

                <p
                  className="
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-slate-400
                  "
                >
                  Next Milestone
                </p>

                <h3
                  className="
                    mt-4
                    text-3xl
                    font-black
                    tracking-tight
                  "
                >
                  Advanced Lessons
                </h3>

                <p className="mt-4 text-slate-300 leading-relaxed">
                  Complete 5 more lessons to unlock advanced
                  learning content.
                </p>

              </div>

            </div>

          </div>

          {/* ACHIEVEMENTS */}
          <div
            className="
              rounded-[40px]
              border
              border-white/60
              bg-white/80
              p-8
              backdrop-blur-2xl
              shadow-[0_30px_80px_rgba(15,23,42,0.08)]
            "
          >

            {/* HEADER */}
            <div>

              <p
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-violet-600
                "
              >
                Rewards
              </p>

              <h2
                className="
                  mt-3
                  text-4xl
                  font-black
                  tracking-tight
                  text-slate-900
                "
              >
                Achievements
              </h2>

            </div>

            {/* LIST */}
            <div className="mt-10 space-y-4">

              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-start
                    gap-4
                    rounded-[28px]
                    border
                    border-slate-100
                    bg-slate-50/80
                    p-5
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                  "
                >

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      from-yellow-400
                      to-orange-500
                      shadow-lg
                    "
                  >
                    <Trophy size={24} className="text-white" />
                  </div>

                  <div>

                    <h3
                      className="
                        text-base
                        font-bold
                        text-slate-800
                      "
                    >
                      {achievement}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-sm
                        leading-relaxed
                        text-slate-500
                      "
                    >
                      Achievement unlocked successfully.
                    </p>

                  </div>

                </div>
              ))}

            </div>

            {/* MOTIVATION CARD */}
            <div
              className="
                relative
                mt-8
                overflow-hidden
                rounded-[32px]
                bg-gradient-to-br
                from-violet-600
                to-fuchsia-600
                p-7
                text-white
                shadow-[0_25px_60px_rgba(168,85,247,0.30)]
              "
            >

              <div
                className="
                  absolute
                  right-0
                  top-0
                  h-40
                  w-40
                  rounded-full
                  bg-white/10
                  blur-3xl
                "
              />

              <div className="relative z-10">

                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-white/15
                    backdrop-blur-xl
                  "
                >
                  <Sparkles size={28} />
                </div>

                <h3
                  className="
                    mt-6
                    text-3xl
                    font-black
                    tracking-tight
                  "
                >
                  Keep Growing
                </h3>

                <p
                  className="
                    mt-4
                    leading-relaxed
                    text-violet-100
                  "
                >
                  Your learning journey is improving every day.
                  Continue practicing and exploring new lessons.
                </p>

              </div>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
};

export default Progress;