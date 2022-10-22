import axios from "axios";
import axiosConfig from "../utils/axiosConfig";

export default {
  getAll() {
    return axios.get("/api/transportista", axiosConfig);
  },
  create(data) {
    return axios.post("/api/transportista", data, axiosConfig);
  },
};
