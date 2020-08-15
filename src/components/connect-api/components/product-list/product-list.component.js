import React, { Component } from 'react';
import ProductItemComponent from '../product-item/product-item.component';
import { Link } from 'react-router-dom';
class ProductListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            loading: true
        };
    }

    componentWillMount() {
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
                    <ProductItemComponent key={product.id} product={product}></ProductItemComponent>
            );
        });
        return (
            <div>
                <div className="row form-group mt-1">
                    <div className="col-sm-12 text-right">
                        <Link className="btn btn-primary" to='/product/add'>
                            <i className="fa fa-plus" aria-hidden="true"></i> Add new product
                        </Link>
                    </div>
                </div>
                <div className="row form-group">
                    {elmProducts}
                </div>
            </div>
        );
    }
}

export default ProductListComponent;