import React, {Component} from 'react';
import axios from '../../axios';
import User from '../../components/User/User';

class Users extends Component {
    state = {
        users: []
    }

    componentDidMount () {
        axios.get('/users')
            .then(response => {
                const users = response.data.slice(0, 4);
                const userList = users.map(user => {
                    return {
                        ...user
                    }
                })
                this.setState({users: userList});
            })
            .catch(error => {
                this.setState({error: true});
            });
    }

    // deleteUserHandler = (id) => {
    //     axios.delete('/posts/' + props.id)
    //         .then(response =>{
    //             console.log(response)
    //         });
    // }

    render () {
        let users = <p style={{textAlign: 'center'}}>Something went wrong!</p>
        if(!this.state.error) {
            users = this.state.users.map(user => {
                return (
                    <User 
                        key={user.id}
                        name={user.name}
                        clicked={() => this.deleteUserHandler(user.id)} />
                );
            })
        }
        return users
    }

}

export default Users;