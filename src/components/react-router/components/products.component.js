import React, { Component } from 'react';
import { NavLink, Route, Redirect} from 'react-router-dom';
import ProductComponent from './product.component';
const products = [
    {id: 1, image: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-2-400x460.png', name: 'Iphone X', price: 1000000, slug: 'iphone',  description: 'iPhone X 64 GB là cụm từ được rất nhiều người mong chờ muốn biết và tìm kiếm trên Google bởi đây là chiếc điện thoại mà Apple kỉ niệm 10 năm iPhone đầu tiên được bán ra.'},
    {id: 2, image: 'https://cdn.tgdd.vn/Products/Images/42/226187/xiaomi-mi-10-super-large-cup-215720-015734-400x460.png', name: 'Xiaomi 10', price: 800000, slug: 'xiao-mi', description: 'Flagship 2020 của Xiaomi chính thức lộ diện với tên gọi Xiaomi Mi 10, với nhiều ưu điểm vượt trội về camera và hiệu năng, liệu siêu phẩm này có giúp Xiaomi đánh chiếm thành công phân khúc smartphone cao cấp.'},
    {id: 3, image: 'https://cdn.tgdd.vn/Products/Images/42/179530/samsung-galaxy-s10-plus-white-400x460.png', name: 'Sumsung S10', price: 1100000, slug: 'samsung', description: 'Samsung Galaxy S10+ 128GB là một trong những chiếc smartphone được trông chờ nhiều nhất trong năm 2019 và không phụ sự kỳ vọng của mọi người thì chiếc Galaxy S thứ 10 của Samsung thực sự gây ấn tượng mạnh cho người dùng.'}
];

class ProductsComponent extends Component {
    match = this.props.match;

    showProducts = (products) => {
        return products.map((product, index) => {
            return (
                <div className="card col-sm-3" key={index}>
                    <img className="card-img-top" src={product.image} alt="Card image cap"></img>
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                        <NavLink to={`${this.match.url}/${product.slug}`} className="btn btn-primary">Add to cart</NavLink>
                    </div>
                </div>
            );
        })
    }

    render() {
        var isLogin = localStorage.getItem('login');
        if (!isLogin) {
            return (
                <Redirect to="/login" />
            );
        }

        console.log('this.props.location:', this.props.location);

        var match = this.props.match;
        return (
            <div className="row">
                {this.showProducts(products)}
                <div className="col-sm-12">
                    <Route path="/products/:slug" component={ProductComponent}>
                    </Route>
                </div>
            </div>
        );
    }
}

export default ProductsComponent;