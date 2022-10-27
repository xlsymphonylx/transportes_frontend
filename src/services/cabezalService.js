import axios from "axios";
import axiosConfig from "../utils/axiosConfig";

export default {
  getAll() {
    return axios.get("/api/cabezal", axiosConfig);
  },
  create(data) {
    return axios.post("/api/cabezal", data, axiosConfig);
  },
  getOne(id) {
    return axios.get(`/api/cabezal/${id}`, axiosConfig);
  },
  delete(id) {
    return axios.delete(`/api/cabezal/${id}`, axiosConfig);
  },
  update(data, primaryKey) {
    return axios.patch(`/api/cabezal/${primaryKey}`, data, axiosConfig);
  },
};
