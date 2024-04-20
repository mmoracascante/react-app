import React, { lazy, LazyExoticComponent } from 'react';
import { LazyPage2, LazyPage3, LazyPage1, NoLazy } from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element


interface Route {
    to: string
    path: string
    Component: LazyExoticComponent<JSXComponent> | JSXComponent
    name: string
}


const LazyLayout = lazy(() => import(/*webpackChunkName: "LazyLayout"*/'../01-lazyload/layout/LazyLayout'))


export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload/',
        Component: LazyLayout,
        name: 'LazyLayout',
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy',
    },

]