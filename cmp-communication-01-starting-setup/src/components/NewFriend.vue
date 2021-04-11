<template>
  <form v-on:submit.prevent>
    <label for="name">Name</label>
    <input type="text" v-model="name" />
    <label for="phone">Phone</label>
    <input type="text" v-model="phone" />
    <label for="email">Email</label>
    <input type="text" v-model="email" />
    <div>
      <button @click="sendFriendData">Insert new Friend</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["send-friend-data"],
  data() {
    return {
      name: "",
      phone: "",
      email: "",
    };
  },

  methods: {
    sendFriendData() {
      this.id = this.name;
      this.$emit("send-friend-data", this.name, this.phone, this.email);
      // Pegar esse emit e dar um push no array de amigos, provalvelmente os dados vão ter que ser
      // jogados num objeto seco antes
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

input {
  padding: 0.15rem;
}

label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}

form div {
  margin: 1rem 0;
}

button {
  margin-top: 1rem;
}
</style>