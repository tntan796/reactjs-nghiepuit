import HomeComponent from './components/home.component';
import ContactComponent from './components/contact.component';
import AboutComponent from './components/about.component';
import NotFoundComponent from './components/not-found.component';
import React from 'react';
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomeComponent/>
    },
    {
        path: '/contact',
        exact: false,
        main: () => <ContactComponent/>
    },
    {
        path: '/about',
        exact: false,
        main: () => <AboutComponent/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundComponent/>
    }
];
export default routes;