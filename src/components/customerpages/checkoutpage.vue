<template>
    <div>
        <div class="my-10">
            <div class="container">
                <checkoutTable :table="carts" @backCart="goBackCart"></checkoutTable>
                <hr>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>


<script>
import checkoutTable from '../customercomponents/carttable';
    export default{
        components:{
            checkoutTable,
        },
        methods:{
                getCart(){
                    const vm = this ; 
                    vm.$store.dispatch("getCart");
                },
                goBackCart(){
                    this.$router.push('/customer_website/cart')
                }
        },
        computed:{
            carts(){
                return this.$store.state.carts;
            }
        },
        created(){
            this.getCart();
        }
    }
</script>

<style lang="scss" scope>

</style>