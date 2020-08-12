import React, {Component} from 'react';
import { connect} from 'react-redux';
import * as formActions from '../actions/form-redux.action';
import {resetItemEdit} from '../actions/work-list-redux.action';
class FormControlRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: true
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEdit) {
            this.setState({
                id: nextProps.itemEdit.id,
                name: nextProps.itemEdit.name,
                status: nextProps.itemEdit.status
            })
        }
    }

    toggleDisplayForm() {
        this.props.toggleDisplayForm();
    }

    handleSave = (event) => {
        event.preventDefault();
        if (this.state.id) {
            this.props.handleEdit(this.state);

        } else {
            this.props.handleAdd(this.state);
        }
        this.props.closeForm();
    }

    handleChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        if (name === 'status') {
            value = value === 'true' ? true : false;
        }
        this.setState({
            [name]: value
        });
    }

    render() {
        if (!this.props.isDisplayForm) 
            return null;
        return(
            <div className="row">
                <div className="col-sm-12 title">
                    <label>{this.state.id ? 'Sửa công việc' : 'Thêm công việc'}</label>
                    <i className="fas fa-times close" onClick={() => this.props.closeForm()}></i>
                </div>
                <div className="col-sm-12 content">
                    <form>
                        <div className="row">
                            <div className="col-sm-12 form-group">
                                <label>Tên:</label>
                                <input type="text"
                                    onChange={this.handleChange}
                                    value={this.state.name}
                                    className="form-control"
                                    name="name" />
                            </div>
                            <div className="col-sm-12 form-group">
                            <label>Trạng thái:</label>
                            <select className="form-control" name="status"
                                value={this.state.status}
                                onChange = {this.handleChange}>
                                <option value={true}>Kích hoạt</option>
                                <option value={false}>Khóa</option>
                            </select>
                            </div>
                            <div className="col-sm-12 form-group text-center">
                            <button className="btn btn-primary" onClick={() => this.handleSave()}>Lưu lại</button>
                            <button className="btn btn-danger" onClick = {() => this.resetItemEdit()}>Hủy bỏ</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        itemEdit: state.itemEdit,
        isDisplayForm: state.isDisplayForm
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        handleAdd: (work) => {
            dispatch(formActions.addWork(work))
        },
        handleEdit: (work) => {
            dispatch(formActions.editWork(work))
        },
        openForm: () => {
            dispatch(formActions.openForm())
        },
        closeForm: () => {
            dispatch(formActions.closeForm())
        },
        resetItemEdit: () => {
            dispatch(resetItemEdit())
        }
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormControlRedux);