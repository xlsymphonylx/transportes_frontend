<template>
  <!-- <div class="container form-container">
        <div class="group-title">{{ title }}</div>
        <div class="form-group" v-for="field in fields" :key="field.name">
            <label :for="field.name" class="form-title">{{
                field.label
            }}</label>
            <input
                :type="field.type"
                class="form-control"
                :id="field.name"
                v-model="data[field.name]"
            />
        </div>
        <div class="btn-container">
            <button class="btn btn-primary" @click="onSave">Guardar</button>
        </div>
    </div> -->
  <form @submit.prevent="submit">
    <div class="form-group" v-for="field in fields" :key="field.name">
      <v-text-field
        v-model="data[field.name]"
        :error-messages="errors"
        :label="field.label"
        required
      ></v-text-field>
    </div>
    <v-btn
      class="mr-4 success"
      type="submit"
      :disabled="invalid"
      @click="onSave"
    >
      Guardar
    </v-btn>
    <v-btn class="mr-4 danger" @click="onCancel"> cancelar </v-btn>
  </form>
</template>

<script>
export default {
  props: {
    fields: {
      type: Array,
      default: () => [
        {
          name: "example",
          type: "text",
          label: "titulo",
        },
      ],
    },
  },
  data: () => ({
    invalid: null,
    errors: null,
    title: {
      type: String,
      default: "PLACEHOLDER",
    },
    data: {
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
        { text: "Codigo", value: "calories" },
        { text: "Placa", value: "fat" },
        { text: "Marca", value: "carbs" },
      ],
    },
  }),
  methods: {
    onSave() {
      this.$emit("save", this.data);
    },
    onCancel() {
      this.fields.forEach((field) => {
        this.data[field] = "";
      });
    },
  },
};
</script>

<style scoped>
.success {
  background-color: rgb(1, 134, 79) !important;
  color: white;
}
.danger {
  background-color: rgb(244, 73, 73) !important;
  color: white;
}
</style>
