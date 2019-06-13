import React from 'react';
import api from './helpers/api';

class Signup extends React.Component {
    state ={
        fullname: '',
        username: '',
        password: ''
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state);
        try {
            const {username, password} = this.state;

            const result = await api.post('/auth/register', {
                username,
                password,
            })
            this.setState({
                fullname: '',
                username: '',
                password: ''
            })
            console.log(result);
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
                <h3>Signup</h3>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="fullname"
                        placeholder="Full Name"
                        onChange={this.handleChange}
                        value={this.state.fullname}
                    />
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
                    <button type="submit">Sign up</button>

                </form>
            </>
        )
    }
}

export default Signup;