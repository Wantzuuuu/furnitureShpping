<template>
    <div>
        <Loading :active.sync="isLoading"></Loading>
        <div class="text-right mt-4 ">
            <button class="btn btn-primary" @click="openModal(true)">新增產品</button>
            <!-- Modal -->
            <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content border-0">
                        <div class="modal-header bg-dark text-white">
                            <h5 class="modal-title" id="exampleModalLabel">
                            <span>新增產品</span>
                            </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for="image">輸入圖片網址</label>
                                    <input v-model="tempProduct.imageUrl" type="text" class="form-control" id="image"
                                    placeholder="請輸入圖片連結">
                        </div>
                        <div class="form-group">
                        <label for="customFile">或 上傳圖片
                            <i v-if="status.filesLoading" class="fas fa-spinner fa-spin"></i>
                        </label>
                        <input @change="uploadFile" type="file" id="customFile" class="form-control"
                            ref="files">
                        </div>
                        <img :src="tempProduct.imageUrl"
                        class="img-fluid" alt="">
                    </div>
                    <div class="col-sm-8">
                        <div class="form-group">
                        <label for="title">標題</label>
                        <input v-model="tempProduct.title" type="text" class="form-control" id="title"
                            placeholder="請輸入標題">
                        </div>

                        <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="category">分類</label>
                            <input v-model="tempProduct.category" type="text" class="form-control" id="category"
                            placeholder="請輸入分類">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="price">單位</label>
                            <input v-model="tempProduct.unit"  type="unit" class="form-control" id="unit"
                            placeholder="請輸入單位">
                        </div>
                        </div>

                        <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="origin_price">原價</label>
                            <input v-model="tempProduct.origin_price" type="number" class="form-control" id="origin_price"
                            placeholder="請輸入原價">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="price">售價</label>
                            <input v-model="tempProduct.price" type="number" class="form-control" id="price"
                            placeholder="請輸入售價">
                        </div>
                        </div>
                        <hr>

                        <div class="form-group">
                        <label for="description">產品描述</label>
                        <textarea  type="text" class="form-control" v-model="tempProduct.description" id="description"
                            placeholder="請輸入產品描述"></textarea>
                        </div>
                        <div class="form-group">
                        <label for="content">說明內容</label>
                        <textarea  type="text" class="form-control" v-model="tempProduct.content" id="content"
                            placeholder="請輸入產品說明內容"></textarea>
                        </div>
                        <div class="form-group">
                        <div class="form-check">
                            <input v-model="tempProduct.is_enabled" :true-value="1" :false-value="0" class="form-check-input" type="checkbox"
                            id="is_enabled">
                            <label class="form-check-label" for="is_enabled">
                            是否啟用
                            </label>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-primary" @click="updateProduct">確認</button>
                </div>
                </div>
            </div>
            </div>
        </div>
        <table class="table mt-4">
            <thead>
                <th width="120">分類</th>
                <th>產品名稱</th>
                <th width="120">原價</th>
                <th width="120">售價</th>
                <th width="80">啟用</th>
                <th width="100">編輯</th>
            </thead>
            <tbody>
                <tr v-for="(i,k) in products" :key="k">
                    <td>{{i.category}}</td>
                    <td>{{i.title}}</td>
                    <td class="text-right">{{i.origin_price |currency}}</td>
                    <td class="text-right">{{i.price |currency}}</td>
                    <td>
                        <span v-if="i.is_enabled==1">啟用</span>
                        <span v-else>未啟用</span>
                    </td>
                    <td>
                    <div class="btn-group btn-group-sm">
                    <button @click="openModal(false,i)" class="btn  btn-outline-primary">編輯</button><button @click="deleteProduct(i)" class="btn btn-outline-danger">刪除</button>
                    </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <pagination :pages="pagination" @emitPage="getProducts"></pagination>
    </div>
</template>
<script>
import $ from 'jquery';
import pagination from'./changePage'; 
    export default{
    data (){
        return{
            products:[],
            tempProduct:{},
            isNew:false,
            isLoading:false,
            status:{
                filesLoading:false
            },
            pagination:{}
        }
    },
    components:{
        pagination
    },
    methods:{
        getProducts (page=1){
            const api =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/products?page=${page}` //"https://vue-course-api.hexschool.io/api/joshwan/products"
            const vm = this;
            vm.isLoading=true ;
            this.$http.get(api).then((response) => {
                vm.products = response.data.products;
                console.log(response.data);
                vm.pagination=response.data.pagination;
                vm.isLoading=false;

            }) ;
            
        },
         openModal (isNew,item){
            if(isNew){
                this.tempProduct={}
                this.isNew=true;
            }else{ 
                this.tempProduct= Object.assign({},item),
                this.isNew=false;
            }
            $('#productModal').modal('show');
        },
        updateProduct (){
                let api =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/product` //"https://vue-course-api.hexschool.io/api/joshwan/products"
                let httpMethod = 'post'
                const vm = this;
                if(!vm.isNew){
                    httpMethod='put'
                    api=`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/product/${this.tempProduct.id}`
                    console.log(this.tempProduct.id);
                }
                console.log(httpMethod,api);
                this.$http[httpMethod](api,{data:vm.tempProduct}).then((response) => {
                    console.log(response.data);
                    if(response.data.success){
                        $('#productModal').modal('hide');
                        vm.getProducts();
                    }else{
                            $('#productModal').modal('hide');
                            vm.getProducts();
                    }
                }) ;
        },
        uploadFile(){
            console.log(this);
            const uploaded = this.$refs.files.files[0];
            const formData = new FormData();
            this.status.filesLoading=true;
            formData.append("file-to-upload",uploaded);
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/upload`
            this.$http.post(url,formData,{
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            }).then((response)=>{
                    console.log(response.data);
                    this.status.filesLoading=false;
                    if(response.data.success){
                        this.$set(this.tempProduct,'imageUrl',response.data.imageUrl);
                    }else{
                        this.$bus.$emit('messsage:push',response.data.message,'danger');
                    }
                })
        },
        deleteProduct (item){
            console.log(item.id);
            const api =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/product/${item.id}` 
            const vm = this;
            this.$http.delete(api).then((response) => {
                if(response.data.message){
                    console.log("刪除成功");
                    this.getProducts();
                }else{
                    console.log("刪除失敗");
                    this.getProducts();
                }
            }) ;
        }
       
    },
    created (){
        this.getProducts(); 
    }
}
</script>
