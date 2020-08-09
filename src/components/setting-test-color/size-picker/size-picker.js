import React, {Component} from 'react';
import './size-picker.css';
class SizePicker extends Component {
    constructor(props) {
        super(props);
    }

    changeSize = (value) => {
        this.props.changeSize(value);
    }

    render() {
        return(
            <div className="size-picker">
                <h5>Size is: {this.props.size} px</h5>
                <button className="btn btn-primary mr-1" onClick = {() => this.changeSize(1)}><i className="fas fa-plus"></i></button>
                <button className="btn btn-danger"  onClick = {() => this.changeSize(-1)}><i className="fas fa-minus"></i></button>
            </div>
        );
    }
}

export default SizePicker;
