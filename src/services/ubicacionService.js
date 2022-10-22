import axios from "axios";
import axiosConfig from "../utils/axiosConfig";

export default {
  getAll() {
    return axios.get("/api/ubicacion", axiosConfig);
  },
  create(data) {
    return axios.post("/api/ubicacion", data, axiosConfig);
  },
};
