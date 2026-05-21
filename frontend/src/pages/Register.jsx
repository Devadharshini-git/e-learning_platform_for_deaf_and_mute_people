import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, GraduationCap, Sparkles, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('student');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    setLoading(true);
    const result = register(name, email, password, userType);
    if (result.success) {
      navigate('/');
    } else {
      setError(result.message);
    }
    setLoading(false);
  };

  return (
    <main id="main-content" className="relative min-h-screen overflow-hidden bg-[#f5f7fb] px-6 py-16 flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 h-[420px] w-[420px] rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-violet-200/40 blur-3xl" />
      </div>

      <div className="relative w-full max-w-6xl overflow-hidden rounded-[40px] border border-white/60 bg-white/70 backdrop-blur-2xl shadow-[0_30px_90px_rgba(15,23,42,0.10)]">
        <div className="grid lg:grid-cols-2">

          {/* LEFT SIDE — keep your original design */}
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-violet-600 to-fuchsia-600 p-10 text-white lg:p-14">
            <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="relative z-10">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/15 backdrop-blur-xl shadow-2xl">
                <Sparkles size={36} />
              </div>
              <h1 className="mt-10 text-5xl font-black leading-[1] tracking-[-0.05em]">
                Join <span className="block text-blue-100">SignLearn</span>
              </h1>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-white/85">
                Create your free account and start learning with accessible lessons,
                AI-powered tools and interactive sign language experiences.
              </p>
              <div className="mt-12 space-y-5">
                {[
                  { icon: <GraduationCap size={22} />, title: 'Interactive Learning', desc: 'Learn through sign language animations and engaging accessibility-first lessons.' },
                  { icon: <Sparkles size={22} />, title: 'AI Assisted Practice', desc: 'Improve skills with smart explanations, quizzes and personalized guidance.' },
                ].map(f => (
                  <div key={f.title} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">{f.icon}</div>
                    <div>
                      <h3 className="font-bold text-lg">{f.title}</h3>
                      <p className="mt-1 text-sm text-white/75 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="p-8 md:p-12 lg:p-14">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                <Sparkles size={15} /> Create Account
              </div>
              <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900">Get Started</h2>
              <p className="mt-3 text-slate-500 leading-relaxed">Create your account and continue your learning journey.</p>
            </div>

            {/* Error */}
            {error && (
              <div className="mt-6 bg-red-50 border border-red-200 text-red-600 rounded-2xl px-5 py-3 text-sm font-medium">
                ⚠️ {error}
              </div>
            )}

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              {/* NAME */}
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">Full Name</label>
                <div className="relative">
                  <div className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"><User size={20} /></div>
                  <input type="text" placeholder="Enter your full name" value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/70 py-4 pl-14 pr-5 text-lg text-slate-800 outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100" />
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">Email Address</label>
                <div className="relative">
                  <div className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"><Mail size={20} /></div>
                  <input type="email" placeholder="Enter your email" value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/70 py-4 pl-14 pr-5 text-lg text-slate-800 outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100" />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">Password</label>
                <div className="relative">
                  <div className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"><Lock size={20} /></div>
                  <input type="password" placeholder="Create a password" value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/70 py-4 pl-14 pr-5 text-lg text-slate-800 outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100" />
                </div>
              </div>

              {/* USER TYPE */}
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">I am a</label>
                <select value={userType} onChange={e => setUserType(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50/70 px-5 py-4 text-lg text-slate-800 outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100">
                  <option value="student">👦 Student</option>
                  <option value="parent">👨‍👩‍👧 Parent</option>
                  <option value="teacher">👩‍🏫 Teacher</option>
                </select>
              </div>

              {/* SUBMIT */}
              <button type="submit" disabled={loading}
                className="group mt-3 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 py-4 text-lg font-black text-white shadow-[0_20px_50px_rgba(79,70,229,0.30)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(79,70,229,0.40)] disabled:opacity-60">
                {loading ? 'Creating...' : 'Create Account'}
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>

            <p className="mt-8 text-center text-slate-500">
              Already have an account?{' '}
              <Link to="/login" className="font-bold text-blue-600 transition-colors hover:text-violet-600">Login here</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;