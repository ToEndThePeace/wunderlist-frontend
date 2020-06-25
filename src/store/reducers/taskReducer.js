import { task } from "../actions";
const { FETCH_TASKS_START, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAILURE } = task;
const initialState = {
  isFetching: false,
  list: [],
  error: "no error",
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_TASKS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: action.payload,
      };
    case FETCH_TASKS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
