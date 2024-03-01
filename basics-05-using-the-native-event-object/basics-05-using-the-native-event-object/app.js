const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      // fullName:"",
      lastName:''
    };
  },
  watch:{
    counter(value){
      const that=this
      if (value>50) {
        setTimeout(function(){
          that.counter=0
        },2000)
      }
    }
    // name(value){
    //   if (value==='') {
    //     this.fullName=''
    //   }else{
    //     this.fullName =value+" "+this.lastName;
    //   }
    // },
    // lastName(value){
    //   if (value==='') {
    //     this.fullName=''
    //   }else{
    //     this.fullName =this.name+" "+value;
    //   }
    // }
  },
  computed:{
  fullname(){
    console.log("again");
      if (this.name===""||this.lastName===''
      ) {
        return ""
      }
      return this.name +" "+this.lastName
    },
  },
  methods: {
    outputFullName(){
      if (this.name==="") {
        return this.name=""
      }
      return this.name +" "+"dang"
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){   
      this.name= ""
      this.lastName=''
    }
  }
});

app.mount('#events');
