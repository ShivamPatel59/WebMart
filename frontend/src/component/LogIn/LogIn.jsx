import React, { useState } from "react";
import "./LogIn.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from '@mui/icons-material/Key';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { login } from "../../axios/axios";

const LogIn = () => {
var [pwShown, setPwShown] = useState(false);
var [email, setEmail] = useState("");
var [password, setPassword] = useState("");

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
            {/* <div className="email-input">
              <span className="user-circle">
                <AccountCircleIcon fontSize="medium"/>
              </span> */}
              {/* <input
                onChange={(e) => {
                  e.preventDefault()
                  setEmail(e.target.value);
                }}
                className="form-input"
                id="txt-input"
                type="email"
                placeholder="e-mail"
                required
              />
            </div>
            <div className="password-input">
            <span className="key">
              <KeyIcon fontSize="medium" />
            </span>
            <input
              onChange={(e) => {
                e.preventDefault()
                setPassword(e.target.value);
              }}
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
            <VisibilityIcon fontSize="medium" onClick={visibility}/>
            </span>
            </div>
            <input type="submit" value="Log In" className="log-in-btn" onSubmit={ async (e) => {
              e.preventDefault()
              if(!email || !password) {
                return
              }
              const response = await login(email, password)
            }}/> */}
            <div className="email-input">
              <span className="user-circle">
                <AccountCircleIcon fontSize="medium" />
              </span>
              <input
                className="signin-form-input"
                id="email-input"
                type="email"
                placeholder="e-mail"
                onChange={(e) => {
                  e.preventDefault()
                  setEmail(e.target.value);
                  // checkPassword();
                }}
                required
              />
            </div>
            <div className="signin-password-input">
              <span className="signin-key">
                <KeyIcon fontSize="medium" />
              </span>
              <input
                onChange={(e) => {
                  e.preventDefault()
                  setPassword(e.target.value);
                  // checkPassword();
                }}
                className="signin-form-input"
                type={pwShown ? "password" : "text"}
                placeholder="password"
                id="pwd"
                name="password"
                value={password}
                required
              />
              <span>
                <VisibilityIcon fontSize="medium" onClick={visibility} />
              </span>
            </div>
            <input type="submit" value="log In" className="log-in-btn" onClick={ async (e) => {
              e.preventDefault()
                const response = await login(email, password)
                window.location.href = "/"
                console.log(response)
            }}/>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
