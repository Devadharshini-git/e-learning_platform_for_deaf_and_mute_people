import React from 'react';

import {
  HandMetal,
  Brain,
  Camera,
  LineChart,
  Globe,
  Sparkles,
  ScanSearch,
} from 'lucide-react';

const features = [
  {
    icon: Camera,
    title: 'Live Camera Practice',
    desc: 'Practice sign language directly using your webcam.',
  },
  {
    icon: Brain,
    title: 'AI Feedback',
    desc: 'Receive smart corrections and personalized suggestions.',
  },
  {
    icon: LineChart,
    title: 'Skill Tracking',
    desc: 'Monitor progress and improve through daily practice.',
  },
  {
    icon: Globe,
    title: 'Accessible Learning',
    desc: 'Built for inclusive and accessibility-first education.',
  },
];

const stats = [
  {
    value: '95%',
    label: 'Accuracy',
  },
  {
    value: '24/7',
    label: 'Practice',
  },
  {
    value: 'AI',
    label: 'Powered',
  },
];

const Practice = () => {
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
              AI Powered Interactive Practice
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
            Practice
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
              mx-auto
              mt-8
              max-w-3xl
              text-lg
              leading-relaxed
              text-slate-600
              md:text-xl
            "
          >
            Improve your sign language skills with interactive AI-powered
            exercises, real-time gesture recognition and accessibility-first
            learning experiences.
          </p>

        </div>

        {/* MAIN SECTION */}
        <section
          className="
            relative
            mt-20
            overflow-hidden
            rounded-[40px]
            border
            border-white/60
            bg-white/80
            p-8
            backdrop-blur-2xl
            shadow-[0_30px_80px_rgba(15,23,42,0.08)]
            md:p-12
          "
        >

          {/* GLOW */}
          <div
            className="
              absolute
              right-0
              top-0
              h-72
              w-72
              rounded-full
              bg-violet-200/30
              blur-3xl
            "
          />

          <div
            className="
              absolute
              bottom-0
              left-0
              h-72
              w-72
              rounded-full
              bg-blue-200/30
              blur-3xl
            "
          />

          <div
            className="
              relative
              z-10
              grid
              grid-cols-1
              items-center
              gap-16
              lg:grid-cols-2
            "
          >

            {/* LEFT CONTENT */}
            <div>

              {/* LABEL */}
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-blue-100
                  bg-blue-50
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-blue-700
                "
              >
                <Brain size={16} />
                AI Assisted Learning
              </div>

              {/* TITLE */}
              <h2
                className="
                  mt-8
                  text-4xl
                  font-black
                  leading-tight
                  tracking-[-0.04em]
                  text-slate-900
                  md:text-5xl
                "
              >
                Interactive Practice
                <span className="block text-slate-400">
                  Coming Soon
                </span>
              </h2>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-8
                  max-w-2xl
                  text-lg
                  leading-relaxed
                  text-slate-600
                "
              >
                Students will soon be able to practice hand gestures
                using webcam-based AI sign recognition with instant
                visual feedback and guided improvements.
              </p>

              {/* FEATURES */}
              <div
                className="
                  mt-12
                  grid
                  grid-cols-1
                  gap-4
                  sm:grid-cols-2
                "
              >

                {features.map(feature => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.title}
                      className="
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
                          bg-slate-900
                          shadow-lg
                        "
                      >
                        <Icon size={22} className="text-white" />
                      </div>

                      <h3
                        className="
                          mt-5
                          text-lg
                          font-bold
                          tracking-tight
                          text-slate-900
                        "
                      >
                        {feature.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-relaxed
                          text-slate-500
                        "
                      >
                        {feature.desc}
                      </p>

                    </div>
                  );
                })}

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="flex justify-center">

              <div className="relative w-full max-w-md">

                {/* OUTER GLOW */}
                <div
                  className="
                    absolute
                    inset-0
                    scale-110
                    rounded-[40px]
                    bg-gradient-to-br
                    from-blue-500/20
                    to-violet-500/20
                    blur-3xl
                  "
                />

                {/* DEVICE CARD */}
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[36px]
                    border
                    border-slate-700
                    bg-[#0f172a]
                    p-6
                    shadow-[0_30px_80px_rgba(15,23,42,0.35)]
                  "
                >

                  {/* CAMERA SCREEN */}
                  <div
                    className="
                      relative
                      flex
                      aspect-video
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-[28px]
                      border
                      border-slate-700
                      bg-black
                    "
                  >

                    {/* SCREEN GLOW */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-br
                        from-blue-500/10
                        to-violet-500/10
                      "
                    />

                    <div className="relative z-10 text-center">

                      <div
                        className="
                          mx-auto
                          flex
                          h-24
                          w-24
                          items-center
                          justify-center
                          rounded-[28px]
                          bg-white/10
                          backdrop-blur-xl
                        "
                      >
                        <HandMetal size={46} className="text-white" />
                      </div>

                      <div
                        className="
                          mt-6
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-emerald-500/20
                          bg-emerald-500/10
                          px-4
                          py-2
                          text-sm
                          font-semibold
                          text-emerald-300
                        "
                      >
                        <ScanSearch size={16} />
                        AI Detection Ready
                      </div>

                    </div>

                  </div>

                  {/* STATS */}
                  <div className="mt-6 grid grid-cols-3 gap-4">

                    {stats.map(stat => (
                      <div
                        key={stat.label}
                        className="
                          rounded-2xl
                          border
                          border-slate-700
                          bg-slate-800/80
                          p-4
                          text-center
                        "
                      >

                        <p
                          className="
                            text-2xl
                            font-black
                            tracking-tight
                            text-white
                          "
                        >
                          {stat.value}
                        </p>

                        <p
                          className="
                            mt-1
                            text-xs
                            font-medium
                            text-slate-400
                          "
                        >
                          {stat.label}
                        </p>

                      </div>
                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
};

export default Practice;