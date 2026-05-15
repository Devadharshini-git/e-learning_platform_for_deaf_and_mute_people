import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main id="main-content" tabIndex="-1" aria-label="Home page">
      <section className="text-center py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <h1 className="text-5xl font-bold text-primary mb-4">
          Learn Sign Language 🤟
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          AI-powered platform for deaf, mute, and visually impaired learners.
          Voice-assisted. Screen-reader friendly. Always accessible.
        </p>
        <Link
          to="/lessons"
          className="inline-block bg-primary text-white px-8 py-4 rounded-xl
            text-lg font-semibold hover:bg-blue-700 transition-colors
            focus-visible:ring-4 focus-visible:ring-yellow-400"
          aria-label="Start learning sign language"
        >
          Start Learning →
        </Link>
      </section>

      <section aria-labelledby="features-heading" className="py-16 px-6 max-w-5xl mx-auto">
        <h2 id="features-heading" className="text-3xl font-bold text-center mb-12">
          Built for Everyone
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: '🎤', title: 'Voice Assistant', desc: 'Hands-free navigation and lesson control' },
            { icon: '👁️', title: 'Visual Impairment Support', desc: 'NLP-powered screen reader optimized content' },
            { icon: '🤖', title: 'AI Sign Detection', desc: 'Real-time sign language recognition via camera' },
          ].map(f => (
            <article key={f.title} className="bg-white rounded-2xl p-8 shadow-md text-center">
              <span className="text-5xl" aria-hidden="true">{f.icon}</span>
              <h3 className="text-xl font-bold mt-4 mb-2">{f.title}</h3>
              <p className="text-gray-500">{f.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;