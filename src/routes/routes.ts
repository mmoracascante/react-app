import { NoLazy } from "../01-lazyload/pages";

import { LazyExoticComponent, lazy } from "react"


type JSXComponent = () => JSX.Element


interface Route {
    path: string
    Component: LazyExoticComponent<JSXComponent> | JSXComponent
    to?: string
    name: string
    children?: Route[],

}


// const LazyPage1 = lazy(() => import/*webpackChunkName: "LazyLoad1"*/('../01-lazyload/pages/LazyPage1'))
// const LazyPage2 = lazy(() => import/*webpackChunkName: "LazyLoad2"*/('../01-lazyload/pages/LazyPage2'))
// const LazyPage3 = lazy(() => import/*webpackChunkName: "LazyLoad3"*/('../01-lazyload/pages/LazyPage3'))


const LazyLayoutPage = lazy(() => import/*webpackChunkName: "LazyLoadingNested"*/('../01-lazyload/layout/LazyLayout'))

export const routes: Route[] = [
    {
        path: '/lazyload',
        Component: LazyLayoutPage,
        name: 'Lazy Loading Nested',
    },
    {
        path: '/nolazy',
        Component: NoLazy,
        name: 'No lazy',
    },
]