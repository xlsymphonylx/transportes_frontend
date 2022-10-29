<template>
  <div>
    <common-form :fields="fields" @save="create" />
    <div class="margintop">
      <v-data-table
        :headers="headers"
        :items-per-page="15"
        :header-props="headerProps"
        :items="rows"
        class="elevation-1"
        no-data-text="No Resultados"
        no-results-text="No Resultados"
        ><template #[`item.actions`]="{ item }">
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
import ubicacionService from "../services/ubicacionService";

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
    ],

    headers: [
      { text: "ID", value: "id" },
      { text: "Nombre", value: "name" },
      { text: "Direccion", value: "address" },
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
      const { data } = await ubicacionService.getAll();

      this.rows = data.map((item) => ({ ...item, actions: "" }));
    },
    async create(data) {
      await ubicacionService.create(data);
      this.getData();
    },
    async deleteItem(id) {
      await ubicacionService.delete(id);
      this.getData();
    },
    async readOne(id) {
      this.editData = await ubicacionService.getOne(id);
    },
    async update(data, id) {
      await ubicacionService.update(data, id);
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
