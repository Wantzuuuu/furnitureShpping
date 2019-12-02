<template>
    <div>
    <Loading :active.sync="isLoading"></Loading>
    <header class="mt-7">
         <Carousel></Carousel>
    </header>
        <!-- news -->
        <section class="py-7 bg-light">
            <div class="container">
                    <div style="position:relative">
                        <h3 class="mb-4 text-center acme">NEWS</h3>
                        <div class="row">
                                <div class="col-md-6 mb-3">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <h5 class="mb-4">12月以前免運費</h5>
                                            <small>2019-11-20</small>
                                            <p>只要在furniture消費達20000，免費運送到你家。 …</p>
                                            <router-link to="/customer_website/news">
                                                <button class="news-btn">read more</button>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="card h-100">
                                        <div class="card-body">
                                            <h5 class="mb-4">慶祝開幕，全館九折優惠</h5>
                                            <small>2019-11-20</small>
                                            <p>慶祝furniture11月開幕，全館家具打九折 …</p>
                                            <router-link to="/customer_website/news">
                                                <button class="news-btn">read more</button>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
            </div>
        </section>
        <!-- news end-->

        <!-- section-1 -->
            <section id="section1">
                <div class="row no-gutters">
                    <div class="col-12 col-md-6">
                         <div class="bg-cover animated index-img"
                            style="width:100%; height:520px;  background-image:url(https://images.unsplash.com/photo-1539693010221-cd218dfe6565?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);">
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="index-card h-100">
                            <div class="row no-gutters h-100">
                                <div class="col-md-6 order-md-2">
                                    <div class="img-size bg-cover"
                                        style="background-image:url(https://images.unsplash.com/photo-1573104049264-5324ea0027d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80)">
                                    </div>
                                </div>
                                <div class="col-md-6 order-md-1">
                                    <div class=" p-card  d-flex align-items-center">
                                        <div>
                                            <h3 class="mb-3 animated text-up">檜木小圓桌</h3>
                                            <p class="mb-1 d-block text-muted animated text-up">
                                                圓潤的桌型與質樸溫潤的實木桌腳，覆上木質桌面，提升運用空間的色彩。整體形構，有層次感，可作為客廳邊桌、茶几、咖啡桌等使用。
                                            </p>
                                            <router-link class="more-btn mt-4 animated text-up" to="/customer_website/products/桌子"><button class="more-btn mt-4">more</button></router-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 order-md-3">
                                    <div class="img-size bg-cover"
                                        style="background-image:url(https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)">
                                    </div>
                                </div>
                                <div class="col-md-6 order-md-4">
                                    <div class=" p-card  d-flex align-items-center">
                                        <div>
                                            <h3 class="mb-3 animated text-up">露西沙發</h3>
                                            <p class="mb-1 d-block text-muted animated text-up">
                                                線條俐落，可依照個人喜好和空間需求靈活搭配，不管是座椅數、沙發布套、扶手、靠墊都有多種選擇；極佳支撐力的獨立筒椅墊，部分款式附儲物空間或可是可以變成沙發床，風格和舒適度兼具。
                                            </p>
                                            <router-link class="more-btn mt-4 animated text-up" to="/customer_website/products/沙發"><button class="more-btn mt-4">more</button></router-link> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row no-gutters">
                    <div class="col-md-6 order-md-1 order-2">
                        <div class="index-card h-100">
                            <div class="row no-gutters h-100">
                                
                                <div class="col-md-6 order-md-1">
                                    <div class="img-size bg-bottom"
                                        style="background-image:url(https://images.unsplash.com/photo-1567002260451-50e05a6b031a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80)">
                                    </div>
                                </div>
                                <div class="col-md-6 order-md-2 ">
                                    <div class=" p-card  d-flex align-items-center">
                                        <div>
                                            <h3 class="mb-3 animated text-up">適合兩人的優雅浴室</h3>
                                            <p class="mb-1 d-block text-muted animated text-up">
                                                精心佈置且充滿個人特色的浴室，不論是一天的開始，或者是在結束忙碌的一天，都是充電放鬆的好地方。
                                                讓浴室成為你和孩子一起整理儀容準備出門、放鬆身心的地方。
                                            </p>
                                            <router-link class="more-btn mt-4 animated text-up" to="/customer_website/products/衛浴"><button class="more-btn mt-4">more</button></router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            
                    </div>
                    <div class="col-md-6 bg-cover order-md-2 order-1 animated index-img" 
                        style="height:260px; width:100%; background-image:url(https://images.unsplash.com/photo-1560185127-6d2eb05d7088?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)">
                    </div>
                </div>
            </section>
        <!-- section1 end -->
         <!--section2-->
        <section  class="py-7 text-white" style="background-color:#616976;">
            <div class="container-fluid">
                 <div class="row">
                <div class="col-md-4 col-6">
                    <div class="intro-box  text-center">
                        <div class="icon py-3 ">
                             <i class="fas fa-shipping-fast fa-5x"></i>
                        </div>
                            <h5>超快速度</h5>
                            <p>72小時內迅速到你家</p>
                    </div>
                </div>
                <div class="col-md-4 col-6">
                    <div class="intro-box  text-center">
                        <div class="icon py-3 ">
                            <i class="fas fa-people-carry fa-5x"></i>
                        </div>
                            <h5>專人到你家</h5>
                            <p>您的家具,安全到你家</p>
                        </div>
                </div>
                <div class="col-md-4 col-12">
                    <div class="intro-box  text-center">
                        <div class="icon py-3 ">
                            <i class="fas fa-wrench fa-5x"></i>
                        </div>
                        <h5>專業組裝</h5>
                        <p>專人替您組裝</p>
                    </div>
                </div>
            </div>
            </div>
        </section>
        <!--section2 end-->
        <!--section3-->
        <section class="section-3">
            <div class="container-fluid">
                <div class="row no-gutters justify-content-center row-position " style="">
                   <div class=" d-none d-md-inline col-5 designer-block h-100"
                        style="background-image:url(https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80);">
                        <div class="designer-block-filter"></div>
                    </div>
                    <div class="col-12 col-md-8" style="position:relative">
                        <h1 class="text-center acme d-md-none">DESIGNER</h1>
                        <div class="designer-title d-none d-md-block ">DESIGNER</div>
                        <div class="form-row h-100 align-items-center">
                                <div class="col-md-4 mb-md-7">
                                    <div class="designer-box">
                                        <img width="100%" height="450px" src="https://images.unsplash.com/photo-1550422086-b9589ec2d371?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80" alt="design">
                                        <div class="d-line"></div>
                                        <h1 class="text-center acme">DJ LISA</h1>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="designer-box">
                                        <img width="100%" height="450px" src="https://images.unsplash.com/photo-1555663502-38545102d419?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="design">
                                        <div class="d-line"></div>
                                        <h1 class="text-center acme">MIKE HART</h1>
                                    </div>
                                </div>
                                <div class="col-md-4 mt-md-7">
                                    <div class="designer-box">
                                        <img width="100%" height="450px" src="https://images.unsplash.com/photo-1545967174-91cbc55b36e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80" alt="design">
                                        <div class="d-line"></div>
                                        <h1 class="text-center acme">CC. RICK</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
        <!--section3 end-->
    </div>
</template>
<script>
import Carousel from "./carousel";
import productCard from "../customercomponents/productcard";
import $ from "jquery";
    export default{
        name:"index",
        components:{
            Carousel,
            productCard,
        },
        data(){
            return{
                products:[],
                isLoading:false,
            }
        },
        methods:{
            getProducts(){
                const api =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products?all` //"https://vue-course-api.hexschool.io/api/joshwan/products"
                const vm = this;
                vm.isLoading = true;
                this.$http.get(api).then((response) => {
                    vm.products = response.data.products;
                    //  console.log(vm.products);
                    // console.log(response);
                    vm.isLoading=false;
            }) ;
            },
            goDescription(id){
                const vm = this;
                const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`;
                vm.$http.get(url).then((response)=>{
                    const product=response.data.product;
                    const id = product.id;
                    console.log(id);
                    vm.$router.push(`/customer_website/product/${response.data.product.id}`)
                })
            },
            scrollAnimate(){
                const scrollHeight = $(window).scrollTop();
                // console.log(scrollHeight);
                // const target = parseInt($("#section1").offset().top);
                if(scrollHeight >= 900){
                    setTimeout(function(){
                        $(".index-img").addClass("fadeIn");
                    },600)
                    $(".text-up").css({'opacity':'1'})
                    $(".text-up").addClass("fadeIn");
                }
            }
        },
        computed:{
            newProduct(){
                const vm =this;
                const newProduct = [];
                for(let i =0;i<3;i++){
                    newProduct.push(vm.products[i])
                }
                return newProduct;
            }
        },
        mounted(){
            $(window).on('scroll',()=>{
                this.scrollAnimate();
            })
        },
        created(){
            this.getProducts();
        }
    }
</script>
<style lang="scss">
    .designer-box{
        .d-line{
            width:2px;
            height:100px;
            background-color:black;
            margin-top:10px;
            margin-left:auto;
            margin-right:auto;
        }
    }
</style>
<style>
.acme{
    font-family: 'Ibarra Real Nova', serif;
}
    .bg-cover{
    background-size:cover;
    background-position:center center;
}
    .bg-bottom{
        background-size:cover;
        background-position:center bottom;
    }
/* header*/

.news-btn {
    display:inline-block;
    width: 125px;
    height: 40px;
    border-color: #181818;
    background-color:white;
}
.news-btn:hover{
    background-color: #181818;
    color:rgb(210, 208, 208);
}
/* section1 */
.p-card{
    height:260px;
    padding:30px;
}
.more-btn{
    width:150px;
    height:40px;
    background-color:#181818;
    color:white;
}
.more-btn:hover{
    filter:brightness(1.3);
}

.img-size{
    width:100%;
    height:100%;
}
@media (max-width:768px){
    .img-size{
        width:100%;
        height:260px;
    }
}
.index-img, .text-up{
    opacity:0;
}


/* section3 */
.section-3{
    padding:70px 0;
}
.row-position{
    position:relative;
}
.designer-title{
    writing-mode: vertical-rl;
    font-size:90px;
    position:absolute;
    top:100px;
    left:-150px;
}

.designer-block{
    position:absolute;
    right:1px;
    top:1px;
    background-size:cover;
    background-position:center center;
    
}
.designer-block-filter{
    position:absolute;
    top:0;
    left:0;
    background-color:rgba(162, 162, 162, 0.515);
    filter:blur(10px);
    width:100%;
    height:100%;
}
</style>