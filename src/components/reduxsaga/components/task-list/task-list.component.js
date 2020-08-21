import React, { Component } from 'react';
import './task-list.component.css';
import TaskItem from '../task-item/task-item.component';
import PopupComponent from '../popup/popup.component';
import { connect} from 'react-redux';
import * as popupAction from '../../actions/popup.action';
import * as formAction from '../../actions/form.action';
class TaskListComponent extends Component {
    componentDidMount() {
        // const list = this.props.getList();
        // console.log(list);
    }

    handleAdd = () => {
        this.props.openDialog();
        this.props.addTask();
    }
    render() {
        const taskList = this.props.taskList;
        const taskReadyElm = taskList.filter(t => t.status === 1).map(t => {
            return (
                <TaskItem task={t} key={t.id}></TaskItem>
            );
        })
        const taskInProgressElm = taskList.filter(t => t.status === 2).map(t => {
            return (
                <TaskItem task={t} key={t.id}></TaskItem>
            );
        })
        const taskCompleteElm = taskList.filter(t => t.status === 3).map(t => {
            return (
                <TaskItem task={t} key={t.id}></TaskItem>
            );
        })
        return (
            <div className="container-fluid">
                <div className="manage-work">
                    <div className="row">
                        <div className="col-sm-12">
                            <button className="btn btn-primary btn-round btn-add" onClick={() => this.handleAdd()}>
                                <i className="fas fa-plus" />
                            </button>
                        </div>
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-sm-4 block">
                                    <div className="block__title">
                                        <h5>Ready</h5>
                                    </div>
                                    {taskReadyElm}
                                </div>
                                <div className="col-sm-4 block">
                                    <div className="block__title">
                                        <h5>In Progress</h5>
                                    </div>
                                    {taskInProgressElm}
                                </div>
                                <div className="col-sm-4 block">
                                    <div className="block__title">
                                        <h5>Complete</h5>
                                    </div>
                                    {taskCompleteElm}
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

const mapStateToProps = (state, props) => {
    return {
        taskList: state.taskList
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        openDialog : () => dispatch(popupAction.openPopup()),
        closeDialog : () => dispatch(popupAction.closePopup()),
        addTask : () => {
            dispatch(formAction.addTask())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListComponent);