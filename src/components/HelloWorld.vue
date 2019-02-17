<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>A quick guide displaying some Vuex best practices using the Github API as an example.
      <br>check out the
      <router-link to="/repos">repos page</router-link>.
    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
