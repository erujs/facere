import React, { Component } from 'react';
import axios from 'axios';

class NewUser extends Component {
    state = {
        name: '',
        submit: false
    }

    // componentDidUpdate () {}

    userDataHandler = () => {
        const data = {
            name: this.state.name
        }
        axios.post('/user/', data)
            .then(response => {
                this.setState({submit: true});
            });
    }

    render () {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} />
                <button onClick={this.userDataHandler}>Add User</button>
            </div>
        )
    }
}

export default NewUser;