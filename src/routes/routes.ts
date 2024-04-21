// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

import { LazyExoticComponent, lazy } from "react"


type JSXComponent = () => JSX.Element


interface Route {
    path: string
    Component: LazyExoticComponent<JSXComponent> | JSXComponent
    to: string
    name: string
    children?: Route[],

}


const LazyPage1 = lazy(() => import/*webpackChunkName: "LazyLoad1"*/('../01-lazyload/pages/LazyPage1'))
const LazyPage2 = lazy(() => import/*webpackChunkName: "LazyLoad2"*/('../01-lazyload/pages/LazyPage2'))
const LazyPage3 = lazy(() => import/*webpackChunkName: "LazyLoad3"*/('../01-lazyload/pages/LazyPage3'))



export const routes: Route[] = [
    {
        path: '/lazy1',
        to: '',
        Component: LazyPage1,
        name: 'Lazy-1',
    },
    {
        path: '/lazy2',
        to: '',
        Component: LazyPage2,
        name: 'Lazy-2',
    },
    {
        path: '/lazy3',
        to: '',
        Component: LazyPage3,
        name: 'Lazy-3',
    },
]