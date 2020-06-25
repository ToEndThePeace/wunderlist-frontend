import React from "react";
import StyledLanding from "./StyledLanding";
import { connect } from "react-redux";

const Landing = (props) => {
  return (
    <StyledLanding>
      <h2>Landing Page</h2>
      <p>{props.error}</p>
    </StyledLanding>
  );
};

const mapStateToProps = (state) => {
  const { error } = state.task;
  return { error };
};

export default connect(mapStateToProps, {})(Landing);
