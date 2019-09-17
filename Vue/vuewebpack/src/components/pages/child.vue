<template>
  <div>
    <img :src="user.picture.large" class="card-img-top" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card 1</h5>
      <p class="card-text">{{ user.gender }}</p>
    	<p class="card-text">{{ user.phone }}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        picture: {},
      },
    };
  },

  created() {
    // console.log(this.$route.params.id);
    // const id = this.$route.params.id;
    const vm = this;
    this.$http.get('https://randomuser.me/api/').then((response) => {
      console.log(response);
      vm.user = response.data.results[0];
    });
  }
}
</script>

