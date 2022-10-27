import axios from "axios";
import axiosConfig from "../utils/axiosConfig";

export default {
  getAll() {
    return axios.get("/api/piloto", axiosConfig);
  },
  create(data) {
    return axios.post("/api/piloto", data, axiosConfig);
  },
  getOne(id) {
    return axios.get(`/api/piloto/${id}`, axiosConfig);
  },
  delete(id) {
    return axios.delete(`/api/piloto/${id}`, axiosConfig);
  },
  update(data, primaryKey) {
    return axios.patch(`/api/piloto/${primaryKey}`, data, axiosConfig);
  },
};
