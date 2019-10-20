import React, {Component} from 'react';
import axios from '../../axios';
import Aux from '../../hoc/Auxiliary';
import User from '../../components/User/User';
import CreateUser from '../../components/CreateUser/CreateUser';
import UpdateUser from '../../components/UpdateUser/UpdateUser';

class Users extends Component {
    state = {
        users: [],
        error: false,
        update: false
    }

    componentDidMount () {
        axios.get('/users')
            .then(response => {
                const users = response.data.slice(0, 2);
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

    createHandler = (user) => {
        user.id = this.state.users.length + 1;
        var joined = this.state.users.concat(user);
        this.setState({ users: joined });
    }

    updateHandler = (id) => {
        console.log(id)
    }

    deleteHandler = (id) => {
        axios.delete('/users/' + id)
            .then(response => {
                this.setState(prevState => {
                    const users = prevState.users.filter(user => user.id !== id);
                    return {users}
                })
            })
            .catch(error => {
                this.setState({error: true});
            });
    }

    render () {
        let users = <p style={{textAlign: 'center'}}>Something went wrong!</p>
        if(!this.state.error) {
            users = this.state.users.map(user => {
                return (
                    <User 
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        deleteHandler={this.deleteHandler}
                        updateHandler={this.updateHandler} />
                );
            })
        }
        return (
            <Aux>
                <UpdateUser updateHandler={this.updateHandler} key={this.props.id}/> 
                <CreateUser createHandler={this.createHandler} />
                {users}
            </Aux>
        );
    }

}

export default Users;