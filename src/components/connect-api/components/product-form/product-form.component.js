import React, {Component} from 'react';

class ProductFormComponent extends Component {
    render() {
        console.log('this.match:', this.props.match);
        return (
            <div>
                Trang chi tiet
            </div>
        );
    }
}

export default ProductFormComponent;