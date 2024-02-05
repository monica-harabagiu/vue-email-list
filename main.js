const { createApp } = Vue

createApp({
    data() {
        return {
            generatedEmail: [],
        }
    },
    methods: {
        generateEmail() {

            this.generatedEmail = []

            for (let i = 0; i < 10; i++) {
                
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                    console.log(result.data)
                    this.generatedEmail.push(result.data.response) 
                })
            }
        }
    }
}).mount('#app')