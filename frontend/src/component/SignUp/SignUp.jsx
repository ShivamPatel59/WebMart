import React, { useState } from "react";
import "./SignUp.css";
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from '@mui/icons-material/Key';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { register } from "../../axios/axios";

const SignUp = () => {
  var [pwShown, setPwShown] = useState(false);

  function visibility() {
    setPwShown(!pwShown);
  }

  var[password, setPassword] = useState("");
  var[name, setName] = useState("");
  var[email, setEmail] = useState("");
  var[confirmPassword, setConfirmPassword] = useState("");
  var [isCorrect, setIsCorrect] = useState(false);

  console.log(password, name, email)
  function checkPassword() {
    if(password === confirmPassword) {
      setIsCorrect(true);
    }
    else {
      setIsCorrect(false);
    }
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
                onChange={(e) => {
                  e.preventDefault()
                  setName(e.target.value);
                  // checkPassword();
                }}
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
            <div className="signin-cnfrm-password-input">
            <span>
                <KeyIcon fontSize="medium" />
              </span>
            <input
                onChange={(e) => {
                  e.preventDefault()
                  setConfirmPassword(e.target.value);
                  // checkPassword();
                }}
                className="signin-form-input"
                type= "password"
                placeholder="confirm password"
                id="cnfrm-pwd"
                name="confirm-password"
                value={confirmPassword}
                required
              />
            </div>
            {console.log(confirmPassword)}
            {console.log(isCorrect)}
            {!isCorrect ? <p className="error">Password does not match</p> : null}
            {/* <button className="sign-btn" type="submit" onSubmit={()=>{
              // checkPassword()
              if(!isCorrect){

                console.log("dnsdjkad")
              }
            }}>Sign Up</button> */}
            <input type="submit" value="Sign Up" className="sign-btn" onClick={ async (e) => {
              e.preventDefault()
              checkPassword()
              if(isCorrect){
                const response = await register(name, email, password)
                console.log(response)
              }
            }}/>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
