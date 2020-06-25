import React from "react";
import StyledHeader from "./StyledHeader";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <StyledHeader>
      <h1>Wunderlist</h1>
      <nav>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/login">
          Login
        </NavLink>
        <NavLink exact to="/signup">
          Signup
        </NavLink>
      </nav>
    </StyledHeader>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(Header);
