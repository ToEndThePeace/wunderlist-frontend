import { Tasks } from "../../utils";
export const FETCH_TASKS_START = "FETCH_TASKS_START";
export const FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS";
export const FETCH_TASKS_FAILURE = "FETCH_TASKS_FAILURE";
export const fetchTasks = () => async (dispatch) => {
  dispatch({ type: FETCH_TASKS_START });
  try {
    const res = await Tasks.get();
    dispatch({ type: FETCH_TASKS_SUCCESS, payload: res.data });
  } catch (e) {
    dispatch({ type: FETCH_TASKS_FAILURE, payload: e.message });
  }
};
