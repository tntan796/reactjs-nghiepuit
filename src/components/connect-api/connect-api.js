import React, { Component } from 'react';

class ConnectApiComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        };

        fetch('https://tano-api.herokuapp.com/products')
        .then((resp) => resp.json()) // Transform the data into json
        .then((data) => {
            this.setState({
                products: data
            });
        }).catch(function (error) {
            console.log(error);
        });

    }
    render() {

        const {products} = this.state;

        const elmProducts = products.map(product => {
            return (
                <div className="col-sm-3" key={product.id}>
                    <div className="card p-2 m-1" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={product.url} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.description}</p>
                            <div className="row col-sm-12 text-center">
                                <button className="btn btn-primary w-50" alt="Edit"><i class="fa fa-pencil" aria-hidden="true"></i>Edit</button>
                                <button className="btn btn-danger w-50" alt="Delete"><i class="fa fa-trash-o" aria-hidden="true"></i>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Product</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
                <div className="row">
                    {elmProducts}
                </div>
            </div>
        );
    }
}

export default ConnectApiComponent;