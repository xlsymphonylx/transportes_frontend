<template>
  <div>
    <common-form :fields="fields" @save="create" />
    <div class="margintop">
      <v-data-table
        :headers="headers"
        :header-props="headerProps"
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
import bodegaService from "../services/bodegaService";
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
        name: "ubicacion_id",
        type: "select",
        label: "Ubicacion",
        items: [],
        itemText: "name",
        itemValue: "id",
      },
    ],

    headers: [
      { text: "ID", value: "id" },
      { text: "Nombre", value: "name" },
      { text: "Ubicacion", value: "ubicacionName" },
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
      try {
      const { data } = await bodegaService.getAll();
      const { data: ubicaciones } = await ubicacionService.getAll();
      this.fields[1]["items"] = ubicaciones;
      this.rows = data.map((item) => ({ ...item, actions: "" }));
      } catch (error) {
         alert("Error")
      }
    },
    async create(data) {
      try{
      await bodegaService.create(data);
      this.getData();
      } catch (error) {
         alert("Error")
      }
    },
    async deleteItem(id) {
      try{
      await bodegaService.delete(id);
      this.getData();
      } catch (error) {
         alert("Error")
      }
    },
    async readOne(id) {
      try{
      this.editData = await bodegaService.getOne(id);
      } catch (error) {
         alert("Error")
      }
    },
    async update(data, id) {
      try{
      await bodegaService.update(data, id);
      this.getData();
      } catch (error) {
         alert("Error")
      }
    },
  },
};
</script>

<style>
.margintop {
  margin-top: 1rem;
}
</style>
