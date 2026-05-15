import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AccessibilityProvider } from './context/AccessibilityContext';
import AccessibilityToolbar from './components/accessibility/AccessibilityToolbar';
import VoiceAssistant from './components/accessibility/VoiceAssistant';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import SubjectLessons from './pages/SubjectLessons';
import Practice from './pages/Practice';
import Progress from './pages/Progress';
import LessonDetail from './pages/LessonDetail';
import TopicList from './pages/TopicList';
import LessonPlayer from './pages/LessonPlayer';

// inside <Routes> — replace old subject route
// inside <Routes>
const SkipLink = () => (
  <a href="#main-content"
    className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-yellow-400 focus:text-black focus:px-4 focus:py-2 focus:rounded focus:font-bold"
  >
    Skip to main content
  </a>
);

function App() {
  return (
    <BrowserRouter>
      <AccessibilityProvider>
        <SkipLink />
        <AccessibilityToolbar />
        <Navbar />
        <VoiceAssistant />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/lessons/:subject" element={<SubjectLessons />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/lessons/:subject/:lessonId" element={<LessonDetail />} />
          <Route path="/lessons/:subject" element={<TopicList />} />
<Route path="/lessons/:subject/:topicId" element={<LessonPlayer />} />

        </Routes>
      </AccessibilityProvider>
    </BrowserRouter>
  );
}

export default App;