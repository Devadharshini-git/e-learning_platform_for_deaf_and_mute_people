import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  Sparkles,
  Layers3,
} from 'lucide-react';

import { lessonData } from '../data/lessonData';
import useVoiceAssistant from '../hooks/useVoiceAssistant';

const colorMap = {
  blue: {
    card:
      'from-blue-500/10 to-cyan-500/10 border-blue-100 hover:border-blue-300',
    accent: 'from-blue-600 to-cyan-500',
    soft: 'bg-blue-50 text-blue-700',
  },

  green: {
    card:
      'from-emerald-500/10 to-green-500/10 border-emerald-100 hover:border-emerald-300',
    accent: 'from-emerald-600 to-green-500',
    soft: 'bg-emerald-50 text-emerald-700',
  },

  purple: {
    card:
      'from-violet-500/10 to-fuchsia-500/10 border-violet-100 hover:border-violet-300',
    accent: 'from-violet-600 to-fuchsia-500',
    soft: 'bg-violet-50 text-violet-700',
  },
};

const TopicList = () => {
  const { subject } = useParams();

  const { say } = useVoiceAssistant();

  const data = lessonData[subject];

  const theme = colorMap[data?.color] || colorMap.blue;

  useEffect(() => {
    if (data) {
      say(
        `Welcome to ${data.title}! Pick a topic to start learning.`
      );
    }
  }, [data]);

  /* NOT FOUND */
  if (!data) {
    return (
      <main
        className="
          min-h-screen
          flex
          items-center
          justify-center
          bg-[#f5f7fb]
          px-6
        "
      >

        <div
          className="
            rounded-[32px]
            border
            border-white/60
            bg-white/80
            p-12
            text-center
            backdrop-blur-2xl
            shadow-[0_30px_80px_rgba(15,23,42,0.08)]
          "
        >

          <h1
            className="
              text-4xl
              font-black
              tracking-tight
              text-red-500
            "
          >
            Subject Not Found
          </h1>

          <Link
            to="/lessons"
            className="
              mt-6
              inline-flex
              items-center
              gap-2
              rounded-2xl
              bg-slate-900
              px-6
              py-3
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
            "
          >

            <ArrowLeft size={18} />

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
        py-16
      "
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">

        <div
          className="
            absolute
            left-0
            top-0
            h-[420px]
            w-[420px]
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
            h-[420px]
            w-[420px]
            rounded-full
            bg-violet-200/30
            blur-3xl
          "
        />

      </div>

      <div className="mx-auto max-w-7xl pt-16">

        {/* TOP BAR */}
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

          <Link
            to="/lessons"
            className="
              inline-flex
              items-center
              gap-3
              self-start
              rounded-2xl
              border
              border-white/60
              bg-white/80
              px-5
              py-3
              font-semibold
              text-slate-700
              backdrop-blur-xl
              shadow-[0_10px_30px_rgba(15,23,42,0.06)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
            "
          >

            <ArrowLeft size={18} />

            Back to Subjects

          </Link>

          <div
            className={`
              inline-flex
              items-center
              gap-2
              rounded-full
              px-5
              py-2.5
              text-sm
              font-semibold
              ${theme.soft}
            `}
          >

            <Sparkles size={15} />

            Interactive Learning Topics

          </div>

        </div>

        {/* HERO */}
        <section
          className="
            mt-10
            overflow-hidden
            rounded-[40px]
            border
            border-white/60
            bg-white/75
            backdrop-blur-2xl
            shadow-[0_30px_90px_rgba(15,23,42,0.08)]
          "
        >

          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">

            {/* LEFT */}
            <div className="p-10 md:p-14">

              <div
                className={`
                  flex
                  h-24
                  w-24
                  items-center
                  justify-center
                  rounded-[28px]
                  bg-gradient-to-br
                  ${theme.accent}
                  text-5xl
                  text-white
                  shadow-2xl
                `}
              >
                {data.icon}
              </div>

              <h1
                className="
                  mt-10
                  text-5xl
                  font-black
                  leading-[0.95]
                  tracking-[-0.05em]
                  text-slate-900
                  md:text-7xl
                "
              >
                {data.title}
              </h1>

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
                Choose a topic and start learning with
                interactive lessons, visual explanations and
                accessibility-first learning experiences.
              </p>

              {/* STATS */}
              <div
                className="
                  mt-12
                  grid
                  grid-cols-2
                  gap-5
                  md:max-w-md
                "
              >

                <div
                  className="
                    rounded-3xl
                    border
                    border-slate-100
                    bg-slate-50/80
                    p-6
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
                    Topics
                  </p>

                  <h3
                    className="
                      mt-3
                      text-4xl
                      font-black
                      text-slate-900
                    "
                  >
                    {data.topics.length}
                  </h3>

                </div>

                <div
                  className="
                    rounded-3xl
                    border
                    border-slate-100
                    bg-slate-50/80
                    p-6
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
                    Lessons
                  </p>

                  <h3
                    className="
                      mt-3
                      text-4xl
                      font-black
                      text-slate-900
                    "
                  >
                    {data.topics.reduce(
                      (acc, item) => acc + item.slides.length,
                      0
                    )}
                  </h3>

                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div
              className={`
                relative
                overflow-hidden
                bg-gradient-to-br
                ${theme.accent}
                p-10
                text-white
              `}
            >

              <div
                className="
                  absolute
                  right-0
                  top-0
                  h-72
                  w-72
                  rounded-full
                  bg-white/10
                  blur-3xl
                "
              />

              <div className="relative z-10 flex h-full flex-col">

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    bg-white/10
                    px-5
                    py-4
                    backdrop-blur-xl
                  "
                >

                  <BookOpen size={22} />

                  <span className="font-semibold">
                    Smart Learning Experience
                  </span>

                </div>

                <div className="mt-auto">

                  <div
                    className="
                      flex
                      h-28
                      w-28
                      items-center
                      justify-center
                      rounded-[32px]
                      bg-white/15
                      text-6xl
                      backdrop-blur-xl
                    "
                  >
                    {data.icon}
                  </div>

                  <h2
                    className="
                      mt-8
                      text-4xl
                      font-black
                      leading-tight
                    "
                  >
                    Learn Faster
                    <span className="block text-white/80">
                      With Accessibility
                    </span>
                  </h2>

                  <p
                    className="
                      mt-5
                      max-w-sm
                      text-lg
                      leading-relaxed
                      text-white/80
                    "
                  >
                    Interactive sign language learning designed
                    for modern students with AI-assisted support.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* TOPICS */}
        <section className="mt-12">

          <div
            className="
              mb-8
              flex
              items-center
              justify-between
            "
          >

            <div>

              <p
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-slate-400
                "
              >
                Available Topics
              </p>

              <h2
                className="
                  mt-2
                  text-4xl
                  font-black
                  tracking-tight
                  text-slate-900
                "
              >
                Start Learning
              </h2>

            </div>

          </div>

          <ul
            className="
              grid
              grid-cols-1
              gap-8
              md:grid-cols-2
            "
            role="list"
          >

            {data.topics.map(topic => (
              <li key={topic.id}>

                <Link
                  to={`/lessons/${subject}/${topic.id}`}
                  onClick={() =>
                    say(`Opening ${topic.title}`)
                  }
                  aria-label={`Start topic: ${topic.title}`}
                  className="
                    group
                    block
                    h-full
                  "
                >

                  <div
                    className={`
                      relative
                      overflow-hidden
                      rounded-[32px]
                      border
                      bg-gradient-to-br
                      ${theme.card}
                      p-8
                      shadow-[0_20px_60px_rgba(15,23,42,0.05)]
                      transition-all
                      duration-300
                      hover:-translate-y-2
                      hover:shadow-[0_30px_80px_rgba(15,23,42,0.10)]
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
                        bg-white/40
                        blur-3xl
                      "
                    />

                    <div className="relative z-10">

                      {/* TOP */}
                      <div
                        className="
                          flex
                          items-start
                          justify-between
                          gap-6
                        "
                      >

                        <div>

                          <div
                            className={`
                              flex
                              h-20
                              w-20
                              items-center
                              justify-center
                              rounded-[26px]
                              bg-gradient-to-br
                              ${theme.accent}
                              text-4xl
                              text-white
                              shadow-xl
                            `}
                          >
                            {topic.icon}
                          </div>

                          <h3
                            className="
                              mt-6
                              text-3xl
                              font-black
                              tracking-tight
                              text-slate-900
                            "
                          >
                            {topic.title}
                          </h3>

                        </div>

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
                            transition-all
                            duration-300
                            group-hover:translate-x-1
                            group-hover:-translate-y-1
                          "
                        >
                          <ArrowUpRight size={20} />
                        </div>

                      </div>

                      {/* DESCRIPTION */}
                      <p
                        className="
                          mt-5
                          text-lg
                          leading-relaxed
                          text-slate-600
                        "
                      >
                        {topic.description}
                      </p>

                      {/* FOOTER */}
                      <div
                        className="
                          mt-8
                          flex
                          items-center
                          justify-between
                          rounded-2xl
                          border
                          border-white/50
                          bg-white/60
                          px-5
                          py-4
                          backdrop-blur-xl
                        "
                      >

                        <div
                          className="
                            flex
                            items-center
                            gap-3
                          "
                        >

                          <div
                            className="
                              flex
                              h-11
                              w-11
                              items-center
                              justify-center
                              rounded-xl
                              bg-slate-900
                              text-white
                            "
                          >
                            <Layers3 size={18} />
                          </div>

                          <div>

                            <p
                              className="
                                text-xs
                                font-semibold
                                uppercase
                                tracking-[0.15em]
                                text-slate-400
                              "
                            >
                              Lesson Slides
                            </p>

                            <p
                              className="
                                mt-1
                                font-bold
                                text-slate-800
                              "
                            >
                              {topic.slides.length} Slides
                            </p>

                          </div>

                        </div>

                        <span
                          className="
                            text-sm
                            font-bold
                            text-slate-900
                          "
                        >
                          Open Topic
                        </span>

                      </div>

                    </div>

                  </div>

                </Link>

              </li>
            ))}

          </ul>

        </section>

      </div>

    </main>
  );
};

export default TopicList;