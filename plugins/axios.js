export default function ({$axios}) {
  $axios.onRequest((config) => {
    if (config.url.indexOf('api.github.com') +1) {
      config.headers.Authrization = 'token14447906814d2223d483981b86337ef1713bcdc3'
    }
  })

}