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
import tipoAccionesService from "../services/tipoAccionesService";
export default {
  components: { CommonForm },
  data: () => ({
    headerProps: {
      sortByText: "Ordenar Por",
    },
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
      const { data } = await tipoAccionesService.getAll();
      this.rows = data.map((item) => ({ ...item, actions: "" }));
    },
    async create(data) {
      await tipoAccionesService.create(data);
      this.getData();
    },
    async deleteItem(id) {
      await tipoAccionesService.delete(id);
      this.getData();
    },
    async readOne(id) {
      this.editData = await tipoAccionesService.getOne(id);
    },
    async update(data, id) {
      await tipoAccionesService.update(data, id);
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
