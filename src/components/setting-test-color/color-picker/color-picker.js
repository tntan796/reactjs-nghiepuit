import React, {Component} from 'react';
import './color-picker.css';
class ColorPicker extends Component{
    constructor(props) {
        super(props);
        this.state = {
            colors: ['green', 'blue', 'red', 'black']
        };
    }

    showColor = (color) => {
        return ({
            backgroundColor: color
        })
    }

    selectColor = (color) => {
        this.props.selectColor(color);
    }

    render() {
        const elmColors = this.state.colors.map((color, index) => {
            return (
                <li key={index} style={this.showColor(color)} className={this.props.color === color ? 'active' : ''}
                onClick={() => this.selectColor(color)}>
                </li>
            )
        })
        return (
            <div className="color-picker">
                <h5>Choose color:</h5>
                <ul>
                   {elmColors}
                </ul>
            </div>
        );
    }
}

export default ColorPicker;