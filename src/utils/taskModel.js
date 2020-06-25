import { axiosWithAuth } from "./";

export const get = () => {
  return axiosWithAuth().get("/api/tasks");
};
