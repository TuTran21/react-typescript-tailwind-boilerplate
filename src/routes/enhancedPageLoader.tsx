import React, {lazy, Suspense} from 'react'
import PageLoader from 'components/PageLoader'

// Lazy load page components for optimization
const enhancedPageLoader = (name: String) => {
    const Component = lazy(() => import(`../pages/${name}`))

    return class extends React.Component {
        render() {
            return (
                <Suspense fallback={<PageLoader/>}>
                    <Component {...this.props} />
                </Suspense>
            )
        }
    }
}

export default enhancedPageLoader