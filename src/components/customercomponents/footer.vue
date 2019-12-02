<template>
    <div>
        <!--footer-->
        <footer class=" bg-info footer">
            <div class="container">
                <div class="row">
                    <div class="col-6 col-md-4">
                        <div class="d-flex justify-content-center">
                            <div>
                                <h5 class="acme">ABOUT</h5>
                                <ul class="foot-ul text-white">
                                    <li><router-link to="/customer_website/index">首頁</router-link></li>
                                    <li><router-link to="/customer_website/products/all">購買商品</router-link></li>
                                    <li><router-link to="/customer_website/news">常見問題</router-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                     <div class="col-6 col-md-4">
                        <div class="d-flex justify-content-center">
                            <div>
                                <h5 class="acme">CONTACT</h5>
                                <ul>
                                    <li><span class="mr-3"><i class="far fa-envelope"></i></span>abc@gmail.co</li>
                                    <li><span class="mr-3"><i class="fas fa-phone"></i></span>(02)12345678</li>
                                    <li><span class="mr-3"><i class="fas fa-home"></i></span>台北市</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mt-3 mt-md-0">
                            <div class="d-flex align-items-center justify-content-center">
                                <div>
                                    <h5 class="acme d-none d-md-block">COMMUNITY</h5>
                                    <div class=" w-100 f-link">
                                        <div>
                                            <router-link to="#"><i class="fab fa-facebook-square fa-3x"></i></router-link>
                                            <router-link to="#"><i class="fab fa-instagram fa-3x"></i></router-link>
                                            <router-link to="#"><i class="fab fa-twitter fa-3x"></i></router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div class="text-center mt-2">@2019 by WAN</div>
            </div>
        </footer>
        <!--footer end-->
    </div>
</template>

<style lang="scss">
    /*footer */
.footer{
    color:white;
    padding-top:35px;
    padding-bottom:15px;
}
.footer a{
    color:white;
    text-decoration:none;
}
.footer ul{
    list-style: none;
    padding-left:0px;
}
.f-link a{
    margin-right:15px;
}
/*footer end*/
</style>