<template>
  <div>
  <Loading :active.sync="isLoading"></Loading>
    <div class="text-right mt-4">
      <button @click="openModal(true)" class="btn btn-primary">新增優惠卷</button>
    </div>
    <!--table-->
    <table class="table">
      <thead>
        <th>折扣碼名稱</th>
        <th>折扣碼</th>
        <th width="120">折扣趴數</th>
        <th >到期日</th>
        <th width="120">啟用</th>
        <th width="140">編輯</th>
      </thead>
      <tbody>
        <tr v-for="i in coupons" :key="i.id">
          <td>{{i.title}}</td>
          <td>{{i.code}}</td>
          <td >{{i.percent}}%</td>
          <td>{{i.due_date | date}}</td>
          <td>
            <span v-if="i.is_enabled==1">啟用</span>
            <span v-else>啟用</span>
          </td>
          <td>
          <div class="btn-group btn-group-sm">
               <button @click="openModal(false,i)" class="btn btn-outline-primary">編輯</button>
               <button @click="removeCoupon(i.id)" class="btn btn-outline-danger">刪除</button>
          </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Modal -->
    <div class="modal fade" id="couponModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="couponTitle">優惠卷名稱</label>
                <input v-model="tempCoupon.title" id="couponTitle" placeholder="請輸入優惠卷名稱" type="text" class="form-control">
              </div>
              <div class="from-group">
                <label for="code">折扣碼</label>
                <input v-model="tempCoupon.code" id="code" placeholder="請輸入折扣瑪" type="text" class="form-control">
              </div>
              <div class="from-group">
                <label for="due_date">到期日</label>
                <input v-model="due_date" id="due_date" placeholder="請輸入到期日" type="date" class="form-control">
              </div>
              <div class="form-group">
               <label for="price">折扣百分比</label>
               <input type="number" class="form-control" id="price"
                 v-model.number="tempCoupon.percent" placeholder="請輸入折扣百分比">
             </div>
              <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox"
                      :true-value="1"
                      :false-value="0"
                      v-model="tempCoupon.is_enabled" id="is_enabled">
                    <label class="form-check-label" for="is_enabled">
                      是否啟用
                    </label>
                  </div>
                </div>
            </form>
          </div>
          <div class="modal-footer">
            <button @click="updateCoupon" type="button" class="btn btn-primary">確認</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'coupon',
  data () {
    return {
      due_date:new Date(),
      coupons:[],
      isLoading:false,
      isNew:false,
      tempCoupon:{
        title:'',
        is_enabled:1,
        percent:100,
        due_date:0,
        code:'',
      },
      
    }
  },
  watch: {
     due_date() {
       const vm = this;
       const timestamp = Math.floor(new Date(vm.due_date) / 1000);
       vm.tempCoupon.due_date = timestamp;
     },
   },
  methods:{
    openModal(isNew,item){
      const vm = this ;
      if(isNew){
        vm.tempCoupon = {
          title:'',
          is_enabled:1,
          percent:100,
          due_date:0,
          code:'',
        };
        vm.isNew = true;
      }else{
        vm.tempCoupon =Object.assign({},item);
        vm.isNew = false;
        const dateAndTime = new Date(vm.tempCoupon.due_date * 1000).toISOString().split('T');
         vm.due_date = dateAndTime[0];
      }
        $("#couponModal").modal("show");
    },
    getCoupons(){
      const vm = this ; 
      const api=`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupons`
      vm.$http.get(api).then((response)=>{
        vm.coupons=response.data.coupons
        console.log(vm.coupons);
      })
    },
    updateCoupon(){
      let vm =this;
      let httpMethod = 'post';
      let api =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupon`;
      if(!vm.isNew){
           httpMethod = 'put';
           api =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`;
           vm.due_date = new Date(vm.tempCoupon.due_date * 1000);
      }
      vm.$http[httpMethod](api,{data:vm.tempCoupon}).then((response)=>{
        console.log(response.data.message);
        console.log(httpMethod,api);
        $("#couponModal").modal("hide");
        this.getCoupons();
        vm.isLoading = false; 
      })
    },
    removeCoupon (id){
      const vm = this ;
      vm.isLoading = true;
      const url =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupon/${id}`
      vm.$http.delete(url).then((response)=>{
        console.log(response.data.message);
        vm.getCoupons();
        vm.isLoading = false;
      })
    }
  },
  created(){
    this.getCoupons();
  }
}
</script>
</style>
