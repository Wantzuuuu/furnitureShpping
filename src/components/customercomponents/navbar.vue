<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top z-index-15">
            <div class="container">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <router-link  class="navbar-brand mr-0" to="/customer_website/index">
                    
                    <h5 @click="navState='首頁'" class="mb-0 box-logo">
                            Furniture
                    </h5>
                </router-link>
                <div class="nav-link order-md-1">
                    <div class="drop-down">
                        <button @click="openCartModal" class="btn btn-scondary cart-btn">
                            <span v-if="navbarLen != 0" class="badge badge-danger">{{navbarLen}}</span>
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                    </div>
                </div>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav ml-auto mt-2 mt-lg-0 ">
                        <li @click="navState='首頁'" :class="{'active': navState == '首頁'}" class="nav-item ">
                            <router-link class="nav-link" to="/customer_website/index">首頁</router-link>
                        </li>
                        <li @click="navState='商品'" :class="{'active': navState == '商品'}" class="nav-item">
                            <router-link class="nav-link" to="/customer_website/products/all">商品</router-link>
                        </li>
                        <li @click="navState='風格參考'" :class="{'active': navState == '風格參考'}" class="nav-item">
                            <router-link class="nav-link" to="/customer_website/style">風格參考</router-link>
                        </li>
                        <li @click="navState='最新消息'" :class="{'active': navState == '最新消息'}" class="nav-item">
                            <router-link class="nav-link" to="/customer_website/news">最新消息</router-link>
                        </li>
                    </ul>
                </div> 
            </div>
        </nav>
    </div>
</template>
<script>
import $ from "jquery";

    export default{
        props:["navbarLen"],
        data(){
            return {
                navState:"",
            }
        },
        methods:{
            openCartModal(){
                const vm = this ; 
                vm.$bus.$emit('openCartPanel');
            }
        },
    }
</script>

<style>
    .z-index-15{
        z-index:15;
    }
    .box-logo{
        padding:5px;
        background-color:#231f20;
        color:white;
    }
    .cart-btn{
        position:relative;
        outline:none !important;
    }
    .cart-btn .badge{
        position:absolute;
        top:-5px;
        right:-5px;
    }
    .drop-down{
        position:relative;
    }
    .dropdown-menu{
        min-width:300px;
        right:0;
        left:auto;
    }
     .cart-block{
        width:250px;
        height:100vh;
        background-color:black;
    }
</style>
