// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl= document.querySelector('ul');
//  function addGoal(params) {
//     const enteredValue = inputEl.value;
//     const listItemEl= document.createElement('li');
//     listItemEl.textContent= enteredValue;
//     listEl.appendChild(listItemEl);
//     inputEl.value=""
//  }
//  buttonEl.addEventListener('click', addGoal);
Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        }
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = ''
        },
        delete(index){
            this.goals.splice(index,1);
        }
    },
}).mount('#app');