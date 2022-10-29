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
      try{
      const { data } = await ubicacionService.getAll();

      this.rows = data.map((item) => ({ ...item, actions: "" }));
      } catch (error) {
         alert("Error")
      }
    },
    async create(data) {
      try{
      await ubicacionService.create(data);
      this.getData();
      } catch (error) {
         alert("Error")
      }
    },
    async deleteItem(id) {
      try{
      await ubicacionService.delete(id);
      this.getData();
      } catch (error) {
         alert("Error")
      }
    },
    async readOne(id) {
      try{
      this.editData = await ubicacionService.getOne(id);
      } catch (error) {
         alert("Error")
      }
    },
    async update(data, id) {
      try{
      await ubicacionService.update(data, id);
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
