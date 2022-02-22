import React from "react";
import axios from "axios";

import "./App.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Login from "./components/Login";

const loginUrl = "http://localhost:3000/api/login";

function App() {
  const login = ({ username, password }) => {
    axios
      .post(loginUrl, { username, password })
      .then((res) => {
        debugger;
      })
      .catch((err) => {
        debugger;
      });
  };
  return (
    <div className="App">
      <button>Logout</button>
      <h2>Client Auth Project</h2>
      <nav>
        <NavLink to="/">Login</NavLink>
      </nav>
      <Route path="/">
        <Login login={login} />
      </Route>
    </div>
  );
}

export default App;
