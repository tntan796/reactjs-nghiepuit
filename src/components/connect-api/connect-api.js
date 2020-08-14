import React, { Component } from 'react';
import ProductListComponent from './components/product-list/product-list.component';
import HomeComponent from './components/home/home.component';
import NotMatchComponent from './components/not-match/not-match.component';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class ConnectApiComponent extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/products">Product</Link>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                    <ProductListComponent></ProductListComponent>
                    <Switch>
                        <Route exact path="/">
                            <HomeComponent />
                        </Route>
                        <Route path="/products">
                            <ProductListComponent />
                        </Route>
                        <Route path="*">
                            <NotMatchComponent />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default ConnectApiComponent;