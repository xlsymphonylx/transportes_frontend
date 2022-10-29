<template>
  <div>
    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Buscar"
      single-line
      hide-details
    ></v-text-field>
    <v-data-table
      :headers="headers"
      :header-props="headerProps"
      :search="search"
      :items="studentsByDepartmentMunicipalityData"
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
    headers: [
      { text: "ID", value: "id" },
      { text: "Nombre", value: "name" },
      { text: "Estudiantes Enrolados", value: "count_student_enrollments" },
    ],
    search: null,
    studentsByDepartmentMunicipalityData: [],
  }),
  mounted() {
    this.getStudentsByMunicipalityDepartment();
  },
  methods: {
    async getStudentsByMunicipalityDepartment() {
      const { data } = await studentsService.studentsByDepartmentMunicipality(
        true,
        false
      );
      this.studentsByDepartmentMunicipalityData = data;
    },
  },
};
</script>

<style></style>
