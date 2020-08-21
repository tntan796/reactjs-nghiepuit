import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as popupActions from '../../actions/popup.action';
import * as taskListActions from '../../actions/task-list.action';
class TaskFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            title: '',
            description: '',
            status: 1
        }
    }

    closePopup = () => {
        this.props.closePopup();
    }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        if (name === 'status') {
            value = +value;
        }
        this.setState({
            [name] : value
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.task) {
            this.setState(nextProps.task);
        }
    }

    handleSave = (event) => {
        event.preventDefault();
        if (this.state.id) {
            this.props.editTask(this.state);
            this.props.closePopup();
        } else {
            this.props.addTask(this.state);
            this.props.closePopup();
        }
    }

    closePopup = () => {
        this.props.closePopup();
    }

    render() {
        return (
            <>
                <div className="col-sm-12 form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Press Title"  name="title" value={this.state.title} onChange={this.handleChange} />
                </div>
                <div className="col-sm-12 form-group">
                    <label>Description</label>
                    <input type="text" className="form-control" placeholder="Press Description" name="description" value={this.state.description} onChange={this.handleChange}/>
                </div>
                <div className="col-sm-12 form-group">
                    <label>Status</label>
                    <select name="status" className="form-control" value={this.state.status} onChange={this.handleChange}>
                        <option value={1}>Ready</option>
                        <option value={2}>In progress</option>
                        <option value={3}>Complete</option>
                    </select>
                </div>
                <div className="col-sm-12 form-group text-right">
                    <button className="btn btn-primary" onClick={this.handleSave}><i className="far fa-save" /> Lưu lại</button>
                    <button className="btn btn-danger" onClick={() => this.closePopup()}><i className="fas fa-sign-out-alt" /> Thoát</button>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        task: state.task,
        taskList: state.taskList
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        closePopup: () => {
            dispatch(popupActions.closePopup())
        },
        addTask: (task) => {
            dispatch(taskListActions.addTaskRequest(task))
        },
        editTask: (task) => {
            dispatch(taskListActions.editTaskRequest(task))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskFormComponent);