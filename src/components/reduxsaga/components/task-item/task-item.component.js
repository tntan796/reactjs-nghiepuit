import React, { Component } from 'react';
import './task-item.component.css';
class TaskItem extends Component {
    handleEdit = (task) => {
        console.log('Edit:', task);
    }

    handleDelete = (id) => {
        console.log('Delete:', id);
    }
    render() {
        return (
            <div className="work">
                <h5 className="work_title">{this.props.task.title}</h5>
                <div className="description">
                    <p>{this.props.task.description}</p>
                </div>
                <div className="button-control">
                    <button className="btn btn-primary btn-round btn-edit" onClick={() => this.handleEdit(this.props.task)}>
                        <i className="far fa-edit" />
                    </button>
                    <button className="btn btn-danger btn-round btn-delete" onClick= {() => this.handleDelete(this.props.task.id)}>
                        <i className="far fa-trash-alt" />
                    </button>
                </div>
            </div>
        );
    }
}

export default TaskItem;