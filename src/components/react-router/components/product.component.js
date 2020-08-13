import React, { Component } from 'react';

class ProductComponent extends Component {
    render() {
        const {match} = this.props;
        return (
            <div>
                Trang chi tiet product {match.params.slug}
            </div>
        );
    }
}

export default ProductComponent;