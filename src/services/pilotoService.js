import axios from "axios";
import axiosConfig from "../utils/axiosConfig";

export default {
  getAll() {
    return axios.get("/api/piloto", axiosConfig);
  },
  create(data) {
    return axios.post("/api/piloto", data, axiosConfig);
  },
};
