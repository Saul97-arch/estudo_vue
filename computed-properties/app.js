const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed: {
    // Os métodos definidos aqui seram chamados de maneira diferente
    // Para performance, o computed é o melhor
    fullName() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Miller";
    }
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    }
  }
});

app.mount('#events');
