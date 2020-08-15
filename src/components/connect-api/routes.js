import React from 'react';
import HomeComponent from './components/home/home.component';
import ProductListComponent from './components/product-list/product-list.component';
import NotMatchComponent from './components/not-match/not-match.component';
import ProductFormComponent from './components/product-form/product-form.component';
const routes = [
    {path: '/', exact: true, main: () => <HomeComponent/>},
    {path: '/products', exact: false, main: () => <ProductListComponent/>},
    {path: '/product/add', exact: false, main: () => <ProductFormComponent/>},
    {path: '/product/:id', exact: false, main: ({match}) => <ProductFormComponent match={match} />},
    {path: '', exact: false, main: () => <NotMatchComponent/>},
]

export default routes;