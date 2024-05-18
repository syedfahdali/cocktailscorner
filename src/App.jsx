import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import SingleCocktail from "./pages/SingleCocktail";
import Apitest from "./pages/Apitest";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import { AuthProvider } from './components/AuthContext'; // Import AuthProvider
import './App.css';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cocktail/:id" element={<SingleCocktail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/apitest" element={<Apitest />} />
          <Route path="*" element={<Error />} /> {/* Add a route for the Error page */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}
