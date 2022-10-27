<template>
  <v-app>
    <v-app-bar app color="purple" dark>
      <v-app-bar-nav-icon @click="drawer = true"> </v-app-bar-nav-icon>
      <v-toolbar-title>Transportes SA</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Inicio</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/transportista">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-tow-truck</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Transportista</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/piloto">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account-box</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Piloto</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/ubicacion">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-city</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Ubicacion </v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/bodega">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-warehouse</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Bodega</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/acciones">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-circle-edit-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Acciones</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/tipo-acciones">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-clipboard-list-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Tipo de Acciones</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/cabezal">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-truck-flatbed</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Cabezal</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/contacto">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-card-account-phone</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Contacto</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <div style="margin-top: 5rem; padding: 1rem">
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style>
a:link {
  text-decoration: underline !important;
}
a:hover {
  text-decoration: none !important;
}
</style>
