import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import callApi from '../../utils/apiCaller.utils';
import * as actionProduct from '../../actions/product-list.action';
import { connect} from 'react-redux';
class ProductItemComponent extends Component {

    handleDelete = (id) => {
        this.props.deleteProductItem(id);
    }

    render() {
        const {product} = this.props;
        return (
            <div className="col-sm-3">
                <div className="card p-2 m-1" style={{ width: '18rem' }}>
                    <img className="card-img-top" src={product.url} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">
                        {product.name.length > 20 ? product.name.slice(0, 20) + '...' : product.name}
                        </h5>
                        <p className="card-text text-justify">
                        {product.description.length > 150 ? product.description.slice(0, 150) + '...' : product.description}
                        </p>
                        <div className="row col-sm-12 text-center">
                            <Link className="btn btn-primary w-50" alt="Edit" to={'/product/'+ product.id}>
                                <i className="fa fa-pencil" aria-hidden="true"></i>Edit
                            </Link>
                            <button className="btn btn-danger w-50" alt="Delete" onClick={() => this.handleDelete(product.id)}>
                                <i className="fa fa-trash" aria-hidden="true"></i>Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, props) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        deleteProductItem : (id) => {
            dispatch(actionProduct.deleteProductItemRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItemComponent);