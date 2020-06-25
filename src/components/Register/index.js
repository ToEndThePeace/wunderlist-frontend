import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import StyledRegister from "./StyledRegister";

import { auth } from "../../store/actions";

const Register = (props) => {
  const { formValues, error, redirect, register, inputHandler } = props;
  const submitHandler = (e) => {
    e.preventDefault();
    const { username, password } = formValues;
    register({ username, password });
  };
  return (
    <StyledRegister>
      {!!redirect && <Redirect to="/dashboard" />}
      <h2>Register:</h2>
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
        <div>
          <label htmlFor="passwordConf">Confirm:&nbsp;</label>
          <input
            type="password"
            name="passwordConf"
            value={formValues.passwordConf}
            onChange={inputHandler}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </StyledRegister>
  );
};

const mapStateToProps = (state) => {
  return {
    formValues: state.auth.register,
    error: state.auth.error,
    redirect: state.auth.loggedIn,
  };
};

export default connect(mapStateToProps, {
  register: auth.registerAttempt,
  inputHandler: auth.registerInputHandler,
})(Register);
