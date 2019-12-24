<template>
    <div>
    <header>
        <div class="bg-cover i-header-img" style="background-image:url(https://images.unsplash.com/photo-1488901512066-cd403111aeb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2978&q=80)">
             <div class="header-box">
                <div class="title-box text-info">
                    <h1 class="text-center acme">ROCK FURNITURE</h1>
                    <h4 class="acme text-center">life is good</h4>
                </div>
            </div>
        </div>
    </header>
    <section class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-md-2">
                    <div class="lr m-auto">
                         <h2 id="s1Title" class="text-primary animated index-title">
                            「 從細微處 感受生活 」
                        </h2>
                    </div>
                    <div id="s1Line" class="index-line mb-4 animated delay-1s"></div>
                </div>
                <div class="col-md-10 mt-0">
                    <Carousel></Carousel>
                    <div class=" mt-3 d-flex flex-md-row flex-column align-items-center">
                        <div class="img-line"></div>
                        <h5 class="acme ml-0 ml-md-5">Experience Life</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
        <!-- living room-->
        <section class="py-3 mt-5">
           <div class="container">
                <div class="row">
                    <div class="col-md-6 order-md-2">
                        <img class="i-img" src="https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="">
                    </div>
                    <div class="col-md-6 order-md-1">
                        <div class="i-description d-flex align-items-center">
                            <div>
                                <div class="i-title my-4 my-md-0">
                                    <h1 class="i-number acme text-secondary">01</h1>
                                    <h1 class="acme text-secondary">LIVING ROOM</h1>
                                </div>
                                <h3 class="bg-light p-2">享受美好的悠閒時光</h3>
                                <p class="text-primary">
                                    每個人都有想要與自己相處的時候，暫時忘記現實的生活，坐在客廳裡的沙發，
                                    做自己喜歡的事情，享受悠閒的時光，也會有迎接親朋好友的時候，
                                    與朋友在舒適柔軟的沙發，聊天、喝下午茶，
                                    沙發就是您在客廳的依靠夥伴，
                                    此外，它還陪伴您紀錄生活的一點一滴，
                                    共同經歷您在家的一切。
                                    現在來找尋最適合您的沙發吧...
                                </p>
                                <router-link class="btn btn-outline-primary" to="/customer_website/products/沙發">更多</router-link>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </section>
        <!-- living room end-->
        <!--bedroom-->
        <section class="py-3 mt-3">
           <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <img class="i-img" src="https://images.unsplash.com/photo-1499916078039-922301b0eb9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" alt="">
                    </div>
                    <div class="col-md-6">
                        <div class="i-description d-flex align-items-center">
                            <div>
                                <div class="i-title my-4 my-md-0">
                                    <h1 class="i-number acme text-secondary">02</h1>
                                    <h1 class="acme text-secondary">BEDROOM</h1>
                                </div>
                                <h3 class="bg-light p-2">找尋屬於你在家裡的風景</h3>
                                <p class="text-primary">
                                    在房間的窗前，擺上一張椅子，無論外面的世界有多麽豐富精彩，只有在自己的房間裡，才能轉身拋開一切悠閒的坐在房間的椅子上，讓自己的內心得到真正的平靜，徹底的放鬆，展現在無拘無束的生活方式，在這裡找尋你想要的家具，來創造你內心想要的家吧...
                                </p>
                                <router-link class="btn btn-outline-primary" to="/customer_website/products/床">更多</router-link>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </section>
        <!--bedroom end-->
        <!-- bathroom-->
        <section class="py-3 mt-3">
           <div class="container">
                <div class="row">
                    <div class="col-md-6 order-md-2">
                        <img class="i-img" src="https://images.unsplash.com/photo-1521783593447-5702b9bfd267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1421&q=80" alt="">
                    </div>
                    <div class="col-md-6 order-md-1">
                        <div class="i-description d-flex align-items-center">
                            <div>
                                <div class="i-title my-4 my-md-0">
                                    <h1 class="i-number acme text-secondary">03</h1>
                                    <h1 class="acme text-secondary">BATHROOM</h1>
                                </div>
                                <h3 class="bg-light p-2">浴室是你放鬆的避風港</h3>
                                <p class="text-primary">
                                    浴室在生活裡佔有重要的一席之地，簡單更有效率的浴室規劃，不論是一天的開始，或者是在結束忙碌的一天，都是充電放鬆的好地方。 帶著工作完疲憊的勞累回家，相信每個人回家第一件想做的事，就是回家泡澡，透過泡澡帶走一整天的壓力跟疲憊，舒展身心。
                                </p>
                                <router-link class="btn btn-outline-primary" to="/customer_website/products/衛浴">更多</router-link>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </section>
        <!-- bathroom end-->
        <!-- find you style -->
            <section class="mt-3 py-3">
                <div class="container">
                    <div class="form-row">
                        <div class="col-md-9">
                            <div class="row justify-content-center">
                                <div class="col-md-7">
                                    <div class="i-description mb-3">
                                        <div class="i-title">
                                            <h1 class="i-number text-secondary acme">04</h1>
                                            <h1 class="acme text-secondary">FIND YOUR STYLE</h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="bg-cover find-image" style="background-image:url(https://images.unsplash.com/photo-1551516594-56cb78394645?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80)">
                                        <div class="find-block d-flex align-items-center justify-content-center">
                                            <router-link class="btn btn-outline-light" to="/customer_website/products/all">Shop Now</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div class="col-md-2 mt-4">
                            <div class="lr m-auto">
                                <h2 id="s2Title" class="text-primary animated index-title">
                                    「 我的家，就要有我的樣子 。 」
                                </h2>
                            </div>
                            <div id="s2Line" class="index-line mb-4 animated delay-1s"></div>
                        </div>
                    </div>
                </div>
            </section>
        <!-- find you style end-->

        <!--designer -->
        <section class="pt-5">
            <div class="bg-friendly py-3">
                <div class="container-fluid">
                    <div class="row  justify-content-center">
                        <div class="col-10 col-md-5 over-height">
                            <div class="designer-img bg-cover" style="background-image:url(https://images.unsplash.com/photo-1448376561459-dbe8868fa34c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)">
                                <h1 class="acme display-4 text-primary designer-name">Ab. LISA</h1>
                                <img class="p-intro-img ds-intro-1" src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="">
                            </div>
                        </div>
                        <div class="col-md-5 mt-2 mt-md-0">
                            <div class="h-100 d-flex align-items-center">
                                <div class="p-1 designer-content text-white">
                                    <h1 class="acme display-5">Modern-industrial</h1>
                                    <p class="mt-3">
                                        我喜歡90年代那種追求個性、自由的簡單風格，所以我花了很多時間細細品味那個年代的純真，帶點陳年舊味的皮革和鉚釘依然是工業風的經典，工業風兼具復古與當時人們想要積極進取的精神，看似過去歷史的氛圍，卻也代表著當時人們對未來的想像力，希望能透過這些家具，讓你們感受那段工業風個的歷史。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="my-lg-10">
            <div class="container d-lg-none">
                <div class="row justify-content-center">
                    <div class="col-10">
                        <h1 class="my-5 acme text-center text-primary border-bottom border-primary">Find Your Style-</h1>
                    </div>
                </div>  
                 <div class="row justify-content-end">
                    <div class="col-7">
                        
                    </div>
                </div>  
            </div>
            <div class="bg-friendly py-3">
                <div class="container-fluid">
                    <div class="row flex-md-row-reverse justify-content-center">
                        <div class="col-10 col-md-5 over-height">
                            <div class="designer-img designer-1 bg-cover" style="background-image:url(https://images.unsplash.com/photo-1542059765-24f1c00c1349?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80)">
                                <h1 class="acme display-4 text-primary designer-name">JJ. RICK</h1>
                                <img class="p-intro-img ds-intro-2" src="https://images.unsplash.com/photo-1544207240-4193795530ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1814&q=80" alt="">
                            </div>
                        </div>
                        <div class="col-md-5 mt-2 mt-md-0">
                            <div class="h-100 d-flex align-items-center">
                                <div class="p-1 designer-content text-white">
                                    <h1 class="acme display-5">Scandi design</h1>
                                    <p class="mt-3">
                                        透過低調的線條和室內光線來展現簡潔的家具外觀，運用大量的木質材料來展現濃郁後現代主義，極簡的北歐風回歸自然，崇尚原木韻味，外加現代、實用、休閒的設計風格，看似簡單，但你卻會感受到設計師對於小細節的要求與精工細作，透過北歐風來與你家中的格局達到你心中家的樣子吧。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--designer end-->

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
                target:0,
            }
        },
        methods:{
            getProducts(){
                const api =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products?all` //"https://vue-course-api.hexschool.io/api/joshwan/products"
                const vm = this;
                this.$http.get(api).then((response) => {
                    vm.products = response.data.products;
                    //  console.log(vm.products);
                    // console.log(response);
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
        created(){
            this.getProducts();
        },
        mounted(){
            const s1Title=$("#s1Title").offset().top;
            const s2Title=$("#s2Title").offset().top;
            $(window).scroll(()=>{
                 const scroll = $(window).scrollTop();
                 if(scroll >70){
                     $('.i-header-img').addClass("i-fix");
                 }else{
                      $('.i-header-img').removeClass("i-fix");
                 }
                if(scroll>s1Title-170){
                    $("#s1Title.index-title").addClass("fadeInDown");
                    $("#s1Line").addClass("fadeIn");
                }
                if(scroll>s2Title-170){
                    $("#s2Title.index-title").addClass("fadeInDown");
                    $("#s2Line").addClass("fadeIn");
                }
            })
        }
    }
</script>
<style lang="scss">
    $header-color:white;
    $box-background:rgba(255,255,255,0.8);
    $index-secondary:#ce8f5b;
    $index-info:#616976;
    .dancing{
        font-family: 'Reenie Beanie', cursive;
    }
    .lr{
        writing-mode: vertical-lr ;
    }
    .index-title{
        opacity:0;
    }
    .index-line{
        width:2px;
        height:100px;
        background-color:#666666;
        margin:auto;
        opacity:0;
    }
    .d-index-line{
        width:2px;
        height:100px;
        background-color:#666666;
        margin-right:0;
    }
    .img-line{
        width:80%;
        height:1px;
        background-color:#181818;
    }
    // header
    header{
        max-width:100%;
        overflow:hidden;
        .i-header-img{
        height:100vh;
        background-attachment:fixed;
        background-repeat: no-repeat;
        transition:all .3s ease;
        display:flex;
        align-items:center;
        transform:scale(1);
    }
    .i-header-img.i-fix{
        filter:blur(5px);
        transform: scale(1.05);
    }
    .header-box{
        color:$header-color;
        width:100%;
        .title-box{
            padding:15px;
            border:1px solid $header-color;
            background-color:$box-background;
            h1{
                font-size:66px;
            }
        }
    }
   @media (max-width:576px){
        .i-header-img{
            background-attachment:scroll;
                .header-box{
                    .title-box{
                    h1{
                        font-size:46px;
                    }
                }
            }
        }
   }
    }
   //living-room
    .i-description{
        height:100%;
        .i-title{
            padding-left:10px;
            border-left:5px solid  $index-secondary;
        .i-number{
            padding-left:5px;
            font-size:55px;
        }
    }
        p{
            font-size:18px;
        }
    }
   //living-room end
    .i-img{
        width:100%;
        height:450px;
    }
    @media(max-width:576px){
        .i-img{
            height:350px;
        }
    }
    //find your style
    .find-image{
        width:100%;
        height:350px;
        position:relative;
        .find-block{
            opacity:0;
            position:absolute;
            top:0;
            left:0;
            width:100%;
            height:100%;
            background-color:rgba(0,0,0,0.5);
            transition:all .3s ease;
        }
    }
    .find-image:hover .find-block{
        opacity:1;
    }
    // designer
     .designer-title{
         border-bottom:2px solid black;
     }
     .designer-img{
         position:relative;
         border:10px solid white;
         min-height:250px;
         width:100%;
         height:0;
         padding-bottom:100%;
         .designer-name{
             position:absolute;
             top:-32px;
             right:31px;
         }
         @media(max-width:576px){
            .designer-name{
             right:-51px;
         }
         }
         .p-intro-img{
             border:10px solid white;
             width:55%;
             height:50%;
             position:absolute;
             top:25%;
         }
         .ds-intro-1{
             left:-15%;
         }
         .ds-intro-2{
             right:-15%;
         }
     }
     .designer-content{
         p{
             font-size:17px;
         }
     }
     .over-height{
         margin-top:-80px;
         margin-bottom:-80px;
     }
     @media(max-width:992px){
         .over-height{
             display:flex;
        align-items:center;
         margin-top:0px;
         margin-bottom:0px
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
</style>