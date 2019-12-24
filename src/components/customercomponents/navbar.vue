<template>
    <div>
        <!--
        <nav :class="navClass" class="navbar navbar-light navbar-expand-lg fixed-top z-index-15">
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
        </nav> -->
        <!-- --------------------------------------------- -->
        <nav :class="navClass" class="index-navbar">
            <div @click="openNav" class="nav-btn">
                <i class="fas fa-bars fa-2x hamberger"></i>
                <i class="fas fa-times fa-2x cross"></i>
            </div>
            <router-link  to="/customer_website/index">
                    <div @click="navState='首頁'" class="box-logo">Furniture</div>
            </router-link>
            <div class="navbar-list ml-auto">
                <ul class="pl-0 mb-0">
                    <li @click="navState='首頁'" :class="{'active': navState == '首頁'}">
                        <router-link to="/customer_website/index">
                            首頁
                        </router-link>
                    </li>
                    <li @click="navState='商品'" :class="{'active': navState == '商品'}">
                        <router-link to="/customer_website/products/all">
                            商品
                        </router-link>
                    </li>
                    <li @click="navState='最新消息'" :class="{'active': navState == '最新消息'}">
                        <router-link  to="/customer_website/news">
                            最新消息
                        </router-link>
                    </li>
                </ul>
            </div>
            <button v-if="!isCheckout"  @click="openCartModal" class="cart-btn ml-2">
                <span v-if="navbarLen != 0" class="badge badge-danger">{{navbarLen}}</span>
                <i class="fas fa-shopping-cart"></i>
            </button>
        </nav>
    </div>
</template>
<script>
import $ from "jquery";

    export default{
        props:["navbarLen","navbarPath","navPath","isCheckout"],
        watch:{
            navbarPath(){
                if(this.navbarPath){
                if(this.navPath){
                    this.navClass["navbar-text-light"]=true;
                    this.navClass["navbar-text-dark"]=false;
                }else{
                     this.navClass["navbar-text-light"]=false;
                    this.navClass["navbar-text-dark"]=true;
                }
            }
            }
        },
        data(){
            return {
                path:"",
                navState:"",
                navClass:{
                    "navbar-text-light":true,
                    "navbar-text-dark":false,
                }
            }
        },
        methods:{
            openCartModal(){
                const vm = this ; 
                vm.$bus.$emit('openCartPanel');
            },
            openNav(){
                $(".index-navbar").toggleClass('active');
            }
        },
        created(){
            if(!this.navPath){
                this.navClass['navbar-text-light']=false;
                this.navClass['navbar-text-dark']=true;
            }
        },
        computed:{
        },
        mounted(){
            $(window).scroll(()=>{
                $('.index-navbar').removeClass('active');
                const scroll =$(window).scrollTop();
                if(scroll >70){
                    $(".index-navbar").addClass("i-fix");
                }else{
                   $(".index-navbar").removeClass("i-fix");
                }
            })
        },
    }
</script>

<style lang='scss' scope>
* {
    box-sizing: border-box;
    ul{
        list-style: none;
    }
}
$navbar-bg:rgba(244, 240, 240, 0.1);
$i-fix-navbar-bg:rgba(244, 240, 240, 1);
$navbar-phone-bg:rgba(22, 22, 22, 0.8);
.index-navbar{
    z-index:14;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:60px;
    background-color:$navbar-bg;
    padding:10px 20px;
    display:flex;
    align-items:center;
    border-bottom:1px solid white;
    transition:all .3s ease;
    .nav-btn{
        display:none;
        i.hamberger{
            display:block;
        }
        i.cross{
            display:none;
        }
    }
        .box-logo{
            width:100px;
            padding:5px;
            background-color:#231f20;
            color:white;
            font-size:19px;
            text-align:center;
            text-decoration: none; 
        }
        .navbar-list{
            ul{
                display:flex;
                li{
                    margin-left:20px;
                    a{
                        font-size:15px;
                        text-decoration: none; 
                    }
                }
            }
        }
        button{
            outline:none;
        }
        .cart-btn{
            position:relative;
            width:40px;
            height:40px;
            background:none;
            border:none;
            .badge{
                position:absolute;
                top:-5px;
                right:-5px;
            }
            i{
                font-size:17px;
                color:#181818;
            }
        }
}
.index-navbar.i-fix{
    background-color:$i-fix-navbar-bg;
}
@media(max-width:576px){
    .index-navbar.i-fix{

        .navbar-list{
            background-color:$i-fix-navbar-bg;
        }
    }
    .index-navbar.active.i-fix{
        color:#666666;
        background-color:$i-fix-navbar-bg;
    }
    .index-navbar{
        justify-content:space-between;
        .nav-btn{
            display:inline-block;
        }
        .navbar-list{
            display:none;
            width:100%;
            background-color:$navbar-phone-bg;
            position:absolute;
            top:60px;
            left:0;
            padding:10px 10px;
            height:100vh;
            transition:all .3s ease;
            ul{
                flex-direction: column ;
                li{
                    text-align:center;
                    margin-bottom:10px;
                    a{
                        font-size:24px;
                    }
                }
            }
        }
    }
    .index-navbar.active{
        background-color:$navbar-phone-bg;
        border-bottom:none;
        color:white;
        .nav-btn{
            i.hamberger{
                display:none;
            }
            i.cross{
                display:block;
            }
        }
        .navbar-list{
            display:block;
        }
    }
}
.navbar-text-dark{
    .navbar-list{
        li{
            a{
                color:rgba(102, 102, 102,0.7);
            }
        }
        li:hover{
            a{
                color:rgba(102, 102, 102,1);
            }
        }
        li.active{
            a{
                color:rgba(102, 102, 102,1);
            }
        }
    }
}
.navbar-text-dark.active{
    .navbar-list{
        li{
            a{
                color:rgba(255, 255, 255,0.7);
            }
        }
        li:hover{
            a{
                color:rgba(255, 255, 255,1);
            }
        }
        li.active{
            a{
                color:rgba(255, 255, 255,1);
            }
        }
    }
}
.navbar-text-dark.active.i-fix{
    .navbar-list{
        li{
            a{
                color:rgba(102, 102, 102,0.7);
            }
        }
        li:hover{
            a{
                color:rgba(102, 102, 102,1);
            }
        }
        li.active{
            a{
                color:rgba(102, 102, 102,1);
            }   
        }
    }
}
.navbar-text-light{
    .navbar-list{
        li{
            a{
                color:rgba(255, 255, 255,0.7);
            }
        }
        li:hover{
            a{
                color:rgba(255, 255, 255,1);
            }
        }
        li.active{
            a{
                color:rgba(255, 255, 255,1);
            };
        }
    }
}
.navbar-text-light.i-fix{
    .navbar-list{
        li{
            a{
                color:rgba(102, 102, 102,0.7);
            }
        }
        li:hover{
            a{
                color:rgba(102, 102, 102,1);
            }
        }
        li.active{
            a{
                color:rgba(102, 102, 102,1);
            }
        }
    }
}
</style>
