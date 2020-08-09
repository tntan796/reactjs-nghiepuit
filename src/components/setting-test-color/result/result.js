import React, {Component} from 'react';
import './result.css';
class Result extends Component {
    render() {
        return(
            <div className="result" style={{color: this.props.color, fontSize: this.props.size}}>
                Tan Tano - {this.props.color} - {this.props.size}
            </div>
        );
    }
}

export default Result;