import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
const menus = [
    { name: 'Trang chủ', path: '/', exact: true },
    { name: 'Sản phẩm', path: '/products', exact: false }
]

class MenuComponent extends Component {
    render() {
        const showMenus = (menus) => {
            return menus.map((m, index) => {
                return (
                    <li className="nav-item" key={index}>
                        <NavLink className="nav-link" to={m.path} exact={m.exact} activeClassName="link-active">{m.name}</NavLink>
                    </li>)
            })
        }
        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {showMenus(menus)}
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-default my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        );
    }
}

export default MenuComponent;