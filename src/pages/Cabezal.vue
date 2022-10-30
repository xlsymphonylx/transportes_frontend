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
import cabezalService from "../services/cabezalService";
import pilotoService from "../services/pilotoService";
import transportistaService from "../services/transportistaService";

export default {
  components: { CommonForm },
  data: () => ({
    headerProps: {
      sortByText: "Ordenar Por",
    },
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
      {
        name: "piloto_id",
        type: "select",
        label: "Piloto",
        items: [],
        itemText: "name",
        itemValue: "id",
      },
      {
        name: "transportista_id",
        type: "select",
        label: "Transportista",
        items: [],
        itemText: "name",
        itemValue: "id",
      },
    ],

    headers: [
      { text: "ID", value: "id" },
      { text: "Placa", value: "placa" },
      { text: "Marca", value: "marca" },
      { text: "Transportista", value: "transportistaName" },
      { text: "Piloto", value: "pilotoName" },
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
      try{
      const { data } = await cabezalService.getAll();
      const { data: pilotos } = await pilotoService.getAll();
      const { data: transportistas } = await transportistaService.getAll();
      this.fields[2]["items"] = pilotos;
      this.fields[3]["items"] = transportistas;
      this.rows = data.map((item) => ({ ...item, actions: "" }));
      } catch (error) {
         alert("Error")
      }
    },
    async create(data) {
      try{
      await cabezalService.create(data);
      this.getData();
      } catch (error) {
         alert("Error")
      }
    },
    async deleteItem(id) {
      try{
      await cabezalService.delete(id);
      this.getData();
      } catch (error) {
         alert("Error")
      }
    },
    async readOne(id) {
      try{
      this.editData = await cabezalService.getOne(id);
      } catch (error) {
         alert("Error")
      }
    },
    async update(data, id) {
      try{
      await cabezalService.update(data, id);
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
