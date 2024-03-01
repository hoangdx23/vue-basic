const app = Vue.createApp({
  data() {
    return {
      counter:10,
      name:"",
      confrimNames:""
    };
  },
  methods: {
    confrimName(){
      this.confrimNames=this.name
    },
    submitForm(){
      alert('ok')
    },
    setName(event,lastName){
      this.name= event.target.value+' '+lastName;
    },
    add(num){
      this.counter=this.counter +num;
    },
    reduce(num){
      this.counter-= num;
    }
  },
});

app.mount('#events');
