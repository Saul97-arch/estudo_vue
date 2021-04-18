<template>
  <div class="main">
    <UserData @send-data="sendPerson"></UserData>
    <ActiveUser :name="user.name" :age="user.age"></ActiveUser>
  </div>
</template>

<script>
import UserData from "./components/UserData";
import ActiveUser from "./components/ActiveUser";
/* 
   The point of the task is show a change of data(state) of a component in  another
   it makes sense to manage data in the father component in order to be more easy manage
   this states(data), same idea of context and composition.
*/
export default {
  components: {
    UserData,
    ActiveUser,
  },
  data() {
    return {
      user: {
        name: "Ronaldo",
        age: 42,
      },
    };
  },

  methods: {
    sendPerson(name, age) {
      this.user = {
        name: name,
        age: age,
      };
    },
  },
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>