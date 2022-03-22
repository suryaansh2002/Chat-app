import React, { useRef, useState, useEffect, useContext } from "react";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {FiLogOut} from 'react-icons/fi';

export default function Chats() {
  const history = useHistory();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const handleLogout = async () => {
    await auth.signOut();
    history.push("/");
  };

  return (
    <div>
      <div className="chats-h">Chats</div>
      <div>
        <button className="lo-btn" onClick={handleLogout}>Logout <FiLogOut/></button>
      </div>
    </div>
  );
}
