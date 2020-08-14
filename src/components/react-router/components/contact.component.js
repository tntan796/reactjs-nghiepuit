import React, { Component } from 'react';
import {Prompt} from 'react-router-dom';
class ContactComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAccept: false
        }
    }

    handleAccept = (role) => {
        this.setState({
            isAccept: role
        });
    }
    render() {

        return (
            <div className="row mt-1">
                <div className="col-sm-12">
                    <p>Prompt được sử dụng để xác nhận có chuyển trang hay không dựa vào điều kiện "When" ta truyền vào.
                    Nội dung thông bso thì đặt ở "message"</p>
                    <button className="btn btn-primary" onClick={() => this.handleAccept(true)}>Cho phép</button>
                    <button className="btn btn-danger"  onClick={() => this.handleAccept(false)}>Không cho phép</button>
                    <Prompt message="Are you sure you want to leave?" when={this.state.isAccept}/>
                </div>
            </div>
        );
    }
}

export default ContactComponent;