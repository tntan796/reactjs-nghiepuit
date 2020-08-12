import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as workListActions from '../actions/work-list-redux.action';
import * as formActions from '../actions/form-redux.action';

class WorkListRedux extends Component {
  handleEdit(work) {
    this.props.handleEdit(work);
    this.props.openForm();
  }

  handleChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.props.handleFilter({
      filterName: name === 'filterName' ? value : this.props.filter.filterName,
      filterStatus: name === 'filterStatus' ? +value : +this.props.filter.filterStatus
    }
    );
  }

  render() {
    let { works } = this.props;
    if (this.props.filter) {
      if (this.props.filter.filterName) {
        works = works.filter(work => work.name.toLowerCase().includes(this.props.filter.filterName.toLowerCase()));
      }
      works = works.filter(work => {
        if (this.props.filter.filterStatus === -1) {
          return work;
        } else {
          return work.status === (this.props.filter.filterStatus === 1 ? true : false);
        }
      });
    }
    if (this.props.search) {
      works = works.filter(work => work.name.toLowerCase().includes(this.props.search.toLowerCase()));
    }
    const elmWorkList = works.map((item, index) => {
      return (<tr key={item.id}>
        <th scope="row">{index}</th>
        <td>{item.name}</td>
        <td className="text-center">
          {
            item.status ? <span className="badge badge-primary cursor-pointer"
              onClick={() => this.props.changeStatus(item.id)}>Kích hoạt</span>
              : <span className="badge badge-danger cursor-pointer"
                onClick={() => this.props.changeStatus(item.id)}>Không kích hoạt</span>
          }
        </td>
        <td>
          <button className="btn btn-primary" onClick={() => this.handleEdit(item)}>
            <i className="fas fa-edit"></i>
          </button>
          <button className="btn btn-danger" onClick={() => this.props.handleDelete(item.id)}>
            <i className="fas fa-trash-alt"></i>
          </button>
        </td>
      </tr>);
    })

    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Tên</th>
            <th scope="col">Trạng thái</th>
            <th scope="col">Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td><input className="form-control" name="filterName"
              value={this.props.filterName}
              onChange={this.handleChange} /></td>
            <td>
              <select className="form-control" name="filterStatus"
                value={this.props.filterStatus}
                onChange={this.handleChange}>
                <option value={-1}>Tất cả</option>
                <option value={0}>Khóa</option>
                <option value={1}>Kích hoạt</option>
              </select>
            </td>
            <td></td>
          </tr>
          {elmWorkList}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => {
  return {
    works: state.works,
    filter: state.filter,
    search: state.search
  }
}

const mapDispatchToProps = dispatch => ({
  changeStatus: id => dispatch(workListActions.changeStatus(id)),
  handleDelete: (id) => dispatch(workListActions.deleteWork(id)),
  handleEdit: (item) => dispatch(workListActions.updateWork(item)),
  openForm: () => dispatch(formActions.openForm()),
  handleFilter: (filter) => dispatch(workListActions.filterOnTable(filter))
})


export default connect(mapStateToProps, mapDispatchToProps)(WorkListRedux);