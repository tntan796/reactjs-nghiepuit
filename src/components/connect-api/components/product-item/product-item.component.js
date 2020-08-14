import React, { Component } from 'react';

class ProductItemComponent extends Component {
    render() {
        return (
            <div className="col-sm-3">
                <div className="card p-2 m-1" style={{ width: '18rem' }}>
                    <img className="card-img-top" src={this.props.product.url} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.product.name}</h5>
                        <p className="card-text">{this.props.product.description}</p>
                        <div className="row col-sm-12 text-center">
                            <button className="btn btn-primary w-50" alt="Edit">
                                <i className="fa fa-pencil" aria-hidden="true"></i>Edit
                            </button>
                            <button className="btn btn-danger w-50" alt="Delete">
                                <i className="fa fa-trash-o" aria-hidden="true"></i>Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductItemComponent;