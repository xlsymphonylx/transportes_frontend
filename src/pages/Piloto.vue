<template>
  <div>
    <common-form :fields="fields" @save="create" />
    <div class="margintop">
      <v-data-table
        :items="rows"
        :headers="headers"
        :items-per-page="15"
        :header-props="headerProps"
        class="elevation-1"
        no-data-text="No Resultados"
        no-results-text="No Resultados"
      >
        <template #[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="readOne(item.id)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item.id)"> mdi-delete </v-icon>
        </template></v-data-table
      >
    </div>
  </div>
</template>

<script>
import CommonForm from "../components/CommonForm.vue";
import pilotoService from "../services/pilotoService";

export default {
  components: { CommonForm },
  data: () => ({
    headerProps: {
      sortByText: "Ordenar Por",
    },
    fields: [
      {
        name: "name",
        type: "text",
        label: "Nombre",
      },
      {
        name: "address",
        type: "text",
        label: "Direccion",
      },
      {
        name: "dpi",
        type: "text",
        label: "DPI",
      },
      {
        name: "number",
        type: "text",
        label: "Telefono",
      },
    ],

    headers: [
      { text: "ID", value: "id" },
      { text: "Nombre", value: "name" },
      { text: "Direccion", value: "address" },
      { text: "DPI", value: "dpi" },
      { text: "Telefono", value: "number" },
      { text: "Acciones", value: "actions" },
    ],
    editData: {},
    rows: [],
  }),
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      try{
      const { data } = await pilotoService.getAll();
      this.rows = data.map((item) => ({ ...item, actions: "" }));
      } catch (error) {
         alert("Error")
      }
    },
    async create(data) {
      try{
      await pilotoService.create(data);
      this.getData();
      } catch (error) {
         alert("Error")
      }
    },
    async deleteItem(id) {
      try{
      await pilotoService.delete(id);
      this.getData();
      } catch (error) {
         alert("Error")
      }
    },
    async readOne(id) {
      this.editData = await pilotoService.getOne(id);
    },
    async update(data, id) {
      await pilotoService.update(data, id);
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
