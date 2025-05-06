import axios from "axios";

export const axiosIntance = axios.create({
  baseURL: "http://localhost:2211/api",
});
