<template>

    <div class="col-md-6">
        <div class="product-box">
            <!--responsive-->
            <a class="d-md-none d-block" href="#" @click.prevent="goDescription(productCard.id)">
                <div class="product-img" :style="{backgroundImage:'url('+productCard.imageUrl+')'}">
                    <div class="product-img-block">
                        <div class="d-flex h-100 align-items-center justify-content-center p-3">                
                        </div>
                    </div>
                </div>
            </a>
            <!--responsive end-->
                <div class="product-img d-none d-md-block" :style="{backgroundImage:'url('+productCard.imageUrl+')'}">
                    <div class="product-img-block">
                        <div class="d-flex h-100 align-items-center justify-content-center p-3">
                            <div>
                                <p class="text-white">{{productCard.description}}</p>
                                <div class="text-center">
                                    <button @click="goDescription(productCard.id)" class="btn btn-sm btn-outline-white">更多</button>
                                </div>  
                            </div>                  
                        </div>
                    </div>
                    <button v-if="!productState" @click="addCart(productCard.id)" class="product-btn">
                        加入購物車
                    </button>
                     <button v-if="productState" class="product-btn">
                        <i class="fas fa-spinner fa-spin"></i>
                    </button>
                </div>
            <div class=" product-content  text-primary">
                <h6>{{productCard.title}}</h6>
                    <div class="">
                        <span v-if="productCard.price==productCard.origin_price" class="h5">{{productCard.origin_price | currency}}</span>
                        <del v-if="productCard.price!=productCard.origin_price" class="h5 text-muted">{{productCard.origin_price | currency}}</del>
                        <span v-if="productCard.price!=productCard.origin_price" class="h5 text-danger">{{productCard.price | currency}}</span>
                    </div>
            </div>
        </div>
        </div>
</template>

<script>
    export default{
        props:['productCard','productState'],
        methods:{
            goDescription(id){
                const vm = this;
                vm.$emit("emitProduct",id);
            },
            addCart(id,qty=1){
                const vm = this;
                vm.$emit('emitAddCart',id,qty);
            }
        }
    }
</script>