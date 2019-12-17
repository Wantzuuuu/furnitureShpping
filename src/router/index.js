import Vue from 'vue'
import Router from 'vue-router'
import dashboard from '@/components/dashboard'
import Login from '@/components/pages/login'
import products from '@/components/dashboardPage/products'
import orders from '@/components/dashboardPage/orders'
import counpons from '@/components/dashboardPage/counpons'
import customOrder from '@/components/dashboardOrder/customOrder'
import customCheckout from '@/components/dashboardOrder/customCheckout'
import customerWebsite from '@/components/customerWebsite'
import customerIndex from '@/components/customerpages/customerIndex'
import stylePage from '@/components/customerpages/stylepage'
import customerNews from '@/components/customerpages/customernews'
import customerProduct from '@/components/customerpages/customerproducts'
import productDescription from '@/components/customerpages/productdescription'
// 購物車頁面
import productCart from '@/components/customerpages/productcart'
// 結帳頁面
import checkoutPage from '@/components/customerpages/checkoutpage'
import creatOrder from '@/components/customerpages/createdorder'
import customerCheckout from '@/components/customerpages/customercheckout'
import checkoutSuccess from '@/components/customerpages/checkoutsuccess'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "*",
      redirect: "/customer_website/index"
    },
    {
      path: '/customer_website',
      name: 'CustomerWebsite',
      component: customerWebsite,
      children: [
        {
          name: "Index",
          path: "index",
          component: customerIndex,
        },
        // 商品頁面
        {
          name: "CustomerProduct",
          path: "products/:category",
          component: customerProduct,
        },
        {
          name: "CustomerNews",
          path: "news",
          component: customerNews,
        },
        // 商品敘述
        {
          name: "Productdescription",
          path: "product/:productId",
          component: productDescription
        },
        // 商品購物車
        {
          name: "ProductdCart",
          path: "cart",
          component: productCart
        },
        // 結帳頁面
        {
          name: "CheckoutPage",
          path: "checkout_page",
          component: checkoutPage,
          children: [
            {
              name: "CreatOrder",
              path: "/",
              component: creatOrder,

            },
            // checkout
            {
              name: "CustomerCheckout",
              path: "checkout/:orderId",
              component: customerCheckout
            },
          ]
        },
        {
          name: "CheckoutSuccess",
          path: "checkout_success",
          component: checkoutSuccess,
        }
      ]
    },
    {
      name: 'Login',
      path: '/login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: dashboard,
      children: [
        {
          name: 'Products',
          path: 'products',
          component: products,
          meta: { requiresAuth: true },
        },
        {
          name: 'Orders',
          path: 'orders',
          component: orders,
          meta: { requiresAuth: true },
        },
        {
          name: 'Counpons',
          path: 'counpons',
          component: counpons,
          meta: { requiresAuth: true },
        }
      ]
    },

    // {
    //   path: '/',
    //   name: 'dashboard',
    //   component: dashboard,
    //   children: [
    //     {
    //       name: 'customOrder',
    //       path: '/custom_order',
    //       component: customOrder,
    //     },
    //     {
    //       name: 'customCheckout',
    //       path: `/custom_checkout/:orderId`,
    //       component: customCheckout,
    //     },
    //   ]
    // },
  ],
  scrollBehavior(to, from, savedPosition) {
    // console.log(savedPosition);
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 }
    }
  }
})
