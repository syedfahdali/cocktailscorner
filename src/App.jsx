// src/App.jsx
import React from "react";
import {db} from "./pages/firebase";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import SingleCocktail from "./pages/SingleCocktail";
import Apitest from "./pages/Apitest";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./components/AuthContext";
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
          <Route path="/dashboard" element={<Dashboard />}  />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>

    </AuthProvider>
  );
}
