import Cookie from 'js-cookie'

export default function ({ store, redirect, route }) {
  if (route.path !== '/login' && route.path !== '/register') {
    if (!store.state.user.isLoggedIn && !Cookie.get('loggedIn')) {
      return redirect('/login')
    }
  }
}
