import React, { Component } from 'react';
import './task-item.component.css';
import {connect} from 'react-redux';
import * as formAction from '../../actions/form.action';
import * as popupAction from '../../actions/popup.action';
import * as taskListActions from '../../actions/task-list.action';
class TaskItem extends Component {
    handleEdit = (task) => {
        this.props.openPopup();
        this.props.handleEdit(task);
    }

    handleDelete = (id) => {
        this.props.handleDelete(id);
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

const mapStateToProps = (state, props) => {
    return {

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        handleEdit : (task) => {
            dispatch(formAction.editTask(task))
        },
        handleDelete : (id) => {
            dispatch(taskListActions.deleteTaskRequest(id))
        },
        openPopup: () => {
            dispatch(popupAction.openPopup())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);