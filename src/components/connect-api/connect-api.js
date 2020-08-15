import React, { Component } from 'react';
import routes from './routes';
import './routes';
import './connect-api.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import MenuComponent from './components/menu/menu.component';

class ConnectApiComponent extends Component {
    render() {
        return (
            <Router>
                <MenuComponent/>
                <div className="container">
                    <Switch>
                       {showContentMenu(routes)}
                    </Switch>
                </div>
            </Router>
        );
    }
}

const showContentMenu = (routes) => {
    return routes.map((item, index) => {
        return (
            <Route exact={item.exact} key={index} path={item.path} component={item.main}>
            </Route>
        );
    })
}

export default ConnectApiComponent;