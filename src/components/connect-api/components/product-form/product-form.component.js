import React, {Component} from 'react';
import './product-form.component.css';
import {Redirect} from 'react-router-dom';
import callApi from '../../utils/apiCaller.utils';

class ProductFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            description: '',
            url: ''
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        if (id) {
            this.setState({
                id: id
            })
            callApi(`products/${id}`, 'GET', null).then(res => {
                if (res) {
                    this.setState(res.data);
                }
            })
        }
    }

    handleOnChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = (target.type === 'checkbox') ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.id) {
            callApi('products/edit', 'POST', this.state).then(res => {
                this.props.history.goBack();
            })
        } else {
            callApi('products/add', 'POST', this.state).then(res => {
                this.props.history.goBack();
                // this.props.history.push('/products');
            })
        }
    }

    render() {
        const id = this.props.match.params.id;
        return (
            <form>
                <div className="row form-product">
                    <div className="col-sm-12 form-group form-product__title">
                        <label>{id ? 'Sửa sản phẩm' : 'Thêm mới sản phẩm'}</label>
                    </div>
                    <div className="form-product__content col-sm-12">
                        <div className="row">
                            <div className="col-sm-12 form-group">
                                <label>Tên sản phẩm</label>
                                <input type="text" name = "name" className="form-control" value={this.state.name}
                                    onChange={this.handleOnChange}
                                />
                            </div>
                            <div className="col-sm-12 form-group">
                                <label>Mô tả</label>
                                <textarea name = "description" className="form-control" value={this.state.description}
                                    onChange={this.handleOnChange}/>
                            </div>
                            <div className="col-sm-12 form-group">
                                <label>Đường dẫn ảnh</label>
                                <input type="text" name = "url" className="form-control" value={this.state.url}
                                    onChange={this.handleOnChange}/>
                            </div>
                            <div className="col-sm-12 form-group">
                                <button className="btn btn-primary w-100" onClick={this.handleSubmit}>Lưu lại</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default ProductFormComponent;