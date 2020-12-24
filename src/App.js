import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from "./components/navbar";
import Test from "./pages/test";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Bets from "./pages/bets";
import Rankings from "./pages/rankings";
import Home from "./pages/home";

import initFirebase from "./firebase";

initFirebase();

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/test">
          <Test />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/bets">
          <Bets />
        </Route>
        <Route path="/rankings">
          <Rankings />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
