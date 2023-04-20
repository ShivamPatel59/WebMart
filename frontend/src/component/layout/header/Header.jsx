import React from "react";
import "./header.css";
import MenuIcon from '@mui/icons-material/Menu';
import Search from "../Search/Search";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { logout } from "../../../axios/axios";

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
        <ul className="navbar-ul">
          <li className="">
            <Search />
          </li>
          <li className="navbar-li" onClick={() => {
            window.location.href = '/'
          }}>Home</li>
          <li className="navbar-li navbar-cart" onClick={() => {
            window.location.href = '/cart'
          }}>
            <ShoppingCartOutlinedIcon className="cart-icon"/>    Cart
          </li>
          <li className="navbar-li">Contact</li>
          <li className="navbar-li" onClick={async() => {
            const response = await logout();
            console.log(response);
            if(response.success){
              
              
            }
            // window.location.href = '/'

          }}>Log Out</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
