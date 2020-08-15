import React from 'react';
import HomeComponent from './components/home/home.component';
import ProductListComponent from './components/product-list/product-list.component';
import NotMatchComponent from './components/not-match/not-match.component';
const routes = [
    {path: '/', exact: true, main: () => <HomeComponent/>},
    {path: '/products', exact: false, main: () => <ProductListComponent/>},
    {path: '', exact: false, main: () => <NotMatchComponent/>},
]

export default routes;