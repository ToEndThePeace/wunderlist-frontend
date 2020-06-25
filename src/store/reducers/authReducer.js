import { auth } from "../actions";
const {
  LOGIN_INPUT_HANDLER,
  LOGIN_ATTEMPT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_INPUT_HANDLER,
  REGISTER_ATTEMPT,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} = auth;
const initialState = {
  isFetching: false,
  loggedIn: false,
  error: "",
  login: {
    username: "",
    password: "",
  },
  register: {
    username: "",
    password: "",
    passwordConf: "",
  },
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_INPUT_HANDLER:
      return {
        ...state,
        login: {
          ...state.login,
          [action.payload.name]: action.payload.value,
        },
      };
    case LOGIN_ATTEMPT:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        redirect: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case REGISTER_INPUT_HANDLER:
      return {
        ...state,
        register: {
          ...state.register,
          [action.payload.name]: action.payload.value,
        },
      };
    case REGISTER_ATTEMPT:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        redirect: true,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
