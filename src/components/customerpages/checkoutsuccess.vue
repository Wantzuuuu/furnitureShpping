<template>
    <div class="mt-10">
        <div style="height:70vh;">
            <div class="container">
                <div class="mt-7 row bg-cover checkout-img align-items-center justify-content-center" style="background-image:url(https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80)">
                    <div class="col-6">
                        <div class="checkout-block">
                            <h1 class="mb-6 text-center text-primary">謝謝你的訂單</h1>
                            <router-link class="btn btn-primary btn-block btn-lg" to="/customer_website/products/all">繼續購物</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .checkout-img{
        height:496px;
    }
</style>