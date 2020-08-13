import React, { Component } from 'react';
import './login.css';
import { Redirect } from 'react-router-dom';
class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleOnChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
        
    }

    handleSave = (event) => {
        event.preventDefault();
        if (this.state.username === 'admin' && this.state.password === 'admin') {
            localStorage.setItem('login', 'logged');
            this.forceUpdate();
        }
    }

    render() {
        var {username, password} = this.state;
        var isLogin = localStorage.getItem('login');
        let {location} = this.props;
        let redirect = () => {
            return (
                <Redirect
                    to={{
                        pathname: "/products",
                        state: { from: location }
                    }}
                />
            );
        }

        if (isLogin) {
            return (
                <div className="row col-sm-12 text-right">
                    <div>Đăng nhập thành công!</div>
                    <button className="btn btn-primary" onClick={() => {redirect()}}>Redirect</button>
                </div>
            );
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">Sign In</h5>
                                <form className="form-signin">
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input type="text" id="inputUserName" name="username" className="form-control" placeholder="Username" required autoFocus value={username} onChange={this.handleOnChange}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" name="password" id="inputPassword" className="form-control" placeholder="Password" value={password} required onChange={this.handleOnChange} />
                                    </div>
                                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={this.handleSave}>Sign in</button>
                                    <hr className="my-4" />
                                    <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i> Sign in with Google</button>
                                    <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginComponent;