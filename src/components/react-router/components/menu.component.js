import React, { Component } from 'react';
import {
    Link,
    NavLink,
    useRouteMatch
} from "react-router-dom";

class MenuComponent extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <Link className="navbar-brand" to="/">Navbar</Link>
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
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <hr />
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
                                <NavLink activeStyle={{ fontWeight: "bold", color: "yellow" }} className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="activeNavLink" className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="activeNavLink" className="nav-link" to="/products">Product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="activeNavLink" className="nav-link" to="/login">Login</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <hr />
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <Link label="Navbar" className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            {showMenus(menus)}
                        </ul>
                    </div>
                </nav>
            </>
        );
    }
}

const menus = [
    { label: 'Home', to: '/', exact: true },
    { label: 'Contact', to: '/contact', exact: false },
    { label: 'About', to: '/about', exact: false },
    { label: 'Product', to: '/products', exact: false },
    { label: 'Login', to: '/login', exact: false }
]

const showMenus = (menus) => {
    const data =  menus.map((menu, index) => {
        return (
                <CustomLink to={menu.to} key={index} label={menu.label} activeOnlyWhenExact={menu.exact}></CustomLink>
        );
    })
    return data;
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

export default MenuComponent;