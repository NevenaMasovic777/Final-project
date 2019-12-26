import React from "react";
import Logo from "../components/logo";
import { Link, Switch, Route, withRouter } from "react-router-dom";
import Login from "../components/login";
import Register from "../components/register";

const Header = () => {
  return (
    <div className="forum-name" style={{ textAlign: "center" }}>
      <Link to="/">
        <Logo className="forum-logo"></Logo>
      </Link>
      <nav>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
        </Switch>

        <Link to="/register">
          <p className="header-btn">Register</p>
        </Link>
        <Link to="/login">
          <p className="header-btn">Login</p>
        </Link>
      </nav>
    </div>
  );
};

export default withRouter(Header);
