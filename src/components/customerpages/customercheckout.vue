<template>
    <div>
        <div class="row justify-content-center">
                
                <div class="col-md-8">
                    <h3 class="mb-3 text-center">付款</h3>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="text-center alert alert-success" role="alert">
                                訂單資料填寫
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="text-center alert alert-success"  role="alert">
                                付款
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="text-center alert alert-dark"  role="alert">
                                完成訂單
                            </div>
                        </div>
                    </div>
                    <table class="table">
                        <thead>
                            <th colspan="2">
                                <h2 class="text-center">客戶資訊</h2>
                            </th>
                        </thead>
                        <tbody>
                            <tr>
                            <th width="120">Email</th>
                            <td>{{order.user.email}}</td>
                            </tr>
                            <tr>
                            <th>姓名</th>
                            <td>{{order.user.name}}</td>
                            </tr>
                            <tr>
                            <th>收件人電話</th>
                            <td>{{order.user.tel}}</td>
                            </tr>
                            <tr>
                            <th>收件人地址</th>
                            <td>{{order.user.address}}</td>
                            </tr>
                            <tr>
                            <th>付款狀態</th>
                            <td>
                                <span v-if="!order.is_paid">尚未付款</span>
                                <span v-else>付款完成</span>
                            </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="1" class='align-middle'>
                                    <a href="#">
                                        <i class="fas fa-angle-left"></i>
                                        返回購物車
                                    </a>
                                </td>
                                <td colspan="">
                                    <button @click="payOrder" class="btn btn-danger btn-block">付款</button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            
            </div>
    </div>
</template>
<script>
    import checkoutTable from '../customercomponents/checkoutTable';
    export default{
        data(){
            return {
                orderId:"",
                order:{
                    user:{}
                }
            }
        },
        components:{
            checkoutTable,
        },
        methods:{
            getOrder(){
                const vm = this ;
                const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order/${vm.orderId}`
                vm.$http.get(url).then((response)=>{
                    this.order = response.data.order;
                })
            },
            payOrder:function(){
            const vm = this;
            vm.isLoading = true;
            const url =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/pay/${vm.orderId}`;
            vm.$http.post(url).then((response)=>{
                console.log(response);
                if(response.data.success){
                    vm.getOrder();
                    vm.$router.push('/customer_website/checkout_success');
                }else{
                    this.$bus.$emit('messsage:push',response.data.message,'danger');
                }
                vm.isLoading=false;
          })
        }
        },
        created(){
            this.orderId = this.$route.params.orderId;
            console.log(this.orderId);
            this.getOrder();
        }
    }
</script>