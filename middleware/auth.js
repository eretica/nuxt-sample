import Cookie from 'universal-cookie'

export default function ({req, route, redirect, store, app}) {
  if (!process.server || ['/login'].includes(route.path)) {
    return
  }

  const credential = app.$cookies.get('credential')

  if (credential) {

  } else {
    return redirect('/login')
  }
}