import { axiosWithAuth } from "./";

export const get = () => {
  return axiosWithAuth().get("/api/tasks");
};
export const getById = (id) => {
  return axiosWithAuth().get(`/api/tasks/${id}`);
};
export const add = (newTask) => {
  return axiosWithAuth().post("/api/tasks", newTask);
};
export const update = (id, changes) => {
  return axiosWithAuth().put(`/api/tasks/${id}`, changes);
};
export const remove = (id) => {
  return axiosWithAuth().delete(`/api/tasks/${id}`);
};
