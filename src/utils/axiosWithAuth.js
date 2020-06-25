import axios from "axios";
export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "https://wunderlist-api-2020.herokuapp.com",
    headers: {
      Authorization: getToken(),
    },
  });
};
