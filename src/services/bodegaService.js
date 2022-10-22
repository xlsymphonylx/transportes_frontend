import axios from "axios";
import axiosConfig from "../utils/axiosConfig";

export default {
  getAll() {
    return axios.get("/api/bodega", axiosConfig);
  },
  create(data) {
    return axios.post("/api/bodega", data, axiosConfig);
  },
};
