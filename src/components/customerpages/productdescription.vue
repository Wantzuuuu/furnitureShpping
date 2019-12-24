<template>
    <div>
        <section class="mt-7 py-5 pt-2">
             <div class="container">
                <div class="row mb-5">
                    <div class="col-md-7" style="position:relative">
                        <img width="100%" class="dc-img" :src="product.imageUrl" alt="">
                        <a class="a-link" @click.prevent="goBack" href="#">
                            <i class="fas fa-chevron-left"></i>
                            back
                        </a>
                    </div>
                    <div class="col-md-5">
                        <div class="p-3 sticky-top z-index-9">
                            <h3 class="text-primary">{{product.title}}</h3>
                            <hr>
                            <h5 class="text-primary">商品介紹</h5>
                            <p class="text-primary pl-1">{{product.description}}</p>
                            <h5 v-if="product.content" class="text-primary mt-4">商品備註</h5>
                            <p class="text-primary pl-1">{{product.content}}</p>
                            <div class="d-flex">
                                <del class="text-muted">NT.{{product.origin_price | currency}}</del>
                                <span class="ml-auto h4 text-danger">NT.{{product.price | currency}}</span>
                            </div>
                            <div class="row no-gutters">         
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <button @click="addCount(0)" class="btn btn-outline-primary" type="button">-</button>
                                        </div>
                                        <input v-model.number="qty" type="number" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
                                        <div class="input-group-append">
                                            <button @click="addCount(1)" class="btn btn-outline-primary" type="button">+</button>
                                        </div>
                                    </div>
                                    <button v-if="!addState"  @click="addCart(product.id,qty)" class="btn btn-block btn-primary">
                                        <div class="d-inline">加入購物車</div>
                                    </button>
                                     <button v-if="addState"class="btn btn-block btn-primary">
                                         <i class="fas fa-spinner fa-spin"></i>
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
             <hr>
             <div class="container">
                <h3 class="text-center text-primary">類似商品</h3>
                <div class="form-row">
                    <productCard v-for="i in sameProduct" :productCard="i" @emitProduct="goDescription" @emitAddCart="addCart" :key="i.id"></productCard>
                </div>
             </div>
        </section>
   
    </div>
</template>
<script>
    import productCard from "../customercomponents/productcard"
    export default{
        components:{
            productCard,
        },
        data(){
            return{
                productId:'',
                product:{},
                qty:1,
            }
        },
        methods:{
            getProduct(){
                const vm = this ;
                vm.$store.dispatch('updateLoading',true);
                const url =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${this.productId}`;
                vm.$http.get(url).then((response)=>{
                    vm.product = response.data.product;
                    // console.log(vm.product);
                    vm.$store.dispatch('updateLoading',false);
                })                
            },
            getProducts(){
                this.$store.dispatch("getProducts");
            },
            goDescription(id){
                const vm = this;
                console.log(id);
                vm.$router.push({path:`${id}`});
                vm.productId = vm.$route.params.productId;
                vm.getProduct();
            },
            goBack(){
                this.$router.push("/customer_website/products/all");
            },
            addCount(num){
                let qty=this.qty;
                if(num==1 && this.qty>=1){
                    this.qty=qty+1;
                }
                if(num==0 && this.qty>=2){
                    this.qty=qty-1;
                }
            },
            addCart( id,qty=1){
                const vm = this;
                if(qty < 1){
                    qty = 1;
                    this.qty = qty;
                }else{
                    qty = qty;
                }
                this.$store.dispatch("addCart",{id,qty}) ; 
            },
        },
        computed:{
            products(){
                return this.$store.state.products;
            },
             addState(){
                return this.$store.state.productState.addState;  
            },
            sameProduct(){
                const sameProduct = [];
                const product= this.product
                this.products.forEach(item=>{
                    if(product.id!=item.id && product.category==item.category){
                        sameProduct.push(item);
                    }
                })
                return sameProduct;
            }
        },
         created(){
            this.productId = this.$route.params.productId;
            this.getProduct();
            this.getProducts();
            console.log(this.$rote.params);
        }
    }
   
</script>

<style>
    .z-index-9{
        z-index:9;
    }
    .dc-img{
        height:500px;
    }
    @media(max-width:576px){
        .dc-img{
            height:350px;
        }
    }
    .a-link{
        position:absolute;
        left:0px;
        bottom:-25px;
    }
    @media(max-width:768px){
        .a-link{
            display:none;
        }
    }
    .a-link:hover{
        text-decoration:none;
    }
</style>