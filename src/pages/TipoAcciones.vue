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
import tipoAccionesService from "../services/tipoAccionesService";
export default {
  components: { CommonForm },
  data: () => ({
    fields: [
      {
        name: "description",
        type: "text",
        label: "Descripcion",
      },
    ],

    headers: [
      { text: "ID", value: "id" },
      { text: "Descripcion", value: "description" },
    ],
    rows: [],
  }),
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      const { data } = await tipoAccionesService.getAll();
      this.rows = data;
    },
    async create(data) {
      await tipoAccionesService.create(data);
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
