<template>
  <div>
    <h3>Alumnos Inscritos</h3>
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
      :items="alumnosInscritos"
      :items-per-page="5"
      class="elevation-1"
      no-data-text="No Resultados"
      no-results-text="No Resultados"
    >
    </v-data-table>
    <h3 style="margin-top: 1rem">Catedrticos Asignados</h3>
    <v-text-field
      v-model="searchCatedratico"
      append-icon="mdi-magnify"
      label="Buscar"
      single-line
      hide-details
    ></v-text-field>
    <v-data-table
      :headers="headersCatedraticos"
      :header-props="headerProps"
      :search="searchCatedratico"
      :items="catedraticosInscritos"
      :items-per-page="5"
      class="elevation-1"
      no-data-text="No Resultados"
      no-results-text="No Resultados"
    >
    </v-data-table>
  </div>
</template>

<script>
import studentsService from "../services/g2StudentsService";
export default {
  data: () => ({
    headerProps: {
      sortByText: "Ordenar Por",
    },
    headers: [
      { text: "ID", value: "id" },
      { text: "Nombre Alumno", value: "nombre_alumno" },
      { text: "Nombre Curso", value: "nombre_curso" },
      { text: "Nombre Nivel", value: "nombre_nivel" },
      { text: "Nombre Sucursal", value: "nombre_sucursal" },
      { text: "Fecha", value: "fecha" },
      { text: "Nota", value: "nota" },
    ],
    headersCatedraticos: [
      { text: "ID", value: "id" },
      { text: "Nombre Catedratico", value: "nombre_catedratico" },
      { text: "Nombre Curso", value: "nombre_curso" },
      { text: "Nombre Nivel", value: "nombre_nivel" },
      { text: "Fecha", value: "fecha" },
    ],
    search: null,
    alumnosInscritos: [],
    catedraticosInscritos: [],
  }),
  mounted() {
    this.getAlumnosInscritos();
    this.getCatedraticosAsignados();
  },
  methods: {
    async getAlumnosInscritos() {
      const { data } = await studentsService.getAlumnosInscritos();
      this.alumnosInscritos = data;
    },
    async getCatedraticosAsignados() {
      const { data } = await studentsService.getCatedraticosAsignados();
      this.catedraticosInscritos = data;
    },
  },
};
</script>

<style></style>
