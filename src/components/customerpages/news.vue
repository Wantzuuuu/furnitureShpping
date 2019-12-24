<template>
    <div>
        <div class="container-fluid">
            <div class="mt-7 py-5" style="min-height:70vh;">
                <h2 class="text-center acme">NEWS</h2>
                <div class="row justify-content-center">
                    <div class="col-12 col-md-7">
                        <div class="news-box">
                            <div class="news-img bg-cover d-flex align-items-center justify-content-center" style="background-image:url(https://images.unsplash.com/photo-1478401816585-2765d6824f95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1792&q=80);">
                                <div class="news-img-content">
                                    <div class="w-100 text-center">
                                        <h4>開幕慶祝</h4>
                                        <p>全館九折</p>
                                        <p>優惠碼</p>
                                        <h5>opening90</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang='scss'>
    .news-box{
        margin-top:10px;
        width:100%;
        background-color:grey;
        .news-img{
            width:100%;
            height:400px;
            .news-img-content{
                width:100%;
                height:100%;
                background-color:rgba(0,0,0,0.3);
                color:white;
                display:flex;
                justify-content:center;
                align-items:center;
                h4{
                    font-size:44px;
                }
                h5{
                    font-size:30px;
                }
                p{
                    font-size:20px;
                }
            }
        }
    }
</style>