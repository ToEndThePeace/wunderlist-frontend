import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import StyledLogin from "./StyledLogin";

import { auth } from "../../store/actions";

const Login = (props) => {
  const { formValues, error, redirect, login, inputHandler } = props;

  const submitHandler = (e) => {
    e.preventDefault();
    login(formValues);
  };
  return (
    <StyledLogin>
      {!!redirect && <Redirect to="/dashboard" />}
      <h2>Login:</h2>
      {!!error && <span className="error">{error}</span>}
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">Username:&nbsp;</label>
          <input
            type="text"
            name="username"
            value={formValues.username}
            onChange={inputHandler}
          />
        </div>
        <div>
          <label htmlFor="password">Password:&nbsp;</label>
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={inputHandler}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </StyledLogin>
  );
};

const mapStateToProps = (state) => {
  return {
    formValues: state.auth.login,
    error: state.auth.error,
    redirect: state.auth.loggedIn,
  };
};

export default connect(mapStateToProps, {
  login: auth.loginAttempt,
  inputHandler: auth.loginInputHandler,
})(Login);
