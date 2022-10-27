<template>
  <div>
    <common-form
      :fields="fields"
      @save="create"
      @getBodegasDestino="getBodegasDestino"
    />
    <div class="margintop">
      <v-data-table
        :items="rows"
        :headers="headers"
        :items-per-page="5"
        class="elevation-1"
        hide-default-footer
        no-data-text="No Resultados"
        no-results-text="No Resultados"
        :header-props="headerProps"
      >
        <template #[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="readOne(item.id)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item.id)"> mdi-delete </v-icon>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
import CommonForm from "../components/CommonForm.vue";
import accionesService from "../services/accionesService";
import bodegaService from "../services/bodegaService";
import cabezalService from "../services/cabezalService";
import tipoAccionesService from "../services/tipoAccionesService";
import ubicacionService from "../services/ubicacionService";

export default {
  components: { CommonForm },
  data: () => ({
    headerProps: {
      sortByText: "Ordenar Por",
    },
    fields: [
      {
        name: "numero_contenedor",
        type: "text",
        label: "Numero Contenedor",
      },
      {
        name: "carga",
        type: "select",
        label: "Carga",
        items: [
          {
            name: "Vacio",
          },
          {
            name: "Cargado",
          },
        ],
        itemText: "name",
        itemValue: "name",
      },
      {
        name: "tipo_accion_id",
        type: "select",
        label: "Tipo de Accion",
        items: [],
        itemText: "description",
        itemValue: "id",
      },
      {
        name: "cabezal_id",
        type: "select",
        label: "Cabezal",
        items: [],
        itemText: "placa",
        itemValue: "id",
      },
      {
        name: "procedencia_id",
        type: "select",
        label: "Procedencia",
        items: [],
        itemText: "name",
        itemValue: "id",
      },
      {
        name: "destino_id",
        type: "select",
        label: "Destino",
        items: [],
        itemText: "name",
        itemValue: "id",
      },
      {
        name: "bodega_destino_id",
        type: "select",
        label: "Bodega Destino",
        items: [],
        itemText: "name",
        itemValue: "id",
      },
    ],

    headers: [
      { text: "ID", value: "id" },
      { text: "Fecha", value: "fecha" },
      { text: "Carga", value: "carga" },
      { text: "Tipo Accion", value: "tipoAccionName" },
      { text: "Destino", value: "destinoName" },
      { text: "Procedencia", value: "procedenciaName" },
      { text: "Bodega Destino", value: "bodegaDestino" },
      { text: "Cabezal", value: "cabezalName" },
      { text: "Piloto", value: "pilotoName" },
      { text: "Transportista", value: "transportistaName" },
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
      const { data } = await accionesService.getAll();
      const { data: tipoAcciones } = await tipoAccionesService.getAll();
      const { data: cabezales } = await cabezalService.getAll();
      const { data: ubicaciones } = await ubicacionService.getAll();
      this.fields[2]["items"] = tipoAcciones;
      this.fields[3]["items"] = cabezales;
      this.fields[4]["items"] = ubicaciones;
      this.fields[5]["items"] = ubicaciones;
      this.rows = data.map((item) => ({ ...item, actions: "" }));
    },
    async getBodegasDestino(destino) {
      const { data } = await bodegaService.getAll();
      this.fields[6]["items"] = data.filter(
        (item) => item.ubicacion_id === destino
      );
    },
    async create(data) {
      await accionesService.create(data);
      this.getData();
    },
    async deleteItem(id) {
      await accionesService.delete(id);
      this.getData();
    },
    async readOne(id) {
      this.editData = await accionesService.getOne(id);
    },
    async update(data, id) {
      await accionesService.update(data, id);
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
