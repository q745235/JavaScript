<template>
  <div>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item  active carousel-1 bg-cover">
        </div>
        <div class="carousel-item carousel-2 bg-cover">
        </div>
        <div class="carousel-item carousel-3 bg-cover">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  .carousel-item {
    height: 200px;  
    width: 100%;
  }
  .carousel-1 {
    background-image: url('../../assets/img/banner1.jpg');
  }
  .carousel-2 {
    background-image: url('../../assets/img/banner2.jpg');
  }
  .carousel-3 {
    background-image: url('../../assets/img/banner3.jpg');
  }
  .bg-cover {
    background-position: center center ;
    background-size: cover;
  }
</style>