import React, { Component } from 'react';
import Users from '../Users/Users';
import NewUser from '../NewUser/NewUser';

class Home extends Component {
    render () {
        return (
            <div>
                <NewUser />
                <Users />
            </div>
        );
    }
}

export default Home;