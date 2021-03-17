const app = Vue.createApp({
  data() {
    return {
      inputValue: "",
      isVisible: true,
      inputBackgroundColor: "",
    };
  },
  computed: {
    paraClasses() {
      return {
        user1: this.inputValue === "user1",
        user2: this.inputValue === "user2",
        visible: this.isVisible,
        hidden: !this.isVisible,
      };
    },
  },
  methods: {
    toggleHidden() {
      this.isVisible = !this.isVisible;
    },
  },
});

app.mount("#assignment");
