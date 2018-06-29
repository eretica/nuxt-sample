import Cookie from 'universal-cookie'

export default function ({req, route, redirect, store}) {
  if (!process.server || ['/login'].includes(route.path)) {
    return
  }

  const cookies = new Cookie(req.headers.cookie)
  const credential = cookies.get('credential')

  if (credential) {

  } else {
    return redirect('/login')
  }
}