const app = Vue.createApp({
    data: function() {
        return {
            candidato: {
                name: "",
                email: "",
                passport: "",
                position: [],
                cv: "",
                age: "",
                telephone: "",
                socialMedia: "",
                presentation: "",
                languages: [],
                workingPreference: "",
                workingPlace: "",
                startDate: ""
            }
        }
    },
    methods: {
        submitForm() {
            if(isNaN(this.candidato.age)){
                alert("La edad debe ser un numero")
                return
            }
            console.log(this.candidato)
            localStorage.setItem("candidato", JSON.stringify(this.candidato))

        },
        getCandidato() {
            const candidatoLocalStorage = JSON.parse(localStorage.getItem("candidato"))
            console.log("candidato recuperado del localstorage", candidatoLocalStorage)
        }
    }

})

app.mount("#app")