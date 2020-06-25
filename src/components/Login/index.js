import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const StyledLogin = styled.div``;

const Login = (props) => {
  return (
    <StyledLogin>
      <h2>Login:</h2>
    </StyledLogin>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(Login);
