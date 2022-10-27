import axios from "axios";
import axiosConfig from "../utils/axiosConfig";

export default {
  getAll() {
    return axios.get("/api/contacto", axiosConfig);
  },
  create(data) {
    return axios.post("/api/contacto", data, axiosConfig);
  },
  getOne(id) {
    return axios.get(`/api/contacto/${id}`, axiosConfig);
  },
  delete(id) {
    return axios.delete(`/api/contacto/${id}`, axiosConfig);
  },
  update(data, primaryKey) {
    return axios.patch(`/api/contacto/${primaryKey}`, data, axiosConfig);
  },
};
