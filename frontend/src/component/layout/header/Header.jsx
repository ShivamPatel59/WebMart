import React from "react";
import "./header.css";
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  function handleClick() {
    const ul = document.querySelector('ul');
      ul.classList.toggle('toggle');
  }
  return (
    <div>
      <nav className="navbar">
        <i className="fa-solid fa-bars" >
          <div className="square" onClick={handleClick}>
            <MenuIcon fontSize="large"/>
          </div>
        </i>
        <h1>WebMart</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
