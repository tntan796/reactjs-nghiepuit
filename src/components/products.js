import React, {Component} from 'react';
import Item from './item.js';

class Products extends Component{
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    name: 'Iphone X',
                    price: 10000000,
                    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                    image: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-2-400x460.png',
                    status: true
                },
                {
                    name: 'Điện thoại Samsung Galaxy S10',
                    price: 10000000,
                    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                    image: 'https://cdn.tgdd.vn/Products/Images/42/161554/sieu-pham-galaxy-s-black-400x460.png',
                    status: false
                },
                {
                    name: 'Điện thoại OPPO Reno4',
                    price: 10000000,
                    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                    image: 'https://cdn.tgdd.vn/Products/Images/42/222596/oppo-reno4-201120-111135-400x460.png',
                    status: true
                }
            ]
        };

        console.log('State:', this.state);
    }

    selectProduct = (data) => {
        const arr = this.state.products;
        arr.filter(t => t.name === data)[0].status = !arr.filter(t => t.name === data)[0].status;
        this.setState({
            product: arr
        })
    }

    addProduct() {
    }

    render() {
        const productsElm = this.state.products.map((product, index) => {
            if (product.status) {
                return(
                    <Item selectProduct = {this.selectProduct} key={index} product={product}></Item>
                );
            } else {
                return '';
            }
        });

        return(
            <div>
                <div className="form-group">
                    <label>Tên sản phẩm</label>
                    <input className="form-control"/>
                    <button className="btn btn-primary form-control mt-1" onClick={() => this.addProduct()}>Thêm mới</button>
                </div>
                {productsElm}
            </div>
        );
    }
}

export default Products;