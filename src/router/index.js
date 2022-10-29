import Vue from "vue";
import Router from "vue-router";

const routerOptions = [
  { path: "/transportista", component: "Transportista" },
  { path: "/piloto", component: "Piloto" },
  { path: "/ubicacion", component: "Ubicacion" },
  { path: "/bodega", component: "Bodega" },
  { path: "/acciones", component: "Acciones" },
  { path: "/tipo-acciones", component: "TipoAcciones" },
  { path: "/cabezal", component: "Cabezal" },
  { path: "/contacto", component: "Contacto" },
  { path: "/estudiantes", component: "Students" },
  { path: "/reportes", component: "Reportes" },
  { path: "/", component: "Home" },
  { path: "*", component: "NotFound" },
];

const routes = routerOptions.map((route) => {
  return {
    ...route,
    component: () => import(`../pages/${route.component}.vue`),
  };
});

Vue.use(Router);

export default new Router({
  mode: "history",
  routes,
});
