<template>
    <div>
        <div class="my-10">
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
                carts:[],
            }
        },
        methods:{
                getCart(){
                    const vm = this ; 
                    vm.$store.dispatch('updateLoading',true);
                    const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
                    vm.$http.get(url).then((response)=>{
                        vm.carts = response.data.data;
                        vm.$store.dispatch('updateLoading',false);
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