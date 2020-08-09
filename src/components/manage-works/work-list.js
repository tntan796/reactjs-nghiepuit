import React, {Component} from 'react';

class WorkList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        filterName: '',
        filterStatus: -1 // all: -1, deactive: 0, active: 1
      }
    }
    
    handleEdit(work) {
      this.props.handleEdit(work);
    }

    handleDelete(id) {
      this.props.handleDelete(id);
    }

    toggleStatus(id) {
      this.props.toggleStatus(id);
    }

    handleChange = (event) => {
      let target = event.target;
      let name = target.name;
      let value = target.value;
      this.props.handleFilter(
        name == 'filterName' ? value : this.state.filterName,
        name == 'filterStatus' ? value : this.state.filterStatus
      );
      this.setState({
        [name]: value
      });
    }

    render() {
        let {works} = this.props;
        const elmWorkList = works.map((item, index) => {
            return (<tr key={item.id}>
              <th scope="row">{index}</th>
              <td>{item.name}</td>
              <td className="text-center">
                {
                  item.status ? <span className="badge badge-primary cursor-pointer"
                  onClick={() => this.toggleStatus(item.id)}>Kích hoạt</span>
                  : <span className="badge badge-danger cursor-pointer"
                  onClick={() => this.toggleStatus(item.id)}>Không kích hoạt</span>
                }
              </td>
              <td>
                <button className="btn btn-primary" onClick={() => this.handleEdit(item)}>
                  <i className="fas fa-edit"></i>
                </button>
                <button className="btn btn-danger" onClick={() => this.handleDelete(item.id)}>
                  <i className="fas fa-trash-alt"></i>
                </button>
              </td>
            </tr>);
        })


        return(
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
                      value={this.state.filterName}
                      onChange={this.handleChange}/></td>
                    <td> 
                        <select className="form-control" name="filterStatus"
                        value={this.state.filterStatus}
                        onChange={this.handleChange}
                        >
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

export default WorkList;