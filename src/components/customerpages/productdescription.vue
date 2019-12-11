<template>
    <div>
        <section class="mt-7 py-5 pt-2">
             <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <img width="100%" class="dc-img" :src="product.imageUrl" alt="">
                    </div>
                    <div class="col-md-4">
                        <div class="p-3 sticky-top z-index-9">
                            <h3>{{product.title}}</h3>
                            <hr>
                            <p>{{product.description}}</p>
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
                                    <button v-if="!state.addState"  @click="addCart(product.id,qty)" class="btn btn-block btn-primary">
                                        <div class="d-inline">加入購物車</div>
                                    </button>
                                     <button v-if="state.addState"class="btn btn-block btn-primary">
                                         <i class="fas fa-spinner fa-spin"></i>
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
             <hr>
             <div class="container">
                <h3 class="text-center">類似商品</h3>
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
                isLoading:false,
                state:{
                    addState:false,
                },
                qty:1,
                test:'',
                products:[],
            }
        },
        methods:{
            getProduct(){
                const vm = this ;
                vm.isLoading=true;
                const url =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${this.productId}`;
                vm.$http.get(url).then((response)=>{
                    vm.product = response.data.product;
                    // console.log(vm.product);
                    vm.isLoading=false;
                })                
            },
            getProducts(){
                const api =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all` //"https://vue-course-api.hexschool.io/api/joshwan/products"
                const vm = this;
                vm.isLoading = true; 
                this.$http.get(api).then((response) => {
                    vm.products = response.data.products;
                    // vm.pagination=response.data.pagination;
                     console.log(vm.products);
                    vm.isLoading=false;
            }) ;
            },
            goDescription(id){
                const vm = this;
                console.log(id);
                vm.$router.push({path:`${id}`});
                vm.productId = vm.$route.params.productId;
                vm.getProduct();
            },
            goBack(){
                this.$router.go(-1);
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
                vm.state.addState=true;
                if(qty < 1){
                    qty = 1;
                    this.qty = qty;
                }else{
                    qty = qty;
                }
                const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
                    const cart = {
                        product_id: id,
                        qty:qty
                    }
                    // console.log(cart);
                    vm.$http.post(url,{data:cart}).then((response)=>{
                        // console.log(response);
                        vm.$bus.$emit('updateCart');
                        vm.state.addState=false;
                    });
            },
        },
        computed:{
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
</style>