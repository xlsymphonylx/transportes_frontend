import axios from "axios";
import axiosConfig from "../utils/axiosG2StudentsApiConfig";

export default {
  getAlumnosInscritos() {
    return axios.get("/api/getalumno_inscrito", axiosConfig);
  },
  getCatedraticosAsignados() {
    return axios.get("/api/getasigna_catedratico", axiosConfig);
  },
};
