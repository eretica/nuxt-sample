<template>
    <div>
        <h1>{{user.name}}</h1>
        <img :src="user.avatar_url">
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    async asyncData ({ params, store, app }) {
      const { id } = params
      // await app.$axios.$get(`https://api.github.com/users/${id}`);
      // this.$store
      // await store.dispatch('getUser', { id })
      await store.dispatch('getUser', { id })
      return {}
    },
    computed: {
      ...mapGetters(['user'])
    }
  }
</script>