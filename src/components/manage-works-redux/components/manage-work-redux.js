import React, {Component} from 'react';
import WorkListRedux from './work-list-redux';
import FormControlRedux from './form-redux';
import ControlRedux from './control-redux';
import {connect} from 'react-redux';

class ManageWorkRedux extends Component {

    constructor(props) {
        super(props);
 
        this.state = {
            search: ''
        };
    }

    handleSearch = (search) => {
        this.setState({
            search
        });
    }

    render() {
        return(
            <div className="row">
                <div className="col-sm-12 text-center">
                    <h4>Quản lý công việc Redux</h4>
                </div>
                <div className="row col-sm-12">
                    <div className={this.props.isDisplayForm ? 'col-sm-3 p-2 form-work' : ''}>
                    <FormControlRedux/>
                    </div>
                    <div className={this.props.isDisplayForm ? 'col-sm-9 p-2 form-work' : 'col-sm-12 p-2 form-list'}>
                        <div className="row">
                            <div className="col-sm-12">
                                <ControlRedux toggleDisplayForm={this.toggleDisplayForm}
                                    handleSearch = {this.handleSearch}
                                ></ControlRedux>
                            </div>
                            <div className="col-sm-12">
                                <WorkListRedux
                                ></WorkListRedux>
                            </div>
                        </div>
                    </div>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageWorkRedux);