import HomeComponent from './components/home.component';
import ContactComponent from './components/contact.component';
import AboutComponent from './components/about.component';
import NotFoundComponent from './components/not-found.component';
import React from 'react';
import ProductsComponent from './components/products.component';
import LoginComponent from './components/login.component';
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomeComponent/>
    },
    {
        path: '/contact',
        exact: false,
        main: ({match}) => <ContactComponent match = {match}/>
    },
    {
        path: '/about',
        exact: false,
        main: () => <AboutComponent/>
    },
    {
        path: '/products',
        exact: false,
        main: ({match}) => <ProductsComponent  match = {match}/>
    },
    {
        path: '/login',
        exact: false,
        main: ({match, location}) => <LoginComponent  match = {match} location={location}/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundComponent/>
    }
];
export default routes;