<template>
  <div>
    <common-form :fields="fields" />
    <div class="margintop">
      <v-data-table
        :headers="headers"
        :items-per-page="5"
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
export default {
  components: { CommonForm },
  data: () => ({
    fields: [
      {
        name: "namePilot",
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
    ],
  }),
};
</script>

<style>
.margintop {
  margin-top: 1rem;
}
</style>
