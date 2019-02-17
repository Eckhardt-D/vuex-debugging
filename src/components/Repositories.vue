<template>
  <main class="container">
    <div v-for="(repo, i) in repos" :key="repo.id" class="card my-3">
      <h5 class="card-header">{{ repoFilterCreatedAt[i] }}</h5>
      <div class="card-body">
        <h5 class="card-title">{{ repo.name }}</h5>
        <p class="card-text">{{ repo.description }}</p>
        <a :href="repo.url" class="btn btn-primary">Visit Repo URL</a>
        <br>
        <p class="mt-4 mb-0">Has been forked: {{ repo.fork ? 'True' : 'False' }}</p>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["repos"]),
    ...mapGetters(["repoFilterCreatedAt"])
  }
};
</script>

<style>
</style>
