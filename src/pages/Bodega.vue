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
import bodegaService from "../services/bodegaService";
export default {
  components: { CommonForm },
  data: () => ({
    fields: [
      {
        name: "name",
        type: "text",
        label: "Nombre",
      },
    ],

    headers: [
      { text: "ID", value: "id" },
      { text: "Nombre", value: "name" },
    ],
    rows: [],
  }),
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      const { data } = await bodegaService.getAll();
      this.rows = data;
    },
    async create(data) {
      await bodegaService.create(data);
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
