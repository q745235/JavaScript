<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-primary">
      <router-link class="navbar-brand  col-sm-3 col-md-2 mr-0" to="/home/customer_products/全部">美味的起點</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarCollapse" class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item"><a href="#" class="nav-link">首頁</a></li>
          <li class="nav-item"><a href="#" class="nav-link">簡介</a></li>
          <li class="nav-item">
            <div>
              <a class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">商品</a>
              <div class="dropdown-menu" id="dropdown">
                <router-link class="dropdown-item" to="/home/customer_products/全部">全部</router-link>
                <router-link class="dropdown-item" to="/home/customer_products/肉品">肉品</router-link>
                <router-link class="dropdown-item" to="/home/customer_products/鮮魚">鮮魚</router-link>
                <router-link class="dropdown-item" to="/home/customer_products/蔬菜">蔬菜</router-link>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <input class="form-control form-control-dark" style="width:150px;" type="text" placeholder="Search" aria-label="Search">
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="btn btn-outline-success" href="#">搜尋</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    
  },
};
</script>

<style lang="scss">
  #dropdown {
    background-color:yellow;
  }
  @media (min-width: 1200px) {
    #dropdown {
      margin: 0 0 0 310px;
    }
  }
</style>