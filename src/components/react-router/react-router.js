import React, { Component } from 'react';
import routes from './routes';
import './react-router.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import MenuComponent from './components/menu.component';
class ReactRouterComponent extends Component {
    render() {
        return (
            <Router>
                <MenuComponent/>
                <Switch>
                    {showContextMenu(routes)}
                </Switch>
            </Router>
        );
    }
}

const showContextMenu = (routes) => {
    return routes.map((route, index) => {
        return (
            <Route path={route.path} key={index} exact={route.exact}>
                {route.main}
            </Route>
        );
    })
}
export default ReactRouterComponent;