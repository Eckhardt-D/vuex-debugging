<template>
  <div v-if="isLoaded" class="repos">
    <h1>Total forked repositories: {{ repoFilterForked.length }}</h1>
    <h1>Creating since: {{ repoFilterCreatedAt[repoFilterCreatedAt.length - 1] }}</h1>
    <h1>Latest Creation was on: {{ repoFilterCreatedAt[1] }}</h1>
    <repositories/>
  </div>
  <div v-else>
    <repositories-placeholder/>
  </div>
</template>

<script>
import RepositoriesPlaceholder from "@/components/RepositoriesPlaceholder";
import Repositories from "@/components/Repositories";
import { mapGetters, mapState } from "vuex";

export default {
  components: {
    Repositories,
    RepositoriesPlaceholder
  },
  computed: {
    ...mapState(["repos"]),
    ...mapGetters(["repoFilterForked", "repoFilterCreatedAt"]),
    isLoaded() {
      if (this.repos.length >= 1) {
        console.log(
          "%cReset isLoaded",
          "font-weight: bold; color: white; background: green;"
        );
        return true;
      } else {
        return false;
      }
    }
  },
  mounted() {
    console.log(
      "%cMOUNTED REPOS",
      "font-weight: bold; color: white; background: blue;"
    );
    console.timeLog();
  },
  updated() {
    console.log(
      "%cREPOS UPDATED",
      "font-weight: bold; color: white; background: blue;"
    );
    console.timeEnd();
  }
};
</script>

