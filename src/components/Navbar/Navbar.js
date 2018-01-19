//Import packages
import React from 'react';
import './Navbar.css';
//Navbar component
const Navbar = (props) => (
  <div className="navbar-fixed">
  <nav className="green darken-2">
    <div className="nav-wrapper">
      <a href="#!" className="brand-logo">Pokemon</a>
      <ul className="right">
        <li id="catch">Caught: {props.caughtCount}</li>
      </ul>
    </div>
  </nav>
</div>
);

//Export Navbar
export default Navbar;
