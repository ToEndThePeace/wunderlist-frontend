import React from "react";
import StyledSignup from "./StyledSignup";
import { connect } from "react-redux";

const Signup = (props) => {
  return (
    <StyledSignup>
      <h2>Signup:</h2>
    </StyledSignup>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(Signup);
