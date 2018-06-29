<template>
  <section>
    <h1>HOME</h1>
    <p>
      <nuxt-link to="/login">
        Move to login
      </nuxt-link>
    </p>

    <ul>
      <li v-for="user in users" :key="user.id">
        <p>
          <img :src="user.profile_image_url" alt="" ><br>
          <strong>{{user.id}}</strong><br>
          {{user.description}}
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  async asyncData({app}) {
    const users = await app.$axios.$get('/users')
    return {
      users
    }
  }
}
</script>

<style>
  section {
    margin: 16px;
  }

  p {
    margin: 0 0 16px;
    line-height: 1.5;
  }

</style>
