import axios from "axios";
import axiosConfig from "../utils/axiosStudentAPIConfig";

export default {
  studentsByDepartmentMunicipality(
    departmentSort = false,
    municipalitySort = true
  ) {
    return axios.get(
      `/api/students_by_department_municipality?department=${departmentSort}&municipality=${municipalitySort}`,
      axiosConfig
    );
  },
  studentsBySchool() {
    return axios.get(`/api/students_by_school`, axiosConfig);
  },
  studentsByProfessor() {
    return axios.get(`/api/students_by_professor`, axiosConfig);
  },
};
