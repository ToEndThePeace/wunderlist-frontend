import axios from "axios";
import { Token } from "./";

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "https://wunderlist-api-2020.herokuapp.com",
    headers: {
      Authorization: Token.get(),
    },
  });
};
