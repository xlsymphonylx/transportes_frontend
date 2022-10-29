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
    <h3 style="margin-top: 3rem">Reporte por Transportista</h3>
    <div class="text-center" style="margin: 2rem">
      <v-btn class="mr-4 success" @click="filterDataByTransportista">
        Filtrar
      </v-btn>
    </div>
    <v-data-table
      :headers="transportistaReportsHeaders"
      :header-props="headerProps"
      :items="transportistaReportsData"
      :items-per-page="15"
      class="elevation-1"
      title="Reportes Por Movimiento"
      no-data-text="No Resultados"
      no-results-text="No Resultados"
    >
    </v-data-table>
    <h3 style="margin-top: 3rem">Reporte por Usuario</h3>
    <div class="text-center" style="margin: 2rem">
      <v-btn class="mr-4 success" @click="filterDataByUser"> Filtrar </v-btn>
    </div>
    <v-data-table
      :headers="userReportsHeaders"
      :header-props="headerProps"
      :items="usersReportsData"
      :items-per-page="15"
      class="elevation-1"
      title="Reportes Por Usuario"
      no-data-text="No Resultados"
      no-results-text="No Resultados"
    >
    </v-data-table>
    <h3 style="margin-top: 3rem">Reporte por Mes</h3>
    <v-select
      v-model="selectedMonth"
      label="Mes"
      :items="months"
      item-text="name"
      item-value="value"
      no-data-text="Nada Registrado"
    />
    <div class="text-center" style="margin: 2rem">
      <v-btn class="mr-4 success" @click="filterByMonth"> Filtrar </v-btn>
    </div>
    <v-data-table
      :headers="monthlyReportsHeaders"
      :header-props="headerProps"
      :items="byMonthReportsData"
      :items-per-page="15"
      class="elevation-1"
      title="Reportes Por Usuario"
      no-data-text="No Resultados"
      no-results-text="No Resultados"
    >
    </v-data-table>
  </div>
</template>

<script>
import accionesService from "../services/accionesService";
import transportistaService from "../services/transportistaService";
import authService from "../services/authService";

export default {
  data: () => ({
    headerProps: {
      sortByText: "Ordenar Por",
    },
    monthlyReportsData: [],
    transportistaReportsData: [],
    usersReportsData: [],
    originalMonthlyReportsData: [],
    byMonthReportsData: [],
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
    transportistaReportsHeaders: [
      { text: "ID", value: "id" },
      { text: "Transportista", value: "name" },
      { text: "Movimientos", value: "movimientos" },
    ],
    userReportsHeaders: [
      { text: "ID", value: "id" },
      { text: "Usuario", value: "name" },
      { text: "Movimientos", value: "movimientos" },
    ],
  }),
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      try{
      const { data } = await accionesService.getAll();
      this.originalMonthlyReportsData = data;
      } catch (error) {
         alert("Error")
      }
    },
    filterDataByDate() {
      try{
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
      } catch (error) {
         alert("Error")
      }
    },
    async filterDataByTransportista() {
      try{
      const { data: transportistas } = await transportistaService.getAll();
      this.transportistaReportsData = transportistas.map((transportista) => {
        let accionesCount = 0;
        this.originalMonthlyReportsData.map((item) => {
          if (transportista.name === item.transportistaName) {
            accionesCount++;
          }
        });
        return {
          id: transportista.id,
          name: transportista.name,
          movimientos: accionesCount,
        };
      });
      } catch (error) {
         alert("Error")
      }
    },
    async filterDataByUser() {
      try{
      const { data: usersData } = await authService.getAll();
      const { users } = usersData;
      this.usersReportsData = users.map((user) => {
        let accionesCount = 0;
        this.originalMonthlyReportsData.map((item) => {
          if (user.id === item.user_id) {
            accionesCount++;
          }
        });
        return {
          id: user.id,
          name: user.name,
          movimientos: accionesCount,
        };
      });
      } catch (error) {
         alert("Error")
      }
    },
    async filterByMonth() {
      try{
      const { selectedMonth } = this;
      this.byMonthReportsData = this.originalMonthlyReportsData.filter(
        (item) => {
          const separated = item.fecha.split("-");
          const date = separated[1];
          return date === selectedMonth;
        }
      );
      } catch (error) {
         alert("Error")
      }
    },
  },
};
</script>

<style></style>
