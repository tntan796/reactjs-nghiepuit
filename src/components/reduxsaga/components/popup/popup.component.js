import React, { Component } from 'react';
import './popup.component.css';
class PopupComponent extends Component {
    render() {
        return (
            <div className="popup">
                <div className="popup__content">
                    <div className="popup__title">
                        <h4>Thêm mới</h4>
                    </div>
                    <div className="popup_form row">
                        <div className="col-sm-12 form-group">
                            <label htmlFor>Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-sm-12 form-group">
                            <label htmlFor>Description</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-sm-12 form-group text-right">
                            <button className="btn btn-primary"><i className="far fa-save" /> Lưu lại</button>
                            <button className="btn btn-danger"><i className="fas fa-sign-out-alt" /> Thoát</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopupComponent;