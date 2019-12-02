<template>
  <div>
    <div class="bd-example">
  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li class="" data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li class="" data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li class="" data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img width="100%" height="680px"  src="https://images.unsplash.com/photo-1501876725168-00c445821c9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="carousel-img" alt="...">
      </div>
      <div class="carousel-item">
        <img width="100%" height="680px"  src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="carousel-img" alt="...">
      </div>
      <div class="carousel-item">
        <img width="100%" height="680px"  src="https://images.unsplash.com/photo-1543589365-3cc63c87243f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80" class="carousel-img" alt="...">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        headers:{
            0:{
                imgUrl:'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
            },
            1:{
                imgUrl:'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
            },
        }
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>
<style>
  .marker{
    font-family: 'Courgette', cursive;
  }
  .carousel-inner{
    position:relative;
  }
  .carousel-box{
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
    background-color:#181818;
    padding:10px;
  }
  .carousel-title{
    font-size:75px;
  }
  .carousel-block{
    background-color:rgba(0,0,0,0.6);
  }
  .carousel-indicators li{
    border-radius:50%;
    width:10px;
    height:10px;
  }
  @media (max-width:576px){
    .carousel-img{
        height:350px;
    }
  }
</style>