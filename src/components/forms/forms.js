import React, { Component} from 'react';
import './form.css';
class Forms extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            favourite: '',
            married: true,
            language: 'vietnam'
        }
    }

    onHandleChange = (event) => {
        const target = event.target;
        const name  = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }
    
    onHandlSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="form">
                <form className="row">
                    <div className="form-group col-sm-12">
                        <label>User Name:</label>
                        <input className="form-control"
                            onChange={this.onHandleChange}
                            value={this.state.username}
                            placeholder="username"
                            name="username"
                        />
                    </div>
                    <div className="form-group col-sm-12">
                        <label>Password:</label>
                        <input className="form-control" type="password"
                            placeholder="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.onHandleChange}
                        />
                    </div>
                    <div className="form-group col-sm-12">
                        <label>Language:</label>
                        <div>
                            <label className="mr-1">
                                <input 
                                value="vietnam"
                                type="radio"
                                name="language"
                                checked={this.state.language == 'vietnam'}
                                onChange={this.onHandleChange}
                            /> Viet Nam
                            </label>
                            <label>
                            <input 
                                value="english"
                                type="radio"
                                name="language"
                                checked={this.state.language == 'english'}
                                onChange={this.onHandleChange}
                            /> English
                            </label>
                        </div>
                        
                    </div>
                    <div className="form-group col-sm-12">
                        <label>Married:</label><br/>
                        <label>
                            <input
                                className="mr-1"
                                name="married"
                                type="checkbox"
                                checked={this.state.married}
                                onChange={this.onHandleChange} />
                                Yes
                        </label>
                    </div>
                    <div className="form-group col-sm-12">
                        <label>Favourite:</label>
                        <select value={this.state.value}
                            name="favourite"
                            className="form-control"
                            onChange={this.onHandleChange}>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </div>
                    <div className="form-group col-sm-12">
                        <button type="submit" className="btn btn-primary" onClick={this.onHandlSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Forms