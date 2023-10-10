let app = Vue.createApp({
    data: function(){
        return {
            searchText: "",
            showNav: window.innerWidth > 769 ? true : false,
            showMenuButton: window.innerWidth > 769 ? false : true,
            showCloseButton: false,
            productsList: [
                {
                    name: "Airpods",
                    price: 45868,
                    url: "images/airpods.jpeg",
                    discount: 0
                },
                {
                    name:"GoPro",
                    price: 548521,
                    url: "images/gopro.jpeg",
                    discount: 0

                },
                {
                    name: "Mouse",
                    price: 4535684,
                    url: "images/mouse.jpeg",
                    discount: 0.2

                }
            ],
            searchResults: []
        }
    },
    methods: {
        toggleNav (){
            this.showNav = !this.showNav
            this.showMenuButton = !this.showMenuButton
            this.showCloseButton = !this.showCloseButton
        }
    },
    computed:  {
        productsWithDiscount(){
            return this.productsList.filter(item => item.discount > 0)
        }
    },
    watch: {
        searchText(newValue, oldValue){
            if(newValue){
                this.searchResults = this.productsList.filter(item => item.name.toLowerCase().includes(newValue.toLowerCase()))
            }
        }

    }
})

app.component("product-card", {
    template: `
    <div v-bind:key="product.name" class="product-card">
    <img v-bind:src="product.url" v-bind:alt="'Foto '+ product.name">
    <div class="product-data">
      <h3>{{product.name}}</h3>
      <p>{{product.price}}</p>
      <a href="#" class="btn">Comprar ahora</a>
    </div>
  </div>
    `,
    props: ["product"]
})

app.mount("#app")