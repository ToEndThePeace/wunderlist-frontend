import { Auth, Token } from "../../utils";

export const LOGIN_ATTEMPT = "LOGIN_ATTEMPT";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const loginAttempt = (credentials) => async (dispatch) => {
  dispatch({ type: LOGIN_ATTEMPT });
  try {
    const {
      data: { token },
    } = await Auth.login(credentials);
    Token.set(token);
    dispatch({ type: LOGIN_SUCCESS });
  } catch (e) {
    dispatch({ type: LOGIN_FAILURE, payload: e.response.data.message });
  }
};

export const REGISTER_ATTEMPT = "REGISTER_ATTEMPT";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const registerAttempt = (credentials) => async (dispatch) => {
  dispatch({ type: REGISTER_ATTEMPT });
  try {
    const {
      data: { token },
    } = await Auth.register(credentials);
    Token.set(token);
    dispatch({ type: REGISTER_SUCCESS });
  } catch (e) {
    dispatch({ type: REGISTER_FAILURE, payload: e.response.data.message });
  }
};

export const LOGIN_INPUT_HANDLER = "LOGIN_INPUT_HANDLER";
export const loginInputHandler = (e) => (dispatch) => {
  const { target } = e;
  dispatch({ type: LOGIN_INPUT_HANDLER, payload: target });
};
export const REGISTER_INPUT_HANDLER = "REGISTER_INPUT_HANDLER";
export const registerInputHandler = (e) => (dispatch) => {
  const { target } = e;
  dispatch({ type: REGISTER_INPUT_HANDLER, payload: target });
};
