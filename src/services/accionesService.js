import axios from "axios";
import axiosConfig from "../utils/axiosConfig";

export default {
  getAll() {
    return axios.get("/api/accion", axiosConfig);
  },
  create(data) {
    return axios.post("/api/accion", data, axiosConfig);
  },
};
