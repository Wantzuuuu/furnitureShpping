<template>
    <div>
        <div class="cart-panel animated fast">
            <div class="cart-block">
                <div class="cart-panel-header align-items-center">
                    <div class="h6 mb-0 d-inline">購物車</div>
                    <a @click.prevent="removeCartModal" class="ml-auto" href="#"><i class="fas fa-chevron-right text-white"></i></a>
                </div>
                <div v-if="cartLen == 0" class="cart-item p-4">
                    <div  class="text-center mb-0 w-100">
                        您的購物車是空的
                    </div>
                </div>
                <div v-for="i in cartPanel.carts" class="cart-item">
                    
                    <img class="cart-img" :src="i.product.imageUrl" alt="">
                    <div class="cart-content">
                        <div>
                            <h6 class="mb-0">{{i.product.title}}</h6>
                            <p class="mb-0">{{i.qty}}{{i.product.unit}}</p>
                            <p class="mb-0">NT {{i.final_total |currency}}</p>
                        </div>
                    </div>
                    <div class="cart-remove">
                        <a @click.prevent="deleteProduct(i.id)" class="">
                            <i v-if="deleteState!=i.id" class="far fa-trash-alt text-danger"></i>
                            <i v-if="deleteState==i.id" class="fas fa-spinner fa-spin"></i>
                        </a>
                         
                    </div>
                </div>
                <div v-if="cartLen != 0" class="checkout-box">
                        <button @click="goCheckout" href="#" class="checkout-btn ">
                            訂單結帳
                        </button>
                </div>
            </div>
        </div>
        <div @click="removeCartModal" class="cart-cancel "></div>
    </div>
</template>

<script>
    import $ from 'jquery';
    export default{
        name:"CartPanel",
        props:['cartPanel','cartLen','deleteState'],
        watch:{
            cartLen (){
                if(this.cartLen>4){
                    $(".cart-block").addClass('over-flow-y');
                }else{
                    $(".cart-block").removeClass('over-flow-y');
                }
            }
        },
        methods:{
            openCartModal(){
                $('.cart-panel').addClass('active');
                $('.cart-panel').addClass('fadeInRight');
                $('.cart-cancel').addClass('active');
                $('.cart-panel').removeClass('fadeOutRight');
            },
            removeCartModal(){
                $('.cart-panel').removeClass('fadeInRight');
                $('.cart-panel').addClass('fadeOutRight');
                $('.cart-cancel').removeClass('active');
                setTimeout(()=>{
                    $('.cart-panel').removeClass('active');
                },500)
            },
            deleteProduct(id){
                console.log(id);
                const vm = this;
                vm.$emit("deleteProduct",id)
                
            },
            goCheckout(){
                const vm = this;
                $('.cart-panel').removeClass('fadeInRight');
                $('.cart-panel').addClass('fadeOutRight');
                $('.cart-cancel').removeClass('active');
                vm.$router.push('/customer_website/cart')
            }
        },
        copmputed:{
            cartLenChange(){
                return this.cartLen ;
            }
        },
        created(){
            this.$bus.$on('openCartPanel',()=>{
                this.openCartModal();
            })
        }
    }
</script>

<style>
    .cart-panel{
        position:fixed;
        top:0;
        right:0;
        width:85%;
        display:flex;
        z-index:20;
        display:block;
        transition:all 0.3s ease;
    }
    @media(min-width:576px){
        .cart-panel{
            width:50%;
        }
    }
    @media(min-width:768px){
        .cart-panel{
            width:40%;
        }
    }
     @media(min-width:992px){
        .cart-panel{
            width:25%;
        }
    }
    
    .cart-block{
        width:100%;
        height:100vh;
        background-color:#323536;
        color:#fff;
        display:none;
    }
    .over-flow-y{
        overflow-y:scroll;
    }
    .cart-panel.active .cart-block{
        display:block;
    }
    .cart-cancel{
        position:fixed;
        top:0;
        left:0;
        z-index:19;
        width:100%;
        height:100vh;
        background-color:rgba(0,0,0,0.3);
        opacity:0;
        display:none;
        transition:all .3s ease;
    }
    .cart-cancel.active{
        opacity:1;
        display:block;
    }
    .cart-panel-header{
        padding:23px;
        background-color:#1f2429;
        display:flex;
    }
    .cart-item{
        padding:13px;
        display:flex;
        width:100%;
        border-bottom:1px solid #1F2429;
    }
    .cart-item .cart-img{
        width:45%;
        height:100px;
    }
    .cart-item .cart-content{
        width:45%;
        margin-left:10px;
        display:flex;
        align-items:center;
    }
    .cart-item .cart-remove{
       width:10%;
       display:flex;
       align-items:center;
    }
    .checkout-box{
        padding:10px;
        text-align:center;
    }
    .checkout-box .checkout-btn{
        width:220px ;
        height:34px ;
        border:1px solid #888;
        background-color:#232a32;
        color:white;
        border-radius:4px;
    }
    .checkout-box .checkout-btn:hover{
        background-color:#1f2429;
    }
</style>