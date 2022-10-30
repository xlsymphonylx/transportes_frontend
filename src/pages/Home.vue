<template>
  <div>
    <h3>Inicio de Sesion</h3>
    <common-form :fields="fields" @save="login" />
    <h3 style="margin-top: 2rem">Registro</h3>
    <common-form :fields="registerFields" @save="register" />
  </div>
</template>

<script>
import axios from "axios";
import authService from "../services/authService";
import CommonForm from "../components/CommonForm.vue";
export default {
  components: { CommonForm },
  data: () => ({
    fields: [
      {
        name: "email",
        type: "text",
        label: "Email",
      },
      {
        name: "password",
        type: "text",
        label: "Contraseña",
      },
    ],
    registerFields: [
      {
        name: "email",
        type: "text",
        label: "Email",
      },
      {
        name: "name",
        type: "text",
        label: "Nombre",
      },
      {
        name: "password",
        type: "text",
        label: "Contraseña",
      },
    ],
  }),
  methods: {
    async login(loginData) {
      const { data } = await authService.login(loginData);
      const { access_token } = data;
      axios.defaults.headers.common = {
        Authorization: `Bearer ${access_token}`,
      };
    },
    async register(registerData) {
        const { data } = await authService.register(registerData);
        const { access_token } = data;
        axios.defaults.headers.common = {
          Authorization: `Bearer ${access_token}`,
        };
     
    },
  },
};
</script>

<style></style>
