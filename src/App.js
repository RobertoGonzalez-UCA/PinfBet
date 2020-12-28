import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Test from "./pages/test";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Bets from "./pages/bets";
import Rankings from "./pages/rankings";
import Social from "./pages/social";
import Userconfig from "./pages/userconfig";
import Home from "./pages/home";
import Forgotpass from "./pages/forgotpass";

import initFirebase from "./firebase";

initFirebase();

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/test">
          <Test />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
          <Forgotpass />
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
        <Route path="/social">
          <Social />
        </Route>
        <Route path="/userconfig">
          <Userconfig />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
