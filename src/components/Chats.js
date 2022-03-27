import React, { useRef, useState, useEffect, useContext } from "react";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {FiLogOut} from 'react-icons/fi';
import { ChatEngine } from "react-chat-engine";
import axios from "axios";
import logo from './logo.png';

export default function Chats() {

  const history = useHistory();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "userphoto.jpg", { type: "image/jpeg" });
  };

  const handleLogout = async () => {
    await auth.signOut();
    history.push("/");
  };
  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }
    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "60bbe1fc-4aee-4193-82c6-81254679c825",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);

        getFile(user.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);
          axios
            .post("https://api.chatengine.io/users", formdata, {
              headers: {
                "private-key": "f9c5555b-f7ac-44f5-89f3-f09c7c49bcd2",
              },
            })
            .then(() => {
              setLoading(false);
            })
            .catch((error) => {
              console.log(error);
            });
        });
      });
  }, [history, user]);

 
  return (
    <div className="">
      <div className="chats-h">Chatify</div>
      <img src={logo} className='login-logo'/>
      <div>
        <button className="lo-btn" onClick={handleLogout}>Logout <FiLogOut/></button>
        <div className="c-engine">
        <ChatEngine
          projectID={"60bbe1fc-4aee-4193-82c6-81254679c825"}
          userName={user.email}
          userSecret={user.uid}
          height="88vh"

        />
        </div>
 
      </div>
    </div>
  );
}
