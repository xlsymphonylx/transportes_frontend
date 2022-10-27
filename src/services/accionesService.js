import axios from "axios";
import axiosConfig from "../utils/axiosConfig";

export default {
  getAll() {
    return axios.get("/api/accion", axiosConfig);
  },
  create(data) {
    return axios.post("/api/accion", data, axiosConfig);
  },
  getOne(id) {
    return axios.get(`/api/accion/${id}`, axiosConfig);
  },
  delete(id) {
    return axios.delete(`/api/accion/${id}`, axiosConfig);
  },
  update(data, primaryKey) {
    return axios.patch(`/api/accion/${primaryKey}`, data, axiosConfig);
  },
};
