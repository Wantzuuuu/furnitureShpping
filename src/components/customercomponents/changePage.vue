<template>
    <div>
      <nav  aria-label="Page navigation example ">
            <ul class="pagination">
                <li :class="{'disabled':!pages.has_pre}" class="page-item">
                <a @click.prevent="getProducts(pages.current_page-1)" class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
                </li>
                <li v-for="page in pages.total_pages" class="page-item" :class="{'active':pages.current_page==page}" :key="page">
                    <a @click.prevent="getProducts(page)" class="page-link" href="#">{{page}}</a>
                </li>
                <li class="page-item" :class="{'disabled': !pages.has_next }">
                    <a class="page-link" href="#" aria-label="Next"
                    @click.prevent="getProducts(pages.current_page + 1)">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
 
  export default{
    name:'pagination',
    props:['pages'],
    methods:{
        getProducts(page){
            this.$emit("emitPage",page)
            console.log(page);
        }
    }
  }
</script>