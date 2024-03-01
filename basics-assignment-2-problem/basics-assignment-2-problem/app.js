const app= Vue.createApp({
    data() {
        return {
            name:"",
            names:""
        }
    },
    methods: {
        showOutput(e){
            this.name= e.target.value;
        },
        showAlert(){
            alert('aaaaaaaaaaaaaaaaaa')
        },
        showName(){
            this.names=this.name
        }
    },
})

app.mount('#assignment')