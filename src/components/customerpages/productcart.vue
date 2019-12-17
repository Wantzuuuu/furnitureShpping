<template>
    <div>
        <div class="mt-10">
             <div class="container">
                <div style="min-height:68vh;">
                    <h2 class="text-center">購物車</h2>           
            <div class="cart-box py-3">
                 <!--cart-header-->
                <div class="cart-header d-none d-md-block">
                    <div class="row justify-content-end">
                        <div class="col-6">
                            <div class="row">
                                <div class="col-5">
                                    <h5 class="mb-0 text-center">數量</h5>
                                 </div>
                                 <div class="col-5">
                                    <h5 class="mb-0 text-center">價格</h5>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            <!--cart-header end-->
             <!--cart-body-->
             <div class="cart-body p-3 ">
                    <div v-if="cartLen==0" class="cart-content">
                        <div  class="h5 text-center">您的購物車是空的</div>
                    </div>
                 <!-- product -->
                <div v-for="item in carts.carts" class="cart-content">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-6">
                                    <div class="cart-data">
                                        <img width="150px" height="150px" :src="item.product.imageUrl" alt="">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="cart-data">
                                        <div>
                                            <h5>{{item.product.title}}</h5>
                                            <div v-if="item.coupon" class="text-success text-center">已使用優惠卷</div>
                                            <div class="text-center">
                                            <a @click.prevent="deleteCart(item.id)" class="text-danger" href="#">
                                                <span v-if="deleteId != item.id">移除</span>
                                                <i v-if="deleteId == item.id" class="fas fa-spinner fa-spin text-primary"></i>
                                            </a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row h-100 mt-2 mt-md-0">
                                <div class="col-6">
                                    <div class="cart-data">
                                        <div class="h5">{{item.qty}}{{item.product.unit}}</div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="cart-data">
                                        <div class="h4 ml-2">NT {{item.product.price * item.qty | currency}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- product  end-->
             </div>
             <!--cart-body end-->
             <!--cart-foot -->
                <div v-if="cartLen==0" class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="text-center">
                            <router-link class="btn btn-primary btn-block" to="/customer_website/products/all">繼續購物</router-link>
                        </div>
                    </div>
                </div>
                <div v-if="cartLen!=0" class="cart-foot py-3">
                    <div class="row justify-content-end">
                        <div class="col-md-6">
                                <div class="form-row">
                                    <div class="col-6">
                                        <div>
                                            <div class="h6 mb-0 text-right">總計</div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div v-if="carts.total == carts.final_total">
                                            <div class="h6 mb-0 text-right">NT {{carts.total | currency}}</div>
                                        </div>
                                        <div v-else>
                                            <del class="text-danger d-block text-right">NT.{{carts.total | currency}}</del>
                                            <div class="h6 mb-0 text-right">NT {{carts.final_total | currency}}</div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div v-if="cartLen!=0" class="row justify-content-end">
                         <div class="col-md-6 mt-3">
                            <div class="input-group mb-3">
                                <input v-model="couponCode" type="text" class="form-control" placeholder="請輸入優惠卷" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                <div class="input-group-append">
                                    <button @click="useCoupon" class="btn btn-outline-primary" type="button">確認</button>
                                </div> 
                            </div>
                            <router-link class="mt-4 btn btn-danger btn-block" to="/customer_website/checkout_page">結帳去</router-link>
                        </div>
                    </div>
                </div>
             <!--cart-foot end-->
                </div>
            </div>
           
        </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                couponCode:"" ,
                deleteId:"",
            }
        },
        methods:{
           getCart(){
                this.$store.dispatch('getCart');
            },
            deleteCart(id){
                this.$store.dispatch("deleteCart",id);
                this.deleteId = id;
            },
            useCoupon(){
                const vm = this ;
                vm.$store.dispatch('updateLoading',true);
                const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/coupon`;
                const coupon = {
                    code:this.couponCode
                }
                vm.$http.post(url,{data:coupon}).then((response)=>{
                    // console.log(response)
                    vm.getCart();
                    vm.couponCode="";
                    vm.$store.dispatch('updateLoading',false);
                })
            }
        },
        computed:{
            carts(){
                return this.$store.state.carts;
            },
            cartLen(){
                return this.$store.state.cartLen;
            },
        },
        created(){
            this.getCart();
        }
    }
</script>
<style lang="scss" scope>
    $border-line:#caccd1;
    .cart-box{
        .cart-header{
            padding:10px 0;
            border-top:1px solid  $border-line;
            border-bottom:1px solid  $border-line;
        }
            .cart-body{
            .cart-content{
                border-bottom:1px solid  $border-line;
                padding:10px;
                .cart-data{
                height:100%;
                display:flex;
                align-items:center;
                justify-content:center;
            }
            }
            
        }
        .cart-foot{
            
        }
    }
    
    // .cart-header{
    //     border:1px solid grey;
    // }
</style>