import React, { Component } from 'react';
import './task-list.component.css';
import TaskItem from '../task-item/task-item.component';
import PopupComponent from '../popup/popup.component';
class TaskListComponent extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="manage-work">
                    <div className="row">
                        <div className="col-sm-12">
                            <button className="btn btn-primary btn-round btn-add"><i className="fas fa-plus" /></button>
                        </div>
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-sm-4 block">
                                    <div className="block__title">
                                        <h5>Ready</h5>
                                    </div>
                                    <TaskItem></TaskItem>
                                    <TaskItem></TaskItem>
                                </div>
                                <div className="col-sm-4 block">
                                    <div className="block__title">
                                        <h5>In Progress</h5>
                                    </div>
                                    <TaskItem></TaskItem>
                                </div>
                                <div className="col-sm-4 block">
                                    <div className="block__title">
                                        <h5>Complete</h5>
                                    </div>
                                    <TaskItem></TaskItem>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <PopupComponent></PopupComponent>
            </div>
        );
    }
}

export default TaskListComponent;