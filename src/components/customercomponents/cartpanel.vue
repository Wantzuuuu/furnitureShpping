<template>
    <div>
        <div class="cart-panel animated">
            <div class="cart-block">
                <div class="cart-panel-header">
                    <div class="h6 mb-0">購物車</div>
                </div>
                <div v-if="cartLen == 0" class="cart-item p-4">
                    <div  class="text-center mb-0 w-100">
                        您的購物車是空的
                    </div>
                </div>
                <div v-for="i in cartPanel.carts" class="cart-item">
                    <div class="cart-img" :style="{backgroundImage:`url(${i.product.imageUrl})`}"></div>
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
                if(this.cartLen>5){
                    $(".cart-block").addClass('over-flow-y');
                }else{
                    $(".cart-block").removeClass('over-flow-y');
                }
            }
        },
        methods:{
            openCartModal(){
                $('.cart-panel').addClass('fadeInLeft');
                $('.cart-panel').addClass('active');
                $('.cart-cancel').addClass('active');
                $('.cart-panel').removeClass('fadeOutLeft');
            },
            removeCartModal(){
                $('.cart-panel').removeClass('fadeInLeft');
                $('.cart-panel').addClass('fadeOutLeft');
                $('.cart-cancel').removeClass('active');
            },
            deleteProduct(id){
                console.log(id);
                const vm = this;
                vm.$emit("deleteProduct",id)
                
            },
            goCheckout(){
                const vm = this;
                $('.cart-panel').removeClass('fadeInLeft');
                $('.cart-panel').addClass('fadeOutLeft');
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
        left:0;
        width:23%;
        display:flex;
        z-index:20;
         transition:all 1.2s ease;
    }
    .cart-panel.active{
        display:block;
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
    }
    .cart-cancel.active{
        opacity:1;
        display:block;
    }
    @media(max-width:576px){
        .cart-panel{
            width:85%;
        }
    }
    .cart-panel-header{
        padding:23px;
        background-color:#1f2429;
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
        background-size:cover;
        background-position:center center;
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