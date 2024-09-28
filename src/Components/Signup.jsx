import Navbar from "./Navbar";
import { useState } from 'react';
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      navigate('/login');  // Redirect to login after signup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("https://i.makeagif.com/media/11-22-2022/IlnLT0.gif")' }}>
        <div className="relative bg-gradient-radial bg-black p-8 rounded-xl shadow-lg max-w-md w-full animate_animated animate_fadeIn">
          <h1 className="text-4xl font-bold text-white text-center mb-6 animate_animated animate_pulse">
            Create Account
          </h1>
          <p className="text-center text-white mb-8 animate_animated animatefadeIn animate_delay-1s">
            Sign up to get started.
          </p>
          <form className="space-y-6">
            <div>
              <label className="block text-white font-medium" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-md bg-white text-black border border-neonPurple focus:outline-none focus:ring-2 focus:ring-neonPurple focus:border-transparent transition duration-300"
              />
            </div>
            <div>
              <label className="block text-white font-medium" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-md bg-white text-black border border-neonPurple focus:outline-none focus:ring-2 focus:ring-neonPurple focus:border-transparent transition duration-300"
              />
            </div>
            <div>
              <label className="block text-white font-medium" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-md bg-white text-black border border-neonPurple focus:outline-none focus:ring-2 focus:ring-neonPurple focus:border-transparent transition duration-300"
              />
            </div>
            <div>
              <button
                type="submit"
                onSubmit={handleSignup}
                className="w-full py-2 rounded-md bg-neonPurple text-white font-bold hover:bg-neonBlue transition duration-300 animate_animated animate_bounce"
              >
                Sign Up
              </button>
              
            </div>
            {error && <p>{error}</p>}
          </form>
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-30 pointer-events-none">
          <div className="bg-neonPurple w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"></div>
          <div className="bg-neonBlue w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl animate-bounce-slow"></div>
        </div>
      </div>
    </>
  );
};

export default Signup;