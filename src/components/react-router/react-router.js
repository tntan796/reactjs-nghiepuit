import React, { Component } from 'react';
import HomeComponent from './components/home.component';
import ContactComponent from './components/contact.component';
import AboutComponent from './components/about.component';
import './react-router.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    useRouteMatch
  } from "react-router-dom";
class ReactRouterComponent extends Component {
    render() {
        return (
            <Router>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <Link  className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <hr/>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink activeClassName="activeNavLink" className="nav-link" to="/" exact>Home <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeStyle={{fontWeight: "bold",color: "yellow"}} className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="activeNavLink" className="nav-link" to="/about">About</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <hr/>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <Link label="Navbar" className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <CustomLink to="/" label="Home" activeOnlyWhenExact="true"></CustomLink>
                            <CustomLink to="/contact" label="Contact"></CustomLink>
                            <CustomLink to="/about" label="About"></CustomLink>
                        </ul>
                    </div>
                </nav>
                

                <Switch>
                    <Route path="/" exact>
                        <HomeComponent />
                    </Route>
                    <Route path="/about">
                        <AboutComponent />
                    </Route>
                    <Route path="/contact">
                        <ContactComponent />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

function CustomLink({ label, to, activeOnlyWhenExact }) {
    let match = useRouteMatch({
      path: to,
      exact: activeOnlyWhenExact
    });
  
    return (
        <li className={match ? "nav-item active" : "nav-item"}>
            <Link className="nav-link" to={to}>{label}</Link>
        </li>
    );
  }

export default ReactRouterComponent;