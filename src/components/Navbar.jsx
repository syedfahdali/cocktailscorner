import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../logo2.svg';
import { AuthContext } from './AuthContext';

export default  function Navbar() {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate(); // Use useNavigate to access navigation functions

  const handleLogout = async () => {
    await logout(); // Logout the user
    navigate('/'); // Redirect to the home page
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <img src={logo} alt="cocktail db logo" className="logo" />
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {currentUser && (
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          )}
          {currentUser ? (
            <>
              <li>
                <span className='username'>Welcome, {currentUser.displayName}</span>
              </li>
              <li>
                <button onClick={handleLogout} className="logout-button">Logout</button>
              </li>
            </>
          ) : (
            <>
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
