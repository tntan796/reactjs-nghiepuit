import React, {Component} from 'react';
import './product-form.component.css';
import callApi from '../../utils/apiCaller.utils';
import {connect} from 'react-redux';
import * as actionProduct from '../../actions/product-list.action';
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
            this.props.getProductDetailRequest(id);
        }
    }

    componentWillReceiveProps() {
        this.setState(this.props.productEdit);
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
            this.props.editProduct(this.state);
            this.props.history.goBack();
        } else {
            this.props.addProduct(this.state);
            this.props.history.goBack();
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

const mapStateToProps = (state, props) => {
    return {
        productEdit: state.productEdit
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
       addProduct: (product) => {
           dispatch(actionProduct.addProductItemRequest(product));
       },
       getProductDetailRequest: (id) => {
           dispatch(actionProduct.getProductDetailRequest(id))
       },
       editProduct: (product) => {
           dispatch(actionProduct.editProductItemRequest(product));
       }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductFormComponent);