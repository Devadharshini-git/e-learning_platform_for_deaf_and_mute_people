import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AccessibilityProvider } from './context/AccessibilityContext';

import AccessibilityToolbar from './components/accessibility/AccessibilityToolbar';
import VoiceAssistant from './components/accessibility/VoiceAssistant';
import Navbar from './components/common/Navbar';

import Home from './pages/Home';
import Lessons from './pages/Lessons';
import TopicList from './pages/TopicList';
import LessonPlayer from './pages/LessonPlayer';
import Practice from './pages/Practice';
import Progress from './pages/Progress';
import Login from './pages/Login';
import Register from './pages/Register';

/* Accessibility Skip Link */
const SkipLink = () => (
  <a
    href="#main-content"
    className="
      sr-only
      focus:not-sr-only
      focus:fixed
      focus:top-5
      focus:left-5
      focus:z-[999]
      focus:px-6
      focus:py-3
      focus:rounded-2xl
      focus:bg-slate-900
      focus:text-white
      focus:font-semibold
      focus:shadow-2xl
      focus:outline-none
    "
  >
    Skip to main content
  </a>
);

function App() {
  return (
    <BrowserRouter>
      <AccessibilityProvider>

        {/* GLOBAL APP BACKGROUND */}
        <div
          className="
            relative
            min-h-screen
            overflow-hidden
            bg-[#f4f7fb]
            text-slate-800
          "
        >

          {/* MAIN BACKGROUND */}
          <div className="fixed inset-0 -z-20">

            {/* Soft Gradient */}
            <div
              className="
                absolute inset-0
                bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.10),transparent_35%),linear-gradient(to_bottom_right,#f8fafc,#eef2ff,#f5f3ff)]
              "
            />

            {/* Grid Texture */}
            <div
              className="
                absolute inset-0
                opacity-[0.035]
                [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]
                [background-size:72px_72px]
              "
            />

          </div>

          {/* DECORATIVE BLOBS */}
          <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

            <div
              className="
                absolute
                top-[-8rem]
                left-[-6rem]
                w-[30rem]
                h-[30rem]
                rounded-full
                bg-blue-500/10
                blur-3xl
              "
            />

            <div
              className="
                absolute
                top-[30%]
                right-[-10rem]
                w-[34rem]
                h-[34rem]
                rounded-full
                bg-purple-500/10
                blur-3xl
              "
            />

            <div
              className="
                absolute
                bottom-[-10rem]
                left-[25%]
                w-[28rem]
                h-[28rem]
                rounded-full
                bg-cyan-400/10
                blur-3xl
              "
            />

          </div>

          {/* TOP OVERLAY */}
          <div
            className="
              fixed
              inset-x-0
              top-0
              h-32
              -z-10
              bg-gradient-to-b
              from-white/70
              to-transparent
              backdrop-blur-[2px]
            "
          />

          {/* ACCESSIBILITY */}
          <SkipLink />
          <AccessibilityToolbar />

          {/* NAVIGATION */}
          <div
            className="
              sticky
              top-0
              z-50
              backdrop-blur-xl
              bg-white/55
              border-b
              border-white/30
              shadow-[0_8px_30px_rgba(15,23,42,0.04)]
            "
          >
            <div className="max-w-7xl mx-auto">
              <Navbar />
            </div>
          </div>

          {/* VOICE ASSISTANT */}
          <VoiceAssistant />

          {/* MAIN CONTENT */}
          <main
            id="main-content"
            className="
              relative
              z-10
              transition-all
              duration-300
            "
          >
            <Routes>

              <Route
                path="/"
                element={<Home />}
              />

              <Route
                path="/lessons"
                element={<Lessons />}
              />

              <Route
                path="/lessons/:subject"
                element={<TopicList />}
              />

              <Route
                path="/lessons/:subject/:topicId"
                element={<LessonPlayer />}
              />

              <Route
                path="/practice"
                element={<Practice />}
              />

              <Route
                path="/progress"
                element={<Progress />}
              />

              <Route
                path="/login"
                element={<Login />}
              />

              <Route
                path="/register"
                element={<Register />}
              />

            </Routes>
          </main>

        </div>

      </AccessibilityProvider>
    </BrowserRouter>
  );
}

export default App;