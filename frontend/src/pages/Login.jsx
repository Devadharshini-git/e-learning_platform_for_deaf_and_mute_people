import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    setLoading(true);
    const result = login(email, password);
    if (result.success) {
      navigate('/');
    } else {
      setError(result.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#5B4BFF] via-[#7A5CFF] to-[#D96DFF] flex items-center justify-center p-6 overflow-hidden">
      <div className="w-full max-w-6xl rounded-[40px] overflow-hidden bg-white shadow-2xl">
        <div className="grid lg:grid-cols-2 min-h-[700px]">

          {/* LEFT SIDE */}
          <div className="relative hidden lg:flex flex-col justify-center overflow-hidden bg-gradient-to-br from-[#5B4BFF] via-[#8A63FF] to-[#FF7AA2] p-16 text-white">
            <div className="absolute top-24 right-16 h-64 w-64 rounded-full bg-pink-300/20 blur-3xl" />
            <div className="relative z-10 max-w-lg">
              <h1 className="text-6xl font-black leading-tight">Welcome Back</h1>
              <p className="mt-6 text-xl leading-relaxed text-white/80">
                Sign in to continue your learning journey.
              </p>
              <p className="mt-8 text-lg leading-relaxed text-white/70">
                Access your courses, track progress, and continue building amazing skills.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-80">
              <div className="absolute bottom-0 left-[-60px] h-24 w-[420px] rotate-[-38deg] rounded-full bg-gradient-to-r from-pink-400 to-orange-300 opacity-80"></div>
              <div className="absolute bottom-28 left-44 h-20 w-72 rotate-[-38deg] rounded-full bg-gradient-to-r from-orange-300 to-pink-400 opacity-80"></div>
              <div className="absolute bottom-6 left-[320px] h-16 w-60 rotate-[-38deg] rounded-full bg-gradient-to-r from-violet-400 to-pink-300 opacity-70"></div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center justify-center bg-white px-8 py-16 sm:px-16">
            <div className="w-full max-w-md">
              <div className="text-center">
                <h2 className="text-4xl font-black text-[#5B4BFF]">USER LOGIN</h2>
              </div>

              {/* Error message */}
              {error && (
                <div className="mt-6 bg-red-50 border border-red-200 text-red-600
                  rounded-2xl px-5 py-3 text-sm font-medium text-center">
                  ⚠️ {error}
                </div>
              )}

              <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
                {/* EMAIL */}
                <div className="relative">
                  <Mail size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-[#6B5CFF]" />
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full rounded-2xl bg-[#F5F3FF] py-5 pl-14 pr-5 text-base outline-none border border-transparent transition-all duration-300 focus:border-[#6B5CFF] focus:bg-white focus:shadow-lg"
                  />
                </div>

                {/* PASSWORD */}
                <div className="relative">
                  <Lock size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-[#6B5CFF]" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="w-full rounded-2xl bg-[#F5F3FF] py-5 pl-14 pr-14 text-base outline-none border border-transparent transition-all duration-300 focus:border-[#6B5CFF] focus:bg-white focus:shadow-lg"
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500">
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                {/* OPTIONS */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm text-slate-600">
                    <input type="checkbox" /> Remember me
                  </label>
                  <button type="button" className="text-sm font-medium text-[#5B4BFF] hover:underline">
                    Forgot password?
                  </button>
                </div>

                {/* SUBMIT */}
                <button type="submit" disabled={loading}
                  className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-pink-500 to-[#5B4BFF] py-5 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl disabled:opacity-60">
                  {loading ? 'Signing in...' : 'SIGN IN'}
                  <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>

              <p className="mt-12 text-center text-sm text-slate-500">
                Don't have an account?{' '}
                <Link to="/register" className="ml-2 cursor-pointer font-semibold text-[#5B4BFF] hover:underline">
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}