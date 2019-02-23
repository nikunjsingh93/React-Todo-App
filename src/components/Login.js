import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import fire from './fire';
import './Login.css';


class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).catch((error) => {
            console.log(error);
        });
    }

    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).then((u) => { console.log(u) })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {
        return (
            <div className="container">
                <form>
                <div >
                <img alt='some value' src={require('./logo.jpg')} />
                </div>
                    <div className="extend2">
                        <label for="exampleInputEmail1">Log In/ Sign Up</label>
                        </div>
                        <div>
                        <input value={this.state.email} onChange={this.handleChange} type="text" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" />
                       
                    </div>
                    <div >
                        
                        <input value={this.state.password} onChange={this.handleChange} type="password" name="password"  id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="submit" onClick={this.login} class="btn btn-primary">Log In</button>
                    <button onClick={this.signup} style={{ marginLeft: '25px' }} className="btn btn-success">Sign Up</button>
                </form>
                <div className='extend'>

            </div>

            </div>
            
        );
    }
}
export default Login;