import React, { Component } from 'react';
import ProductItemComponent from '../product-item/product-item.component';
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
            <div className="row">
                    {elmProducts}
            </div>
        );
    }
}

export default ProductListComponent;