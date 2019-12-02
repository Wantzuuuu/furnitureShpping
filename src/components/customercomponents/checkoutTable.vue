<template>
    <div>
        <div class="">
            <h3 class="mb-3 text-center">訂單商品</h3>
                <table class="table">
                            <thead>
                                <th width="30%"></th>
                                <th  class="align-middle">商品名稱</th>
                                <th>數量</th>
                                <th>單價</th>
                            </thead>
                            <tbody>
                                <tr v-for="item in table.carts">
                                    <td><img width="100px" height="100px" :src="item.product.imageUrl" alt=""></td>
                                    <td class="align-middle">{{item.product.title}}</td>
                                    <td class="align-middle">{{item.qty}}{{item.product.unit}}</td>
                                    <td class="align-middle ">NT.{{item.product.price}}</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr v-if="table.total-table.final_total>0">
                                    <td colspan="3" class="text-right text-danger">折價</td>
                                    <td class="text-right text-danger">{{table.total-table.final_total|currency}}</td>
                                </tr>
                                <tr>
                                    <td colspan="3" class="text-right">總計</td>
                                    <td class="text-right">{{table.final_total|currency}}</td>
                                </tr>
                            </tfoot>
                    </table>
        </div>
    </div>
</template>

<script>
    export default{
        props:['table']
    }
</script>