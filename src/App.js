import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// PAGES
import Test from "./pages/test";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Bets from "./pages/bets";
import Rankings from "./pages/rankings";
import Userconfig from "./pages/userconfig";
import Home from "./pages/home";
import Legalterms from "./pages/legalterms";
import Forgotpass from "./pages/forgotpass";
import AboutUs from "./pages/aboutus";
import Social from "./pages/social";
import ViewProfile from "./pages/viewProfile";

import { AuthProvider } from "./Auth";
import PrivateRoute from "./privateRoute";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute
            exact
            path="/"
            component={Home}
          />
          <PrivateRoute
            exact
            path="/profile"
            component={Profile}
          />
          <PrivateRoute
            exact
            path="/bets"
            component={Bets}
          />
          <PrivateRoute
            exact
            path="/rankings"
            component={Rankings}
          />
          <PrivateRoute
            exact
            path="/userconfig"
            component={Userconfig}
          />
          <PrivateRoute
            exact
            path="/social"
            component={Social}
          />
          <PrivateRoute
            exact
            path="/:nickname"
            component={ViewProfile}
          />
          <Route
            exact
            path="/aboutus"
            component={AboutUs}
          />
          <Route
            exact
            path="/test"
            component={Test}
          />
          <Route
            exact
            path="/signup"
            component={Signup}
          />
          <Route
            exact
            path="/login"
            component={Login}
          />
          <Route
            exact
            path="/legalterms"
            component={Legalterms}
          />
          <Route
            exact
            path="/forgotpass"
            component={Forgotpass}
          />
        </Switch>
      </Router>
    </AuthProvider>
  );
}
