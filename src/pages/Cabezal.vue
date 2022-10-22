<template>
  <div>
    <common-form :fields="fields" @save="create" />
    <div class="margintop">
      <v-data-table
        :headers="headers"
        :items-per-page="5"
        :items="rows"
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
import cabezalService from "../services/cabezalService";

export default {
  components: { CommonForm },
  data: () => ({
    fields: [
      {
        name: "placa",
        type: "text",
        label: "Placa",
      },
      {
        name: "marca",
        type: "text",
        label: "Marca",
      },
    ],

    headers: [
      { text: "ID", value: "id" },
      { text: "Placa", value: "placa" },
      { text: "Marca", value: "marca" },
    ],
    rows: [],
  }),
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      const { data } = await cabezalService.getAll();
      this.rows = data;
    },
    async create(data) {
      await cabezalService.create(data);
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
