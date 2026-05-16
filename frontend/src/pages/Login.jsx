import React from 'react';
import { Link } from 'react-router-dom';

import {
  HandMetal,
  ArrowRight,
} from 'lucide-react';

const Login = () => (
  <main
    id="main-content"
    className="
      relative
      flex
      min-h-screen
      items-center
      justify-center
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

    {/* LOGIN CARD */}
    <div
      className="
        relative
        w-full
        max-w-md
        overflow-hidden
        rounded-[36px]
        border
        border-white/60
        bg-white/80
        p-10
        backdrop-blur-2xl
        shadow-[0_30px_80px_rgba(15,23,42,0.10)]
      "
    >

      {/* TOP GLOW */}
      <div
        className="
          absolute
          right-0
          top-0
          h-40
          w-40
          rounded-full
          bg-blue-100/40
          blur-3xl
        "
      />

      {/* HEADER */}
      <div className="relative z-10 text-center">

        <div
          className="
            mx-auto
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-[24px]
            bg-slate-900
            shadow-xl
          "
        >
          <HandMetal size={34} className="text-white" />
        </div>

        <h1
          className="
            mt-8
            text-4xl
            font-black
            tracking-[-0.04em]
            text-slate-900
          "
        >
          Welcome Back
        </h1>

        <p className="mt-3 text-base text-slate-500">
          Login to continue your learning journey
        </p>

      </div>

      {/* FORM */}
      <div className="relative z-10 mt-10 space-y-6">

        {/* EMAIL */}
        <div>

          <label
            className="
              mb-3
              block
              text-sm
              font-semibold
              text-slate-700
            "
          >
            Email Address
          </label>

          <input
            type="email"
            placeholder="your@email.com"
            aria-label="Email address"
            className="
              w-full
              rounded-2xl
              border
              border-slate-200
              bg-white/80
              px-5
              py-4
              text-base
              text-slate-900
              outline-none
              transition-all
              duration-300
              placeholder:text-slate-400
              focus:border-blue-500
              focus:ring-4
              focus:ring-blue-100
            "
          />

        </div>

        {/* PASSWORD */}
        <div>

          <label
            className="
              mb-3
              block
              text-sm
              font-semibold
              text-slate-700
            "
          >
            Password
          </label>

          <input
            type="password"
            placeholder="••••••••"
            aria-label="Password"
            className="
              w-full
              rounded-2xl
              border
              border-slate-200
              bg-white/80
              px-5
              py-4
              text-base
              text-slate-900
              outline-none
              transition-all
              duration-300
              placeholder:text-slate-400
              focus:border-blue-500
              focus:ring-4
              focus:ring-blue-100
            "
          />

        </div>

        {/* BUTTON */}
        <button
          className="
            inline-flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-2xl
            bg-slate-900
            px-6
            py-4
            text-base
            font-semibold
            text-white
            shadow-xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-slate-800
          "
        >
          Login
          <ArrowRight size={18} />
        </button>

      </div>

      {/* FOOTER */}
      <p
        className="
          relative
          z-10
          mt-8
          text-center
          text-sm
          text-slate-500
        "
      >
        No account?
        <Link
          to="/register"
          className="
            ml-2
            font-semibold
            text-slate-900
            transition-colors
            hover:text-blue-600
          "
        >
          Register here
        </Link>
      </p>

    </div>

  </main>
);

export default Login;