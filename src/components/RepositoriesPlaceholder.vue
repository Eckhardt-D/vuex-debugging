<template>
  <div class="placeholder container">
    <div v-for="(repo, i) in 6" :key="i" class="card my-3">
      <h5 class="card-header"></h5>
      <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text"></p>
        <br>
        <p class="mt-4 mb-0"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.placeholder {
  margin-top: calc(49px * 3);

  .card {
    height: 253px;

    .card-header {
      height: 49px;
    }
  }
}
</style>
