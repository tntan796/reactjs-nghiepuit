import React, {Component} from 'react';
import ColorPicker from '../color-picker/color-picker';
import SizePicker from '../size-picker/size-picker';
import Result from '../result/result';
class SettingColorText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
            size: 12
        }
    }
    selectColor = (color) => {
        this.setState({
            color: color
        });
    }

    changeSize = (size) => {
        this.setState({
            size: this.state.size + size
        });
    }

    render() {
        return (
            <div className="col-sm-12">
                <div className="row">
                    <div className="col-sm-6">
                        <ColorPicker selectColor = {this.selectColor} color={this.state.color}></ColorPicker>
                    </div>
                    <div className="col-sm-6">
                        <SizePicker size={this.state.size} changeSize={this.changeSize}></SizePicker>
                    </div>
                    <div className="col-sm-12 mt-2">
                        <Result color={this.state.color} size={this.state.size}></Result>
                    </div>
                </div>
            </div>
        );
    }
}

export default SettingColorText;