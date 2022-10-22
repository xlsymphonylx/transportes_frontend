<template>
  <div>
    <common-form :fields="fields" @save="create" />
    <div class="margintop">
      <v-data-table
        :items="rows"
        :headers="headers"
        :items-per-page="5"
        class="elevation-1"
        hide-default-footer
        no-data-text="No Resultados"
        no-results-text="No Resultados"
      ></v-data-table>
    </div>
  </div>
</template>

<script>
import CommonForm from "../components/CommonForm.vue";
import accionesService from "../services/accionesService";

export default {
  components: { CommonForm },
  data: () => ({
    fields: [
      {
        name: "carga",
        type: "text",
        label: "Carga",
      },
      {
        name: "destino",
        type: "text",
        label: "Destino",
      },
      {
        name: "procedencia",
        type: "text",
        label: "Procedencia",
      },
      {
        name: "fecha",
        type: "text",
        label: "Fecha",
      },
    ],

    headers: [
      { text: "ID", value: "id" },
      { text: "Fecha", value: "fecha" },
      { text: "Procedencia", value: "procedencia" },
      { text: "Destino", value: "destino" },
      { text: "Carga", value: "carga" },
    ],
    rows: [],
  }),
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      const { data } = await accionesService.getAll();
      this.rows = data;
    },
    async create(data) {
      await accionesService.create(data);
      this.getData();
    },
  },
};
</script>

<style>
.margintop {
  margin-top: 1rem;
}
</style>
