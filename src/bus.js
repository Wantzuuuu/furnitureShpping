import Vue from 'vue';
Vue.prototype.$bus = new Vue();

// alert message
// this.$bus.$emit('messsage:push',message,status);
// this.$bus.$emit('updateCart');
// vm.$bus.$emit('openCartPanel');