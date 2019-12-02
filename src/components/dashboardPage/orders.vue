<template>
  <div>
  <Loading :active.sync="isLoading"></Loading>
    <table class="table">
        <thead>
          <th>Email</th>
          <th width="80">名子</th>
          <th width="200">地址</th>
          <th>電話</th>
          <th>金額</th>
          <th>付款狀態</th>
        </thead>
        <tbody>
          <tr v-for="i in orders" :key="i.id">
            <td>{{i.user.email}}</td>
            <td>{{i.user.name}}</td>
            <td>{{i.user.address}}</td>
            <td>{{i.user.tel}}</td>
            <td>{{i.total |currency}}</td>
            <td><span v-if="i.is_paid">已付款</span><span v-else>未付款</span></td>
            <td>
             <ul class="list-unstyled">
               <li v-for="(product, i) in i.products" :key="i">
                 {{ product.product.title }} 數量：{{ product.qty }}
                 {{ product.product.unit }}
               </li>
             </ul>
           </td>
          </tr>
        </tbody>    
    </table>
  </div>
</template>

<script>
export default {
  name: 'Orders',
  data () {
    return {
        orders :[],
        isLoading:false,
    }
  },
  methods:{
      getOrders (){
        //   orders api
          const api =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/orders`
          const vm = this;
          vm.isLoading=true;
          vm.$http.get(api).then((response)=>{
              vm.orders=response.data.orders;
              vm.isLoading=false;
          });
      },
      // updateOrder(id){
      //   console.log('click');
      //   console.log(id);
      //   const vm = this;
      //   const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/order/${id}`
      //  vm.$http.put(url).then((response)=>{
      //         console.log(response);
      //     });
      // }
  },
  created(){
      this.getOrders();
  }
}
</script>

