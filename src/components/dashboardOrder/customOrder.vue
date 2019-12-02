<template>
    <div>
        <Loading :active.sync="isLoading"></Loading>
        <div class="row mt-4">
            <div v-for="(i,k) in products" class="col-md-4 mb-4" :key="i.id">
            <div  class="card h-100 border-0 shadow-sm">
                <div style="height: 150px; background-size: cover; background-position: center" :style="{backgroundImage:`url(${i.imageUrl})`}"></div>
                <div class="card-body">
                <span class="badge badge-secondary float-right ml-2">{{i.category}}</span>
                <h5 class="card-title">
                    <a href="#" class="text-dark">{{i.title}}</a>
                </h5> 
                <p class="card-text">{{i.description}}</p>
                <div class="d-flex justify-content-between align-items-baseline">
                    <!-- <div class="h5">2,800 元</div> -->
                    <div v-if="!i.price" class="h5">{{i.origin_price}} 元</div>
                    <del v-if="i.price" class="h6">原價 {{i.origin_price}} 元</del>
                    <div v-if="i.price" class="h5">現在只要 {{i.price}} 元</div>
                </div>
            </div>
                <div class="card-footer d-flex">
                    <button @click="getProduct(i.id)" type="button" class="btn btn-outline-secondary btn-sm">
                        <i v-if="status.loadingItem == i.id" class="fas fa-spinner fa-spin"></i>
                        查看更多
                    </button>
                    <button @click="addToCart(i.id,i.qty)" type="button" class="btn btn-outline-danger btn-sm ml-auto">
                        <i v-if="status.loadingItem==i.id" class="fas fa-spinner fa-spin"></i>
                        加到購物車
                    </button>
             </div>
            </div>
            </div>
        </div>
  <table class="table">
        <thead>
          <th></th>
          <th>品名</th>
          <th>數量</th>
          <th>單價</th>
        </thead>
        <tbody>
          <tr v-for="item in cart.carts">
            <td class="align-middle">
              <button @click="deleteCart(item.id)" type="button" class="btn btn-outline-danger btn-sm">
                <i class="far fa-trash-alt"></i>
              </button>
            </td>
            <td class="align-middle">
              {{ item.product.title }}
              <div class="text-success" v-if="item.coupon">
                已套用優惠券
              </div>
            </td>
            <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
            <td class="align-middle text-right">{{ item.final_total }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" class="text-right">總計</td>
            <td class="text-right">{{ cart.total }}</td>
          </tr>
          <tr v-if="cart.total!=cart.final_total">
            <td colspan="3" class="text-right text-success">折扣價</td>
            <td class="text-right text-success">{{ cart.final_total }}</td>
          </tr>
        </tfoot>
  </table>
<div class="input-group mb-3 input-group-sm">
  <input v-model="couponCode" type="text" class="form-control" placeholder="請輸入優惠碼">
  <div class="input-group-append">
    <button @click="addCoupon" class="btn btn-outline-secondary" type="button">
      套用優惠碼
    </button>
  </div>
</div>
        <!-- Modal -->
<div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
         <img :src="product.imageUrl" class="img-fluid" alt="">
             <blockquote class="blockquote mt-3">
               <p class="mb-0">{{ product.content }}</p>
               <footer class="blockquote-footer text-right">{{ product.description }}</footer>
             </blockquote>
             <div class="d-flex justify-content-between align-items-baseline">
               <div class="h4" v-if="!product.price">{{ product.origin_price }} 元</div>
               <del class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</del>
               <div class="h4" v-if="product.price">現在只要 {{ product.price }} 元</div>
             </div>
              <select name="" class="form-control mt-3" v-model="product.num">
               <option :value="num" v-for="num in 10" :key="num">
                 選購 {{num}} {{product.unit}}
               </option>
             </select>
      </div>
      <div class="modal-footer">
       <div class="text-muted text-nowrap mr-3">
               小計 <strong>{{ product.num * product.price }}</strong> 元
             </div>
        <button @click="addToCart(product.id,product.num)" type="button" class="btn btn-danger">加到購物車</button>
      </div>
    </div>
  </div>
</div>

       <!-- 送出訂單表單 -->
       <div class="my-5 row justify-content-center">
  <form class="col-md-6" @submit.prevent="createOrder">
    <div class="form-group">
      <label for="useremail">Email</label>
      <input type="email" class="form-control" name="email" id="useremail"
        v-model="form.user.email" placeholder="請輸入 Email" v-validate="'required|email'">
      <span class="text-danger">{{ errors.first('email') }}</span>
    </div>
  
    <div class="form-group">
      <label for="username">收件人姓名</label>
      <input :class="{'is-invalid':errors.has('name')}" type="text" class="form-control" name="name" id="username"
        v-model="form.user.name" placeholder="輸入姓名" v-validate="'required'">
      <span class="text-danger" v-if="errors.has('name')">請輸入姓名</span>
    </div>
  
    <div class="form-group">
      <label for="usertel">收件人電話</label>
      <input type="tel" class="form-control" id="usertel" v-model="form.user.tel" placeholder="請輸入電話">
    </div>
  
    <div class="form-group">
      <label for="useraddress">收件人地址</label>
      <input type="text" class="form-control" name="address" id="useraddress" v-model="form.user.address"
        placeholder="請輸入地址">
      <span class="text-danger">地址欄位不得留空</span>
    </div>
  
    <div class="form-group">
      <label for="comment">留言</label>
      <textarea name="" id="comment" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
    </div>
    <div class="text-right">
      <button class="btn btn-danger">送出訂單</button>
    </div>
  </form>
</div>
    </div>
</template>

<script>

import $ from 'jquery';
export default {
  name: 'CustomOrder',
  data () {
    return {
        products :[],
        cart:[],
        isLoading:false,
        product:{},
        couponCode:"",
        status:{
            loadingItem:"",
        },
        form:{
          user:{
            name:'',
            email:'',
            tel:'',
            address:'',
          },
          message:'',
        }
    }
  },
  methods:{
      getProducts() {
          const vm = this;
          vm.isLoading = true;
          const url =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
          vm.$http.get(url).then((response)=>{
              vm.products= response.data.products;
              vm.isLoading=false;
              console.log(vm.products);
          })
          
      },
    //   取得單一比產品資料到modal上
    getProduct(id){
        const vm = this ;
        vm.status.loadingItem=id ;
        const url =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`
        vm.$http.get(url).then((response)=>{
            vm.product = response.data.product;
            $("#productModal").modal('show');
            vm.status.loadingItem='';
        })
    },
    addToCart(id,qty=1){
        // qty = 數量
        const vm = this ;
        vm.isLoading=true;
        vm.status.loadingItem=id ;
        const url =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`
        const cart = {
            product_id:id,
            qty
        }
        console.log(cart);
        vm.$http.post(url,{data:cart}).then((response)=>{
            console.log(response);
            vm.status.loadingItem='';
            $('#productModal').modal('hide');
            vm.getCart();
            vm.isLoading=false;
        })
    },
    getCart(){
        const vm =this;
        vm.isLoading=true;
        const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
        vm.$http.get(url).then((response)=>{
            vm.cart = response.data.data;
            console.log(vm.cart);
            vm.isLoading=false;
        })
    },
    deleteCart(id){
        const vm = this ;
        vm.isLoading=true;
        const url =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`
        vm.$http.delete(url).then((response)=>{
            console.log(response);
            vm.getCart();
            vm.isLoading=false;
        })
    },
    addCoupon (){
         const vm = this ;
          vm.isLoading=true;
          const coupon = {
            code:vm.couponCode
          }
          const url =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/coupon`
          vm.$http.post(url,{data:coupon}).then((response)=>{
              console.log(response);
              vm.getCart();
              vm.isLoading=false;
        })
    },
    createOrder(){
      const vm = this ;
      vm.isLoading = true ;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order`;
      this.$validator.validate().then((result)=>{
        if(result){
          vm.$http.post(url,{data:vm.form}).then((response)=>{
          console.log("訂單已建立",response);
          console.log(response.data);
          if(response.data.success){
            vm.$router.push(`custom_checkout/${response.data.orderId}`);
          }
          vm.isLoading = false;
          });
        }else{
          console.log('請輸入完整');
        }
           
      })
    }
  },
  created(){
      this.getProducts();
      this.getCart();
  }
}
</script>