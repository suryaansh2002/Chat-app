import React, { useEffect } from "react";
// import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
// import 'firebase/app'
import firebase from "firebase/app";
import { auth } from "../firebase";
import { ImGoogle, ImGithub } from 'react-icons/im';
export default function Login() {

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-h">Welcome to Chat App!</div>
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
