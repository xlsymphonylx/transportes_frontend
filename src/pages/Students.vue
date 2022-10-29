<template>
  <div>
    <h3 style="margin-top: 1rem">Estudiantes por Departamento</h3>
    <v-text-field
      v-model="searchByDepartmentData"
      append-icon="mdi-magnify"
      label="Buscar"
      single-line
      hide-details
    ></v-text-field>
    <v-data-table
      :headers="headersByDepartmentData"
      :header-props="headerProps"
      :search="searchByDepartmentData"
      :items="studentsByDepartmentData"
      :items-per-page="5"
      class="elevation-1"
      no-data-text="No Resultados"
      no-results-text="No Resultados"
    >
    </v-data-table>
    <h3 style="margin-top: 1rem">Estudiantes por Municipalidad</h3>
    <v-text-field
      v-model="searchByMunicipalityData"
      append-icon="mdi-magnify"
      label="Buscar"
      single-line
      hide-details
    ></v-text-field>
    <v-data-table
      :headers="headersByMunicipalityData"
      :header-props="headerProps"
      :search="searchByMunicipalityData"
      :items="studentsByMunicipalityData"
      :items-per-page="5"
      class="elevation-1"
      no-data-text="No Resultados"
      no-results-text="No Resultados"
    >
    </v-data-table>
    <h3 style="margin-top: 1rem">Estudiantes por Escuela</h3>
    <v-text-field
      v-model="searchBySchoolData"
      append-icon="mdi-magnify"
      label="Buscar"
      single-line
      hide-details
    ></v-text-field>
    <v-data-table
      :headers="headersBySchoolData"
      :header-props="headerProps"
      :search="searchBySchoolData"
      :items="studentsBySchoolData"
      :items-per-page="5"
      class="elevation-1"
      no-data-text="No Resultados"
      no-results-text="No Resultados"
    >
    </v-data-table>
    <h3 style="margin-top: 1rem">Estudiantes por Profesor</h3>
    <v-text-field
      v-model="searchByProfessor"
      append-icon="mdi-magnify"
      label="Buscar"
      single-line
      hide-details
    ></v-text-field>
    <v-data-table
      :headers="headersBySchoolData"
      :header-props="headerProps"
      :search="searchByProfessor"
      :items="studentsByProfessor"
      :items-per-page="5"
      class="elevation-1"
      no-data-text="No Resultados"
      no-results-text="No Resultados"
    >
    </v-data-table>
  </div>
</template>

<script>
import studentsService from "../services/studentsService";
export default {
  data: () => ({
    headerProps: {
      sortByText: "Ordenar Por",
    },
    headersByDepartmentData: [
      { text: "ID", value: "id" },
      { text: "Nombre", value: "name" },
      { text: "Estudiantes Enrolados", value: "count_student_enrollments" },
    ],
    headersByMunicipalityData: [
      { text: "ID", value: "id" },
      { text: "Nombre", value: "name" },
      { text: "Estudiantes Enrolados", value: "count_student_enrollments" },
    ],
    headersBySchoolData: [
      { text: "ID", value: "id" },
      { text: "Nombre", value: "name" },
      { text: "ID Municipalida", value: "municipality_id" },
    ],
    searchByDepartmentData: null,
    searchByMunicipalityData: null,
    searchBySchoolData: null,
    searchByProfessor: null,
    studentsByMunicipalityData: [],
    studentsByDepartmentData: [],
    studentsBySchoolData: [],
    studentsByProfessor: [],
  }),
  mounted() {
    this.getStudentsByDepartment();
    this.getStudentsByMunicipality();
    this.getStudentsBySchool();
    this.getStudentsByProfessor();
  },
  methods: {
    async getStudentsByDepartment() {
      try{
      const { data } = await studentsService.studentsByDepartmentMunicipality(
        true,
        false
      );
      this.studentsByDepartmentData = data;
      } catch (error) {
         alert("Error")
      }
    },
    async getStudentsByMunicipality() {
      try{
      const { data } = await studentsService.studentsByDepartmentMunicipality();
      this.studentsByMunicipalityData = data;
      } catch (error) {
         alert("Error")
      }
    },
    async getStudentsBySchool() {
      try{
      const { data } = await studentsService.studentsBySchool();
      this.studentsBySchoolData = data;
      } catch (error) {
         alert("Error")
      }
    },
    async getStudentsByProfessor() {
      try{
      const { data } = await studentsService.studentsByProfessor();
      this.studentsByProfessor = data;
      } catch (error) {
         alert("Error")
      }
    },
  },
};
</script>

<style></style>
