import { RouteProps } from 'react-router-dom'
import enhancedPageLoader from './enhancedPageLoader'

export type RouteItem = RouteProps & {
    component: any
    isPrivate?: boolean
}

// Declare all posible routes of the app here
// Use enhancedPageLoader to lazy load page for code splitting and optimization
/**
 * @param component - page component
 * @param isPrivate - requires user to login if true 
 * @param path - path of the page
 */
const routes = [
  {
    path: '/',
    component: enhancedPageLoader('Home'),
  },
]

export default routes