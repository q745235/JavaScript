<template>
  <div>
    <Head/>
    <Banner/>
    <Alert/>
    <div class="container-fluid">
      <div class="row">
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../Sidebar';
import Head from './Head';
import Alert from '../AlertMessage';
import Banner from './Banner';

export default {
  components:{
    Sidebar,
    Head,
    Alert,
    Banner,
  },
};
</script>

<style lang="scss">
  main {
    margin: 0 0 0 0;
  }
</style>