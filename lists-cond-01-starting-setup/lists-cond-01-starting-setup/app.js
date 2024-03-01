const app = Vue.createApp({
  data() {
    return { goals: [],
          text:""
    };
  },
  methods: {
    addGoals(){
      console.log(this.goals)
      this.goals.push(this.text)
    },
    removeGoal(index){
      this.goals.splice(index,1)
    }
  },
});

app.mount('#user-goals');
