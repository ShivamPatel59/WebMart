import React, { useState } from "react";
import "./LogIn.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from '@mui/icons-material/Key';
import VisibilityIcon from '@mui/icons-material/Visibility';

const LogIn = () => {
var [pwShown, setPwShown] = useState(false);

function visibility() {
  setPwShown(!pwShown);
}

  return (
    <div className="login-container">
      <form>
        <div className="box">
          <header className="heading">
            <h2>Log In</h2>
          </header>
          <br />
          <div className="inputs">
            <div className="email-input">
              <span className="user-circle">
                <AccountCircleIcon fontSize="large"/>
              </span>
              <input
                className="form-input"
                id="txt-input"
                type="email"
                placeholder="e-mail"
                required
              />
            </div>
            <div className="password-input">
            <span className="key">
              <KeyIcon fontSize="large" />
            </span>
            <input
              className="form-input"
              type={
                pwShown ? "password" : "text"
              }
              placeholder= "password"
              id="pwd"
              name="password"
              required
            />
            <span>
            <VisibilityIcon fontSize="large" onClick={visibility}/>
            </span>
            </div>
            <button className="log-in-btn"> Log In </button>
            <button className="sign-up-btn">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
