
import Navbar from "./Navbar";
import { doSignInWithEmailAndPassword, doSignInWithGoogle, doSignInWithGithub } from "../firebase/auth";
import { useAuth } from "../contexts/authContext/index";
import { Navigate } from "react-router-dom";

const Login = () => {
   const {userLoggedin}= useAuth()

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [isSigningIn, setIsSigningIn] = useState(false);
   const [errorMessage, setErrorMessage] = useState('');

   const onSubmit = async(e)=>{
    e.preventDefault();

    if(!isSigningIn){
        setIsSigningIn(true);
        await doSignInWithEmailAndPassword(email, password);
    }
   }

   const onGoogleSignIn = (e)=>{
    e.preventDefault();

    if(!isSigningIn){
        setIsSigningIn(true);
        doSignInWithGoogle().catch(err =>{
            setIsSigningIn(false);
        });
    }
   };

   const onGithubSignIn = (e)=>{
    e.preventDefault();

    if(!isSigningIn){
        setIsSigningIn(true);
        doSignInWithGithub().catch(err =>{
            setIsSigningIn(false);
        });
    }
   };

    return (
        <>
        {userLoggedin && <Navigate to={'home'} replace={true} />}
          <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("https://i.makeagif.com/media/11-22-2022/IlnLT0.gif")' }}>
        <div className="relative bg-gradient-radial bg-black p-8 rounded-xl shadow-lg max-w-md w-full animate_animated animate_fadeIn">
          <h1 className="text-4xl font-bold text-white text-center mb-6 animate_animated animate_pulse">
            Welcome Back!
          </h1>
          <p className="text-center text-white mb-8 animate_animated animatefadeIn animate_delay-1s">
            Please login to your account.
          </p>
          <form className="space-y-6">
            <div>
              <label className="block text-white font-medium" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                required
                value={email} onChange={ (e)=>{setEmail(e.target.value) }}
                id="email"
                className="w-full px-4 py-2 rounded-md bg-white text-black border border-neonBlue focus:outline-none focus:ring-2 focus:ring-neonBlue focus:border-transparent transition duration-300"
              />
            </div>
            <div>
              <label className="block text-white font-medium" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                value={password} onChange={ (e)=>{setPassword(e.target.value) }}
                className="w-full px-4 py-2 rounded-md bg-white text-black  border border-neonBlue focus:outline-none focus:ring-2 focus:ring-neonBlue focus:border-transparent transition duration-300"
              />
            </div>
            {errorMessage && (
                <span className="text-red-600 font-bold">{errorMessage}</span>
            )}

            <div>
              <button
                type="submit"
                disabled= {isSigningIn}
                onSubmit={onSubmit}
                className={`w-full py-2 rounded-md bg-neonPurple text-white font-bold hover:bg-neonBlue transition duration-300 animate_animated animate_bounce ${isSigningIn}`}
              >
                {isSigningIn ? 'Signing In...' : 'Sign In '}
                Login 
              </button>
            </div>
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
  
  export default Login;