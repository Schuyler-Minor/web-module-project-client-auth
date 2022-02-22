import React from "react";

import "./App.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <button>Logout</button>
      <h2>Client Auth Project</h2>
      <nav>
        <NavLink to="/">Login</NavLink>
      </nav>
      <Route path="/">
        <Login />
      </Route>
    </div>
  );
}

export default App;
