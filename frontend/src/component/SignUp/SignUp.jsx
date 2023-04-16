import React, { useState } from "react";
import "./SignUp.css";
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from '@mui/icons-material/Key';
import VisibilityIcon from '@mui/icons-material/Visibility';

const SignUp = () => {
  var [pwShown, setPwShown] = useState(false);

  function visibility() {
    setPwShown(!pwShown);
  }
  return (
    <div className="signin-container">
      <form className="signin-form">
        <div className="signin-box">
          <header className="signin-heading">
            <h2>Sign In</h2>
          </header>
          <br />
          <div className="signin-inputs">
            <div className="signin-name-input">
            <span>
                <PersonIcon fontSize="medium" />
              </span>
            <input
                className="signin-form-input"
                type="text"
                id="name-input"
                placeholder="name"
                required
              />
            </div>
            <div className="signin-email-input">
              <span className="signin-user-circle">
                <AccountCircleIcon fontSize="medium" />
              </span>
              <input
                className="signin-form-input"
                id="email-input"
                type="email"
                placeholder="e-mail"
                required
              />
            </div>
            <div className="signin-password-input">
              <span className="signin-key">
                <KeyIcon fontSize="medium" />
              </span>
              <input
                className="signin-form-input"
                type={pwShown ? "password" : "text"}
                placeholder="password"
                id="pwd"
                name="password"
                required
              />
              <span>
                <VisibilityIcon fontSize="medium" onClick={visibility} />
              </span>
            </div>
            <div className="signin-cnfrm-password-input">
            <span>
                <KeyIcon fontSize="medium" />
              </span>
            <input
                className="signin-form-input"
                type= "password"
                placeholder="confirm password"
                id="cnfrm-pwd"
                name="confirm-password"
                required
              />
            </div>
            <button className="sign-btn">Sign Up</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
