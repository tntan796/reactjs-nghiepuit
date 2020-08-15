import React, { Component } from 'react';
import ProductItemComponent from '../product-item/product-item.component';
import { Link } from 'react-router-dom';
import { connect} from 'react-redux';
import callApi from '../../utils/apiCaller.utils';
class ProductListComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        callApi('products', 'GET', null).then(res => {
            console.log('Data:', res);
        })
    }

    render() {
        const {products} = this.props;
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

const mappingStateToProps = (state, props) => {
    return {
        products: state.products
    }
}

const mappingDispatchToProps = (dispatch, props) => {
    return {
        
    }
}

export default connect(mappingStateToProps, mappingDispatchToProps)(ProductListComponent);