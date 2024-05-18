// Navbar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo2.svg';
import { AuthContext } from './AuthContext';

export default function Navbar() {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="nav-center">
        <img src={logo} alt="cocktail db logo" className="logo" />
        <ul className="nav-links">
          {currentUser ? (
            <>
              <li>
                <span className='username'>Welcome, {currentUser.displayName}</span>
              </li>
              <li>
                <button onClick={logout} className="logout-button">Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/apitest">API Test</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
