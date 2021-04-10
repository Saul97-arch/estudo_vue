const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "xoscaTrybe",
          name: "José Valentin",
          phone: "9891290289",
          email: "jose@gmail.com",
        },
        {
          id: "juliecutie",
          name: "Julie von Henderson",
          phone: "55012012020",
          email: "pretyjuly@gmail.com",
        },
      ],
    };
  },
});
// A new vue app, wich will be conected to our new app
app.component("user-contact", {
  template: `
  <li>
  <h2>{{ friend.name }}</h2>
  <button @click="toggleDetails">{{ detailsAreVisible ? "Hide" : "Show"}}</button>
    <ul v-if=detailsAreVisible>
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email}}</li>
    </ul>
  </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "juliecutie",
        name: "Julie von Henderson",
        phone: "55012012020",
        email: "pretyjuly@gmail.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});
app.mount("#app");
