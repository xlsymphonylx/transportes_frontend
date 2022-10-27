import axios from "axios";
import axiosConfig from "../utils/axiosConfig";

export default {
  getAll() {
    return axios.get("/api/transportista", axiosConfig);
  },
  create(data) {
    return axios.post("/api/transportista", data, axiosConfig);
  },
  getOne(id) {
    return axios.get(`/api/transportista/${id}`, axiosConfig);
  },
  delete(id) {
    return axios.delete(`/api/transportista/${id}`, axiosConfig);
  },
  update(data, primaryKey) {
    return axios.patch(`/api/transportista/${primaryKey}`, data, axiosConfig);
  },
};
