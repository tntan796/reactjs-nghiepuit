import React, {Component} from 'react';
import { connect} from 'react-redux';
class ControlRedux extends Component {
    constructor(props) {
      super(props);
      this.state = {
        search : ''
      }
    }

    toggleDisplayForm() {
      this.props.toggleDisplayForm();
    }

    handleAdd() {
      this.props.handleAdd();
    }

    handleChange = (event) => {
      let target = event.target;
      let name = target.name;
      let value = target.value;
      this.setState({
        [name]: value
      });
    }

    handleSearch = () => {
      this.props.handleSearch(this.state.search);
    }
    render() {
        return (
            <div className="row">
                <div className="col-sm-12 form-group">
                    <button className="btn btn-primary" onClick={() => this.handleAdd()}>
                    <i className="fas fa-plus"></i>Thêm công việc</button>
                </div>
                <div className="col-sm-6 form-group">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search data" name="search"
                      onChange={this.handleChange}
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="button" onClick={() => this.handleSearch()}>Button</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6  form-group">
                  <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Sắp xếp
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a className="dropdown-item" href="#">Tăng dần</a>
                      <a className="dropdown-item" href="#">Giảm dần</a>
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

export default connect(mapStateToProps, mapDispatchToProps)(ControlRedux);