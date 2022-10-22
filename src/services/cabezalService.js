import axios from "axios";
import axiosConfig from "../utils/axiosConfig";

export default {
  getAll() {
    return axios.get("/api/cabezal", axiosConfig);
  },
  create(data) {
    return axios.post("/api/cabezal", data, axiosConfig);
  },
};
