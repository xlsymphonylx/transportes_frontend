import axios from "axios";
import axiosConfig from "../utils/axiosConfig";

export default {
  getAll() {
    return axios.get("/api/tipo-accion", axiosConfig);
  },
  create(data) {
    return axios.post("/api/tipo-accion", data, axiosConfig);
  },
  getOne(id) {
    return axios.get(`/api/tipo-accion/${id}`, axiosConfig);
  },
  delete(id) {
    return axios.delete(`/api/tipo-accion/${id}`, axiosConfig);
  },
  update(data, primaryKey) {
    return axios.patch(`/api/tipo-accion/${primaryKey}`, data, axiosConfig);
  },
};
