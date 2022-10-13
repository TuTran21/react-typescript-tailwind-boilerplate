import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import routes, { RouteItem } from 'routes'

// Used to render pages
// Can implement auth checks here and redirect user to login page when needed
export const RoutesRenderer = () => {
  const loggedIn = true

  const okToRoute = (route: RouteItem) => {
    if (route?.isPrivate && !loggedIn) {
      return { status: false, redirect: 'Home' }
    }
    return { status: true, redirect: null }
  }

  return (
    <Fragment>
      <Routes>
        {routes.map((route: RouteItem) =>
          okToRoute(route).status ? (
            <Route
              path={route.path}
              key={route.path}
              element={<route.component />}
            />
          ) : (
            <div>Login page here</div>
          )
        )}
      </Routes>
    </Fragment>
  )
}
