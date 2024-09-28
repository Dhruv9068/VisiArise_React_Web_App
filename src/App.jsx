import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '../src/contexts/authContext';
import Navbar from './Components/Navbar';
import Shopping from './Components/Shopping';
import About from './Components/About';
import Cart from './Components/Cart';
import Home from './Components/Home';  // Assuming you have a Home page
import Login from './Components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Components/Signup';


const App = () => {
  return (
    <AuthProvider>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProtectedRoute />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </div>
    </Router>
    </AuthProvider>
  );
};


const ProtectedRoute = () => {
  const { user } = useAuth();

  if (user === null) {
    // User is still loading
    return <div>Loading...</div>;
  }
  if (!user) {
    return <Navigate to="/login" />;
  }

  return user ? <Navigate to="/home" /> : <Navigate to="/signup" />;
};


export default App;
