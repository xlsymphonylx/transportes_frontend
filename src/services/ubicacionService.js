import axios from "axios";
import axiosConfig from "../utils/axiosConfig";

export default {
  getAll() {
    return axios.get("/api/ubicacion", axiosConfig);
  },
  create(data) {
    return axios.post("/api/ubicacion", data, axiosConfig);
  },
  getOne(id) {
    return axios.get(`/api/ubicacion/${id}`, axiosConfig);
  },
  delete(id) {
    return axios.delete(`/api/ubicacion/${id}`, axiosConfig);
  },
  update(data, primaryKey) {
    return axios.patch(`/api/ubicacion/${primaryKey}`, data, axiosConfig);
  },
};
