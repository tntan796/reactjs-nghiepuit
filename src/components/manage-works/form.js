import React, {Component} from 'react';
class FormControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: true
        }
    }

    componentDidMount() {
        if (this.props.itemEdit) {
            this.setState({
                id: this.props.itemEdit.id,
                name: this.props.itemEdit.name,
                status: this.props.itemEdit.status
            });
            console.log(this.props.itemEdit);
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
        this.props.handleSave(this.state);
    }

    handleChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type == 'checkbox' ? target.checked : target.value;
        if (name === 'status') {
            value = value === 'true' ? true : false;
        }
        this.setState({
            [name]: value
        });
    }

    render() {
        return(
            <div className="row">
                <div className="col-sm-12 title">
                    <label>{this.state.id ? 'Sửa công việc' : 'Thêm công việc'}</label>
                    <i className="fas fa-times close" onClick={() => this.toggleDisplayForm()}></i>
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
                                onChange = {this.handleChange}
                            >
                                <option value={true}>Kích hoạt</option>
                                <option value={false}>Khóa</option>
                            </select>
                            </div>
                            <div className="col-sm-12 form-group text-center">
                            <button className="btn btn-primary" onClick={this.handleSave}>Lưu lại</button>
                            <button className="btn btn-danger">Hủy bỏ</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default FormControl;