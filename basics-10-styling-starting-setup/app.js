const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  computed: {
    boxAClasses() {
      // O active é o nome da classe
      return { active: this.boxASelected };
    },
  },
  methods: {
    // Simple toggle method, very neat!
    boxSelected(box) {
      if (box === "A") {
        this.boxASelected = !this.boxASelected;
      } else if (box === "B") {
        this.boxBSelected = !this.boxBSelected;
      } else if (box === "C") {
        this.boxCSelected = !this.boxCSelected;
      }
    },
  },
});

app.mount("#styling");
