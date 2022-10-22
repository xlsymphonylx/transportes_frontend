import axios from "axios";
import axiosConfig from "../utils/axiosConfig";

export default {
  getAll() {
    return axios.get("/api/tipo-accion", axiosConfig);
  },
  create(data) {
    return axios.post("/api/tipo-accion", data, axiosConfig);
  },
};
