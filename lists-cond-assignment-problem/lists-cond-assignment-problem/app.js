const app= Vue.createApp({
    data() {
        return {
            tasks:[],
            textTask:"",
            taskListIsVisible:true
        }
    },
    computed:{
        buttonCaption(){
            return this.taskListIsVisible?"Hide":'Show'
        }
    },
    methods: {
        addTask(){
            console.log('aaaaaaaaa');
            this.tasks.push(this.textTask);
            this.textTask=''
        },
        toggleTaskList(){
            this.taskListIsVisible=!this.taskListIsVisible;
        }
    },
    
})
app.mount('#assignment')