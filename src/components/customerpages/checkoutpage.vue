<template>
    <div>
        <Loading :active.sync="isLoading"></Loading>
        <div class="mt-7">
            <div class="container">
                <checkoutTable :table="carts"></checkoutTable>
                <hr>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>


<script>
import checkoutTable from '../customercomponents/checkoutTable';
    export default{
        components:{
            checkoutTable,
        },
        data(){
            return {
                isLoading:false,
                carts:[],
            }
        },
        methods:{
                getCart(){
                    const vm = this ; 
                    vm.isLoading=true;
                    const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
                    vm.$http.get(url).then((response)=>{
                        vm.carts = response.data.data;
                        vm.isLoading = false;
                    })
                },
        },
        created(){
            this.getCart();
        }
    }
</script>

<style lang="scss" scope>

</style>