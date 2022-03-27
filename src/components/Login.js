import React, { useEffect } from "react";
// import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
// import 'firebase/app'
import firebase from "firebase/app";
import { auth } from "../firebase";
import { ImGoogle, ImGithub } from 'react-icons/im';
import logo from '../components/logo.png';
export default function Login() {

  return (
    <div className="login-page">
    <img src={logo} className='login-logo'/>
      <div className="login-box">
        <div className="login-h">Welcome to Chatify!</div>
        <div>
          <button
            className="log-btn"
            onClick={() =>
              auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
            }
          >
         <ImGoogle className="lg-logo"/> Sign in with Google
            {/* <GoogleOutlined /> Sign in with Google */}
          </button>
        </div>
        <div>
          <button
            className="log-btn-g"
            onClick={() =>
              auth.signInWithRedirect(new firebase.auth.GithubAuthProvider())
            }
          >
       <ImGithub className="lg-logo"/>   Sign in with Github

            {/* <GithubOutlined /> Sign in with Github */}
          </button>
        </div>
      </div>
    </div>
  );
}
