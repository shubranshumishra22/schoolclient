import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Button from '../components/ui/Button';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login({ email, password });
      navigate('/admin/dashboard');
    } catch {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen bg-cream-50 flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="font-serif text-2xl text-navy-800">Prentice The school</Link>
          <p className="text-xs font-medium tracking-widest uppercase text-gold-600 mt-6 mb-2">Admin Portal</p>
          <h1 className="font-serif text-4xl text-navy-800">Sign In</h1>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-8 space-y-5">
          {error && (
            <div className="bg-red-50 text-red-600 text-sm px-4 py-2 rounded-lg">{error}</div>
          )}

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-navy-800">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 py-2.5 border border-slate-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-navy-500"
              placeholder="admin@prenticeschool.edu"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-navy-800">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="px-4 py-2.5 border border-slate-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-navy-500"
              placeholder="Enter password"
            />
          </div>

          <Button type="submit" variant="primary" className="w-full flex items-center justify-center gap-2">
            <LogIn size={16} />
            Sign In
          </Button>

          <p className="text-center text-sm text-slate-500">
            Don't have an account?{' '}
            <Link to="/admin/signup" className="text-navy-800 font-medium hover:underline">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
