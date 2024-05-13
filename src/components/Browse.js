import React from 'react'
const LazyScrollToTopOnMount = React.lazy(() => import("./ScrollToTopOnMount"))
const LazyNavbar = React.lazy(() => import("./Home/Navbar"))
const LazyCarousal = React.lazy(() => import("./Home/Carousal"))
const LazyBrands = React.lazy(() => import("./Home/Brands"))
const LazyRestaurentList = React.lazy(() => import("./Home/RestaurentList"))
const LazyExplore = React.lazy(() => import("./Home/Explore"))
const LazyFooter = React.lazy(() => import("./Footer"))

const Browse = () => {
    return (
        <div style={{ backgroundColor: "rgba(15, 15, 76, 0.64)" }}>
            <React.Suspense>
                <LazyScrollToTopOnMount />
            </React.Suspense>
            <React.Suspense>
                <LazyNavbar />
            </React.Suspense>
            <div id='car' >
                <React.Suspense>
                    <LazyCarousal />
                </React.Suspense>
            </div>
            <div >
                <React.Suspense>
                    <LazyBrands />
                </React.Suspense>
            </div>
            <div id='restList' >
                <React.Suspense>
                    <LazyRestaurentList />
                </React.Suspense>
            </div>
            <React.Suspense>
                <LazyExplore />
            </React.Suspense>
            <React.Suspense>
                <LazyFooter />
            </React.Suspense>
        </div>
    )
}

export default Browse