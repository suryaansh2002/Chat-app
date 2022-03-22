import React from "react";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chats from "./components/Chats";
import { AuthProvider } from "./contexts/AuthContext";
import './styles.css';
function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path={"/"} component={Login} />
          <Route exact path={"/chats"} component={Chats} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
