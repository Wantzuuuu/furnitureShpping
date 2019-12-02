<template>
    <div>
      <navbar></navbar>
      <alert></alert> 
      <div class="container-fluid">
        <div class="row">
          <sidebar></sidebar>
          <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <router-view></router-view>
          </main>
        </div>
      </div>
    </div>
</template>

<script>
  import navbar from './dashboardPage/navbar';
  import sidebar from'./dashboardPage/sidebar';
  import alert from './alertMessage'
  export default{
    components:{
      navbar,
      sidebar,
      alert,
    }
  }
</script>
