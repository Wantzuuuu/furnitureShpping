<template>
    <div style="position:relative;">
    <Loading :active.sync="isLoading"></Loading>
        <Navbar :navbarLen="cartLen" :navbarPath="path" :navPath="pathState"></Navbar>
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
        import {mapGetters} from "vuex";
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
                status:{
                    deleteCart:"",
                },
                path:"",
            }
        },
        methods:{
       getProducts(){
            this.$store.dispatch('getProducts');
        },
         getCart(){
            this.$store.dispatch('getCart');
        },
         deleteCart(id){
             this.$store.dispatch("deleteCart",id);
             this.status.deleteCart = id;
         }
    },
    computed:{
        pathState(){
            if(this.path== "/customer_website/index"){
                return true ;
            }else{
                return false;
            }
        },
        isLoading(){
            return this.$store.state.isLoading;
        },
        products(){
            return this.$store.state.products;
        },
        category(){
            return this.$store.state.category;
        },
        carts(){
            return this.$store.state.carts;
        },
        ...mapGetters(['cartLen']),
    },
    created(){
            this.getProducts();
            this.getCart();
            this.$bus.$on('updateCart',()=>{
                this.getCart();
            });
            this.path=this.$route.path;
        },
        watch: {
        '$route' (to, from) {
            this.path = this.$route.path;
        },
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