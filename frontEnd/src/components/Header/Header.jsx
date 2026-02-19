import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <h1 className="website-name">Smart Hackathon Automation</h1>
        </div>
        <nav className="header-middle">
          <ul className="nav-list">
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/features">Features</NavLink>
            </li>
            <li>
                <NavLink to = "/howitworks">How it Works</NavLink>
            </li>
            <li>
                <NavLink to = "/forcolleges">For Colleges</NavLink>
            </li>
            <li>
                <NavLink to = "/about">About Us</NavLink>
            </li>
            <li>
                <NavLink to = "/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
        <div className="header-right">
          <NavLink to="/login" className="login-btn">Login</NavLink>
          <NavLink to="/signin" className="signup-btn">Sign Up</NavLink>
        </div>
      </div>
    </header>
  )
}

export default Header