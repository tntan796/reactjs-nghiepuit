import React, { Component } from 'react';
import './popup.component.css';
import { connect} from 'react-redux';
import * as popupActions from '../../actions/popup.action';
import TaskFormComponent from '../task-form/task-form.component';
class PopupComponent extends Component {

    render() {
        return (
            <div className= {this.props.isPopup ? "popup active" : "popup"}>
                <div className="popup__content">
                    <div className="popup__title">
                        <h4>Thêm mới</h4>
                    </div>
                    <div className="popup_form row">
                        <TaskFormComponent></TaskFormComponent>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        isPopup: state.isPopup
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        closePopup: () => {
            dispatch(popupActions.closePopup())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PopupComponent);