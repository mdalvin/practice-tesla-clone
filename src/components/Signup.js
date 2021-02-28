import { LanguageOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { login } from "../features/userSlice";
import { auth } from "../firebase";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import "./Signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const signUp = (e) => {
    e.preventDefault();

    if (!firstName) {
        return alert('Please input your first name.')
    }

    if (!lastName) {
        return alert('Please input your last name.')
    }

    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
        userAuth.user.updateProfile({
            displayName: firstName
        }).then(() => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: firstName,
            }))
            history.push('/teslaaccount');
        })
    }).catch((error) => alert(error.message));
  };

  return (
    <div className="signup">
      <div className="signup_header">
        <div className="signup_logo">
          <Link>
            <img
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt=""
            />
          </Link>
        </div>
        <div className="signup_language">
          <LanguageOutlined />
          <span>en-US</span>
        </div>
      </div>
      <div className="signup_info">
        <h1>Create Account</h1>
        <form className="signup_form">
          <label htmlFor="fName">First Name</label>
          <input
            type="text"
            id="fistName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="lName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonPrimary name="Sign Up" type="submit" onClick={Signup} />
        </form>
        <div className="signup_divider">
          <hr />
          <span>OR</span>
          <hr />
        </div>
        <Link exact to="login">
          <ButtonSecondary name="Sign In" />
        </Link>
      </div>
    </div>
  );
}

export default Signup;
