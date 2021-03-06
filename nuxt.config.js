module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    htmlAttrs: {
        lang: 'ja'
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  router: {
    middleware: [
      'redirector',
      'auth'
    ]
  },

  /*
   ** modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    // '@nuxtjs/pwa'
    ['cookie-universal-nuxt', {parseJSON: false}]
  ],
  axios: {
    prefix: '/api/v2'
  },
  proxy: {
    '/api/v2': 'http://qiita.com'
  },
  plugins: [
    '~/plugins/axios',
    '~/plugins/logger'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
