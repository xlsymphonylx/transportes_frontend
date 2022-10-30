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
import contactoService from "../services/contactoService";
import transportistaService from "../services/transportistaService";
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
        name: "contacto_id",
        type: "select",
        label: "Contacto",
        items: [],
        itemText: "name",
        itemValue: "id",
      },
    ],

    headers: [
      { text: "ID", value: "id" },
      { text: "Nombre", value: "name" },
      { text: "Direccion", value: "address" },
      { text: "Contacto", value: "contactoName" },
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
      const { data } = await transportistaService.getAll();
      const { data: contactos } = await contactoService.getAll();
      this.fields[2]["items"] = contactos;
      this.rows = data.map((item) => ({ ...item, actions: "" }));
    },
    async create(data) {
      await transportistaService.create(data);
      this.getData();
    },
    async deleteItem(id) {
      await transportistaService.delete(id);
      this.getData();
    },
    async readOne(id) {
      this.editData = await transportistaService.getOne(id);
    },
    async update(data, id) {
      await transportistaService.update(data, id);
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
