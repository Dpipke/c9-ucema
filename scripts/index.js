let app = Vue.createApp({
    data: function(){
        return {
            showNav: window.innerWidth > 769 ? true : false,
            showMenuButton: window.innerWidth > 769 ? false : true,
            showCloseButton: false,
            productsList: [
                {
                    name: "Airpods",
                    price: 45868,
                    url: "images/airpods.jpeg"
                },
                {
                    name:"GoPro",
                    price: 548521,
                    url: "images/gopro.jpeg"
                },
                {
                    name: "Mouse",
                    price: 4535684,
                    url: "images/mouse.jpeg"
                }
            ]
        }
    },
    methods: {
        toggleNav (){
            this.showNav = !this.showNav
            this.showMenuButton = !this.showMenuButton
            this.showCloseButton = !this.showCloseButton
        }
    }
})

app.mount("#app")