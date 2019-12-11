<template>
    <div class="mt-7 py-5">
         <!-- section-1 -->
            <section id="section1">
                <div class="row no-gutters">
                    <div class="col-12 col-md-6">
                         <div 
                            style="">
                            <img width="100%" height="520px" class='animated index-img' src="https://images.unsplash.com/photo-1539693010221-cd218dfe6565?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="">
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
                    <div class="col-md-6 order-md-2 order-1" 
                        style="">
                        <img class="animated index-img" width="100%" height="260px" src="https://images.unsplash.com/photo-1560185127-6d2eb05d7088?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="">
                    </div>
                </div>
            </section>
        <!-- section1 end -->
    </div>
</template>

<script>
    import $ from "jquery";
    export default{
        data(){
            return {
                target:0,
            }
        },
        methods:{
             scrollAnimate(){
                const scrollHeight = $(window).scrollTop();
                // console.log(scrollHeight);
                // const target = parseInt($("#section1").offset().top);
                if(scrollHeight >= this.target-100){
                    setTimeout(function(){
                        $(".index-img").addClass("fadeIn");
                    },600)
                    $(".text-up").css({'opacity':'1'})
                    $(".text-up").addClass("fadeIn");
                }
            }
        },
        mounted(){
            this.target=parseInt($("#section1").offset().top);
            $(window).on('scroll',()=>{
                this.scrollAnimate();
            })
        }
    }
</script>
<style>
.bg-bottom{
        background-size:cover;
        background-position:center bottom;
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
</style>