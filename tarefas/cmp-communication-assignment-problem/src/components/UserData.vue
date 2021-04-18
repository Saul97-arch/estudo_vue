<template>
  <div class="flex-component">
    <form @submit.prevent="sendDataPerson" class="flex-component">
      <label for="name">Name</label>
      <input v-model="enteredName" type="text" />

      <label for="age">Age</label>
      <input v-model="enteredAge" type="number" />
      <button>Input data</button>
    </form>
  </div>
</template>

<script>
export default {
  emits: ["send-data"],
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },

  methods: {
    sendDataPerson() {
      this.$emit("send-data", this.enteredName, this.enteredAge);
    },
  },
};
</script>

<style scoped>
.flex-component {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
</style>