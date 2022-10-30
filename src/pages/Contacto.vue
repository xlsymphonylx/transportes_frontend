<template>
  <div>
    <common-form :fields="fields" @save="create" />
    <div class="margintop">
      <v-data-table
        :header-props="headerProps"
        :headers="headers"
        :items-per-page="15"
        :items="rows"
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
import contactoService from "../services/contactoService";
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
        name: "number",
        type: "text",
        label: "Numero",
      },
      {
        name: "email",
        type: "text",
        label: "Email",
      },
    ],

    headers: [
      { text: "ID", value: "id" },
      { text: "Nombre", value: "name" },
      { text: "Numero", value: "number" },
      { text: "Email", value: "email" },
      { text: "Acciones", value: "actions" },
    ],
    rows: [],
    editData: {},
  }),
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      const { data } = await contactoService.getAll();
      this.rows = data.map((item) => ({ ...item, actions: "" }));
    },
    async create(data) {
      await contactoService.create(data);
      this.getData();
    },
    async deleteItem(id) {
      await contactoService.delete(id);
      this.getData();
    },
    async readOne(id) {
      this.editData = await contactoService.getOne(id);
    },
    async update(data, id) {
      await contactoService.update(data, id);
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
