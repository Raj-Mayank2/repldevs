import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import repl from '../../assets/repl.png'
const Navbar = () => {

  const { loginWithRedirect,isAuthenticated,logout,user } = useAuth0();
  return (
    <nav className='container'>
      <img src={repl} className='logo' alt="alt" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/teams">Teams</Link></li>
        


      </ul>
    </nav>
  )
}

export default Navbar