<template>
  <div> 
      <alert></alert>
        <div class="bg-box" style="height:100vh">
            <form class="box">
              <h1>Login</h1>
              <input v-model="user.username" type="text" placeholder="Username">
              <input v-model="user.password" type="password" placeholder="Password">
              <button @click="signin" type="submit">Signin</button>
            </form>
        </div>
  </div>
</template>

<script>
import alert from '../alertmessage';
export default {
  name: 'Login',
  components:{
      alert,
    },
  data () {
    return {
      user:{
          username:'',
          password:''
      }
    }
  },
    methods:{
        signin() {
              
            const api =`${process.env.APIPATH}/admin/signin` //"https://vue-course-api.hexschool.io/api/joshwan/products"
            const vm = this;
            this.$http.post(api,vm.user).then((response) => {
                console.log(response.data)
                if(response.data.success){
                    vm.$router.push("/admin/products");
                    vm.$bus.$emit("messsage:push",response.data.message,'success');
                }else{
                  this.$bus.$emit('messsage:push',response.data.message,'danger');
                  console.log(response.data.message);
                } 
            }) ;
            
        }
    }
}
</script>
<style scoped>

.bg-box{
  height:100vh;
  width:100%;
  background-image:url('https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80');
  background-position:center center;
  background-size:cover;
}
h1{
  color:white;
}
.box{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  width:500px;
  padding:30px;
  background-color:#191919;
  text-align:center;
}
@media(max-width:576px){
  .box{
    width:96%;
  }
}
.box input{
  background:none;
  display:block;
  margin:20px auto;
  text-align:center;
  padding:14px 10px;
  width:200px;
  border-radius:24px;
  border:2px solid  #007cc0;
  outline:none;
  color:white;
  transition:all .3s ease;
}
.box input:focus{
   border:2px solid #2dde98 ;
  width:280px;
}
.box button{
   background:none;
  display:block;
  margin:20px auto;
  text-align:center;
  padding:14px 10px;
  width:100px;
  border-radius:24px;
  border:2px solid #2dde98;
  outline:none;
  color:white;
  transition:all .3s ease;
  cursor:pointer;
}
.box button:hover{
  background-color:#2dde98;
}
</style>




