import React, { Component } from 'react';
import './task-item.component.css';
class TaskItem extends Component {
    render() {
        return (
            <div className="work">
                <h5 className="work_title">Readbook</h5>
                <div className="description">
                    <p>Nội dung mô tả</p>
                </div>
                <div className="button-control">
                    <button className="btn btn-primary btn-round btn-edit"><i className="far fa-edit" /></button>
                    <button className="btn btn-danger btn-round btn-delete"><i className="far fa-trash-alt" /></button>
                </div>
            </div>
        );
    }
}

export default TaskItem;