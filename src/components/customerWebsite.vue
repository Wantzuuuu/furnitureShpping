<template>
    <div style="position:relative;">
    <Loading :active.sync="isLoading"></Loading>
        <Navbar :navbarLen="cartLen"></Navbar>
        <alert></alert>
        <cartPanel :cartPanel="carts" :cartLen="cartLen" :deleteState="status.deleteCart" @deleteProduct="deleteCart"></cartPanel>
        <router-view></router-view>
         <!--footer-->
            <Footer></Footer>
        <!--footer end-->
    </div>
</template>

<script>
        import Carousel from "./customerpages/carousel"
        import Navbar from "./customercomponents/navbar"
        import cartPanel from "./customercomponents/cartpanel";
        import Footer from "./customercomponents/footer";
        import alert from './alertMessage';
    export default{
        components:{
            Carousel,
            Navbar,
            cartPanel,
            Footer,
            alert,
        },
        name:"Customer-website",
        data(){
            return{
                products:[],
                carts:[],
                isLoading:false,
                cartLen:0,
                status:{
                    deleteCart:false,
                },
            }
        },
        methods:{
       getProducts (page=1){
            const api =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/products?page=${page}` //"https://vue-course-api.hexschool.io/api/joshwan/products"
            const vm = this;
            this.$http.get(api).then((response) => {
                vm.products = response.data.products;
                // console.log(response.data);
            });
        },
        // cart
             getCart(){
                const vm = this ; 
                vm.isLoading=true;
                const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`
                vm.$http.get(url).then((response)=>{
                    vm.carts = response.data.data;
                    vm.cartLen = vm.carts.carts.length;
                    // console.log(vm.carts);
                    vm.isLoading=false;
                })
            },
            deleteCart(id){
                const vm = this ; 
                vm.isLoading=true;
                vm.status.deleteCart = true;
                const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`
                vm.$http.delete(url).then((response)=>{
                    // console.log(response)
                    // vm.$bus.$emit('updateCart');
                    vm.getCart();
                    vm.isLoading=false;
                    vm.status.deleteCart = false;
                })
            }
        // cart end

    },
    created(){
            this.getProducts();
            this.getCart();
            this.$bus.$on('updateCart',()=>{
                this.getCart();
            });
        }
    } 
</script>

<style>
  .example-slide {
    align-items: center;
    background-color: #666;
    color: #999;
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    min-height: 10rem;
  }
</style>