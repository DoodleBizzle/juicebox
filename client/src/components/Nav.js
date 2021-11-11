import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return(
    <nav id="menu" >
      <NavLink to="/" >Home</NavLink>
      <NavLink to="/login" >Login</NavLink>
    </nav>
  )
}

export default Nav;