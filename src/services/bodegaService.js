import axios from "axios";
import axiosConfig from "../utils/axiosConfig";

export default {
  getAll() {
    return axios.get("/api/bodega", axiosConfig);
  },
  create(data) {
    return axios.post("/api/bodega", data, axiosConfig);
  },
  getOne(id) {
    return axios.get(`/api/bodega/${id}`, axiosConfig);
  },
  delete(id) {
    return axios.delete(`/api/bodega/${id}`, axiosConfig);
  },
  update(data, primaryKey) {
    return axios.patch(`/api/bodega/${primaryKey}`, data, axiosConfig);
  },
};
