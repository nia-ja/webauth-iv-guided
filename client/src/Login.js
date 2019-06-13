import React from 'react';
import { withRouter } from 'react-router-dom';
import api from './helpers/api';

class Login extends React.Component {
    state ={
        username: '',
        password: ''
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state);
        try {
            const {username, password} = this.state;
            const result = await api.post('/auth/login', {
                username,
                password,
            })
            this.setState({
                username: '',
                password: ''
            })
            // save token in cookie. Not the best way to store token
            // document.cookie = `token=${result.data.token}`

            // save token in localStorage
            localStorage.setItem('token', result.data.token);
            this.props.history.push('/users')
        } catch (error) {
            console.log(error);
        }
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <>
                <h3>Login</h3>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={this.handleChange}
                        value={this.state.username}
                    />
                    <input 
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={this.handleChange}
                        value={this.state.password}
                    />
                    <button type="submit">Login</button>

                </form>
            </>
        )
    }
}

export default withRouter(Login);