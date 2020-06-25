const { axiosWithAuth } = require("./axiosWithAuth");

export const login = (credentials) => {
  return axiosWithAuth().post("/api/auth/login", credentials);
};

export const register = (credentials) => {
  return axiosWithAuth().post("/api/auth/register", credentials);
};
