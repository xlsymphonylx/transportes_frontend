<template>
  <div>
    <h3>Reporte filtrado por fecha</h3>
    <v-select
      v-model="initialDateYear"
      label="Año inicio"
      :items="years"
      no-data-text="Nada Registrado"
    >
    </v-select>
    <v-select
      v-model="initialMonthYear"
      label="Mes inicio"
      :items="months"
      item-text="name"
      item-value="value"
      no-data-text="Nada Registrado"
    >
    </v-select>
    <v-select
      v-model="finalDateYear"
      label="Año Final"
      :items="years"
      no-data-text="Nada Registrado"
    >
    </v-select>
    <v-select
      v-model="finalMonthYear"
      label="Mes Final"
      :items="months"
      item-text="name"
      item-value="value"
      no-data-text="Nada Registrado"
    >
    </v-select>
    <div class="text-center">
      <v-btn class="mr-4 success" @click="filterDataByDate"> Filtrar </v-btn>
    </div>
    <v-data-table
      :headers="monthlyReportsHeaders"
      :header-props="headerProps"
      :items="monthlyReportsData"
      :items-per-page="15"
      class="elevation-1"
      title="Reportes Mensuales"
      no-data-text="No Resultados"
      no-results-text="No Resultados"
    >
    </v-data-table>
  </div>
</template>

<script>
import accionesService from "../services/accionesService";
export default {
  data: () => ({
    headerProps: {
      sortByText: "Ordenar Por",
    },
    monthlyReportsData: [],
    originalMonthlyReportsData: [],
    years: ["2022", "2021", "2020", "2019", "2018", "2017"],
    months: [
      {
        name: "Enero",
        value: "01",
      },
      {
        name: "Febrero",
        value: "02",
      },
      {
        name: "Marzo",
        value: "03",
      },
      {
        name: "Abril",
        value: "04",
      },
      {
        name: "Mayo",
        value: "05",
      },
      {
        name: "Junio",
        value: "06",
      },
      {
        name: "Julio",
        value: "07",
      },
      {
        name: "Agosto",
        value: "08",
      },
      {
        name: "Septiembre",
        value: "09",
      },
      {
        name: "Octubre",
        value: "10",
      },
      {
        name: "Noviembre",
        value: "11",
      },
      {
        name: "Deciembre",
        value: "12",
      },
    ],
    initialDateYear: null,
    initialMonthYear: null,
    finalMonthYear: null,
    finalDateYear: null,
    dateFilterData: [],
    monthlyReportsHeaders: [
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
    ],
  }),
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      const { data } = await accionesService.getAll();
      this.originalMonthlyReportsData = data;
    },
    filterDataByDate() {
      const initialData = new Date(
        `${this.initialDateYear}-${this.initialMonthYear}-01 00:00:00`
      );
      const finalData = new Date(
        `${this.finalDateYear}-${this.finalMonthYear}-01 00:00:00`
      );

      this.monthlyReportsData = this.originalMonthlyReportsData.filter((d) => {
        var time = new Date(`${d.fecha} 00:00:00`);
        return finalData > time && time > initialData;
      });
    },
  },
};
</script>

<style></style>
