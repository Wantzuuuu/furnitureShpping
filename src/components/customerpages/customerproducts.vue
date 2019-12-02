<template>
    <div>
    <Loading :active.sync="isLoading"></Loading>
    <!--jumbertron 
        <div class="jumbotron jumbotron-fluid bg-cover text-white d-flex align-items-center mt-7" style="background-image:url(https://images.unsplash.com/photo-1521782462922-9318be1cfd04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80)">
            <div class="container">
                <div class="jumbotron-block p-3">
                    <h1 class="display-4 py-3">空間佈置靈感,讓您有一個美好的家</h1>
                    <p class="lead">讓您負擔少一點,生活品質更好！</p>
                </div>
            </div>
        </div>
    jumbertron end-->
    <div class="container">
        <header class="mt-7 bg-cover header-img" style="background-image:url(https://images.unsplash.com/photo-1465497250320-c0140afcea39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80)">
            <div class="header-card d-flex justify-content-center align-items-center">
                    <div>
                        <h1>KAMI</h1>
                        <p class="text-center">DESIGN</p>
                    </div>
            </div>
        </header>
    </div>
    <section>
        <div class="container">
            <div class="form-row mt-3">
                <!--list group-->
                <div class="col-md-3">
                    <div class="list-group sticky-top">
                        <h4 class="border p-3 mb-0">商品列表</h4>
                        <div class="list-group ">
                            <button @click="changeProduct('all')" :class="{'active':productTarget=='all'}" class="list-group-item   list-group-item-action"  style="outline:none;">全部</button>
                            <button v-for="(i,k) in category"  :class="{'active':productTarget==i}" :key="k" @click="changeProduct(i)" class="list-group-item  list-group-item-action"  style="outline:none;">{{i}}</button>
                        </div> 
                    </div>
                </div>
                <!--list group end-->
                <!--products-->
                <div class="col-md-9 mt-3 mt-md-0">
                    <div class="input-group search-input mb-3 flex-nowrap">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="addon-wrapping"><i class="fas fa-search"></i></span>
                        </div>
                        <input v-model="searchProduct" type="text" class="form-control" placeholder="search" aria-label="Username" aria-describedby="addon-wrapping">
                    </div>
                    <div class="form-row">
                        <productCard v-for="i in filterProduct" :productCard="i" @emitProduct="goDescription" @emitAddCart="addCart" :key="i.id"></productCard>
                    </div>
                    
                </div>
                <!--products end-->
                
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
                products:[],
                // pagination:{},
                category:[],
                productTarget:"",
                isLoading:false,
                searchProduct:"",
            }
        },
        methods:{
            getProducts(){
                const api =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all` //"https://vue-course-api.hexschool.io/api/joshwan/products"
                const vm = this;
                vm.isLoading = true; 
                this.$http.get(api).then((response) => {
                    vm.products = response.data.products;
                    // vm.pagination=response.data.pagination;
                    //  console.log(vm.products);
                    //  console.log(vm.pagination);
                    //  加入種類到category
                    vm.products.forEach((v)=>{
                        if(vm.category.indexOf(v.category)== -1){
                            vm.category.push(v.category);
                        }
                    })
                    // console.log(response);
                    vm.isLoading=false;
            }) ;
            },
            changeProduct(select){
                const vm = this;
                this.$router.push(`/customer_website/products/${select}`);
                this.productTarget=this.$route.params.category;
            },
            goDescription(id){
                const vm = this;
                    vm.$router.push(`/customer_website/product/${id}`)
            },
            addCart(id,qty=1){
                const vm = this;
                vm.isLoading=true;
                const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
                const cart = {
                    product_id: id,
                    qty:qty
                }
                console.log(cart);
                vm.$http.post(url,{data:cart}).then((response)=>{
                    console.log(response);
                    vm.$bus.$emit('updateCart');
                    vm.isLoading=false;
                    vm.$bus.$emit('openCartPanel');
                    // this.$bus.$emit('messsage:push',response.data.message,'danger');
                });
            },
        },
        computed:{
            filterProduct(){
                const vm = this;
                if(vm.productTarget=='all'){
                    if(vm.searchProduct==""){
                        return vm.products;
                    }else{
                        return vm.products.filter((v)=>{
                            return v.title.match(vm.searchProduct);
                        })
                    }
                    
                }else{
                    return vm.products.filter((v)=>{
                        return vm.productTarget == v.category;
                    })
                }
            }
        },
        created(){
            this.getProducts();
            this.productTarget=this.$route.params.category;
            this.$bus.$on('push:getProducts',()=>{
                this.getProducts();
            })
        }
    }
</script>

<style scope>
    .header-img{
        position:relative; 
        width:100%; 
        height:500px; 
    }
    .header-card{
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        width:400px;
        height:300px;
        background-color:#efe9e5;
    }
    @media(max-width:576px){
        .header-img{
           height:450px;
        }
        .header-card{
            width:300px;
            height:200px;
        }
    }
    .search-input{
        width:300px;
    }
</style>