import Cookie from 'universal-cookie'

export default function ({req, route, redirect, store}) {
  if (!process.server || ['/login'].includes(route.path)) {
    return
  }

  let credential;
  if (process.server) {
      const cookies = new Cookie(req.headers.cookie)
      credential = cookies.get('credential')
  } else {
    
  }




  if (credential) {

  } else {
    return redirect('/login')
  }
}