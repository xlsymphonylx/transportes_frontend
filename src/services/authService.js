import axios from "axios";
import axiosConfig from "../utils/axiosConfig";

export default {
  register(data) {
    return axios.post("/api/register", data, axiosConfig);
  },
  login(data) {
    return axios.post("/api/login", data, axiosConfig);
  },
  userInfo() {
    return axios.get("/api/userInfo", axiosConfig);
  },
  getAll() {
    return axios.get("/api/users", axiosConfig);
  },
};
