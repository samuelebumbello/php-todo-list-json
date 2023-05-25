const { createApp } = Vue;

createApp({

  data() {
    return {
      apiUrl: '/php/server.php',
      list: [],
      newTask: '',
    }
  },
  methods: {
    viewList() {
      axios.get(this.apiUrl)
        .then(result => {
          this.list = result.data;
        })
    },
    addTask() {
      const data = new FormData();
      data.append('todoItem', this.newTask);


      axios.post(this.apiUrl, data)
        .then(result => {
          this.newTask = '';
          this.list = result.data;
        })

    },
    deleteTask(index) {
      if (confirm('Elimi questo elemento?')) {
        const data = new FormData();
        data.append('indexToDelete', index);
        axios.post(this.apiUrl, data)
          .then(result => {
            this.list = result.data;
          })
      }
    }
  },
  mounted() {
    this.viewList();

  },

}).mount('#app');