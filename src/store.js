import Vue from 'vue';
import Vuex from 'vuex';

// Important attach to instance
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    repos: [
      // {
      //   id: Math.floor(Math.random() * 1000000),
      //   name: 'Eckhardt-D/vuex-repo',
      //   description: 'A repository displaying vuex best practices.',
      //   url: 'http://github.com/Eckhardt-D',
      //   language: 'JavaScript',
      //   has_issues: false,
      //   created_at: '2019-02-13T06:29:42Z',
      //   updated_at: '2019-02-13T06:39:19Z',
      //   fork: true
      // },
      // {
      //   id: Math.floor(Math.random() * 1000000),
      //   name: 'Eckhardt-D/vuex-repo',
      //   description: 'A repository displaying vuex best practices.',
      //   url: 'http://github.com/Eckhardt-D',
      //   language: 'JavaScript',
      //   has_issues: false,
      //   created_at: '2019-02-13T06:29:42Z',
      //   updated_at: '2019-02-13T06:39:19Z',
      //   fork: false
      // },
      // {
      //   id: Math.floor(Math.random() * 1000000),
      //   name: 'Eckhardt-D/vuex-repo',
      //   description: 'A repository displaying vuex best practices.',
      //   url: 'http://github.com/Eckhardt-D',
      //   language: 'JavaScript',
      //   has_issues: false,
      //   created_at: '2019-02-13T06:29:42Z',
      //   updated_at: '2019-02-13T06:39:19Z',
      //   fork: false
      // }
    ]
  },
  getters: {
    repoFilterCreatedAt: state => state.repos.map(repo => repo.created_at.substring(0, 10)),
    repoFilterForked: state => state.repos.filter(repo => repo.fork)
  },
  mutations: {
    SET_REPOS: (state, payload) => {
      state.repos = payload;
      console.log('%cAction completed', 'color: white; background: green; font-weight: bold;');
      console.timeLog();
    }
  },
  actions: {
    async getRepos({ commit }) {
      const response = await fetch('https://api.github.com/users/Eckhardt-D/repos');
      const repos = await response.json();

      // console.dir(repos); not best
      console.assert(repos.length >= 0, 'Repos not returned');

      commit('SET_REPOS', repos);
    }
  }
});
