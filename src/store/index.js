import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLoading: false,
        productState: {
            addState: false,
            removeState: false,
        },
        products: [],
        category: [],
        carts: [],
        cartLen: 0,
    },
    actions: {
        updateLoading(context, status) {
            context.commit("LOADING", status);
        },
        getProducts(context) {
            context.commit("LOADING", true);
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all` //"https://vue-course-api.hexschool.io/api/joshwan/products"
            axios.get(api).then((response) => {
                context.commit('PRODUCTS', response.data.products);
                context.commit("CATEGORY", response.data.products);
                // console.log(response.data);
                context.commit("LOADING", false);
            });
        },
        // cart
        getCart(context) {
            context.commit("LOADING", true);
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`
            axios.get(url).then((response) => {
                context.commit("CART", response.data.data);
                context.commit("CARTLEN", response.data.data.carts.length);
                // console.log(response.data.data.carts.length);
                // vm.cartLen = vm.carts.carts.length;
                // console.log(response.carts.carts);

                context.commit("LOADING", false);
            })
        },
        addCart(context, { id, qty }) {
            context.commit("LOADING", true);
            context.commit("ADDSTATE", true);
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
            const cart = {
                product_id: id,
                qty: qty
            }
            // console.log(cart);
            axios.post(url, { data: cart }).then((response) => {
                // console.log(response);
                context.dispatch("getCart");
                context.commit("LOADING", true);
                context.commit("ADDSTATE", false);
            });
        },
        deleteCart(context, id) {
            context.commit("REMOVESTATE", true);
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`
            axios.delete(url).then((response) => {
                // console.log(response)
                // vm.$bus.$emit('updateCart');
                context.dispatch("getCart");
                context.commit("REMOVESTATE", false);
            })
        }
        // cart end
    },
    mutations: {
        LOADING(state, status) {
            state.isLoading = status;
        },
        ADDSTATE(state, status) {
            state.productState.addState = status;
        },
        REMOVESTATE(state, status) {
            state.productState.removeState = status;
        },
        PRODUCTS(state, payload) {
            state.products = payload;
        },
        CATEGORY(state, payload) {
            payload.forEach((v) => {
                if (state.category.indexOf(v.category) == -1) {
                    state.category.push(v.category);
                }
            })
        },
        CART(state, payload) {
            state.carts = payload;
        },
        CARTLEN(state, payload) {
            state.cartLen = payload;
        }
    },
    getters: {
        cartLen(state) {
            return state.cartLen;
        },
    }
})