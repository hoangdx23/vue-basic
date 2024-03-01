const app=  Vue.createApp({
    data() {
        return {
            name:"hoàng",
            age:18,
            img:"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
        }
        
    },
    methods: {
        randomAge(){
            const random= Math.floor( Math.random()*100)+1;
            return random;
        }
    },
}).mount('#assignment')
// const app = Vue.createApp({
//     data() {
//         return {
//             name: "hoàng",
//             age: 18,
//         }
//     },
//     methods: {
//         randomAge() {
//             return Math.floor(Math.random() * 100) + 1; // Số ngẫu nhiên từ 1 đến 100
//         }
//     }
// }).mount('#assignment');
