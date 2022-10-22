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
        name: "codigo",
        type: "text",
        label: "Codigo",
      },
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
    ],

    headers: [
      { text: "ID", value: "id" },
      { text: "Fecha", value: "fecha" },
      { text: "Procedencia", value: "procedencia" },
      { text: "Destino", value: "destino" },
      { text: "Carga", value: "carga" },
    ],
  }),
};
</script>

<style>
.margintop {
  margin-top: 1rem;
}
</style>
