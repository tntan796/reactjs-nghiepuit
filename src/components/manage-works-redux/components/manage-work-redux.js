import React, {Component} from 'react';
import WorkListRedux from './work-list-redux';
import FormControlRedux from './form-redux';
import ControlRedux from './control-redux';
import { v4 as uuidv4 } from 'uuid';

class ManageWorkRedux extends Component {

    constructor(props) {
        super(props);
 
        this.state = {
            isDisplayForm: false,
            itemEdit: null,
            filter: {
                filterName: '',
                filterStatus: -1
            },
            search: ''
        };
    }

    toggleDisplayForm = () => {
        this.setState({
            isDisplayForm: !this.state.isDisplayForm,
            itemEdit: null
        });
    }

    showDisplayForm = () => {
        this.setState({
            isDisplayForm: true
        });
    }

    closeDisplayForm = () => {
        this.setState({
            isDisplayForm: false,
            itemEdit: null
        });
    }

    handleSave = (data) => {
        var {works} = this.state;
        if (!data.id) {
            data.id = uuidv4();
            works.push(data);
        } else {
            let index = works.findIndex(t => t.id === data.id);
            if (index != -1) {
                works[index] = data;
            }
        }
        this.setState({
            works: works
        });
        localStorage.setItem('works', JSON.stringify(works));
        this.closeDisplayForm();
    }

    toggleStatus = (id) => {
        let {works} = this.state;
        let work = works.find(t => t.id === id);
        if (work) {
            work.status = !work.status;
        }
        this.setState({
            works
        });
        localStorage.setItem('works', JSON.stringify(works));
    }

    handleDelete = (id) => {
        let {works} = this.state;
        let index = works.findIndex(t => t.id === id);
        if (index !== -1) {
            works.splice(index, 1);
        }
        this.setState({
            works
        });
        localStorage.setItem('works', JSON.stringify(works));
    }

    handleEdit = (work) => {
        this.showDisplayForm()
        this.setState({
            itemEdit: work
        });
    }

    handleAdd = () => {
        this.setState({
            isDisplayForm: true,
            itemEdit: null
        });
    }

    handleFilter = (filterName, filterStatus) => {
        this.setState({
            filter: {
                filterName: filterName,
                filterStatus: +filterStatus
            }
        })
    }

    handleSearch = (search) => {
        this.setState({
            search
        });
    }

    render() {
        let {isDisplayForm, itemEdit, filter, search} = this.state;
        // if (filter) {
        //     if (filter.filterName) {
        //         works = works.filter(work => work.name.toLowerCase().includes(filter.filterName.toLowerCase()));
        //     }
        //     works = works.filter(work => {
        //         if (filter.filterStatus === -1) {
        //             return work;
        //         } else {
        //             return work.status === (filter.filterStatus === 1 ? true : false);
        //         }
        //     });
        // }
        // if (search) {
        //     works = works.filter(work => work.name.toLowerCase().includes(search.toLowerCase()));
        // }

        const elmForm = this.state.isDisplayForm ? 
                            <FormControlRedux
                                toggleDisplayForm={this.toggleDisplayForm}
                                itemEdit = {itemEdit}
                                /> : '';
        return(
            <div className="row">
                <div className="col-sm-12 text-center">
                    <h4>Quản lý công việc Redux</h4>
                </div>
                <div className="row col-sm-12">
                    <div className={isDisplayForm ? 'col-sm-3 p-2 form-work' : ''}>
                        {elmForm}
                    </div>
                    <div className={isDisplayForm ? 'col-sm-9 p-2 form-work' : 'col-sm-12 p-2 form-list'}>
                        <div className="row">
                            <div className="col-sm-12">
                                <ControlRedux toggleDisplayForm={this.toggleDisplayForm}
                                    handleSearch = {this.handleSearch}
                                    handleAdd = {this.handleAdd}
                                ></ControlRedux>
                            </div>
                            <div className="col-sm-12">
                                <WorkListRedux
                                    toggleStatus = {this.toggleStatus}
                                    handleDelete = {this.handleDelete}
                                    handleEdit = {this.handleEdit}
                                    handleFilter = {this.handleFilter}
                                ></WorkListRedux>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ManageWorkRedux;