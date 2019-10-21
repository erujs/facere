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
                // const users = response.data.slice(0, 2);
                const users = response.data;
                const userList = users.map(user => {
                    return {
                        ...user,
                        fake: false
                    }
                })
                this.setState({users: userList});
            })
            .catch(error => {
                this.setState({error: true});
            });
    }

    createHandler = (props) => {
        props.id = this.state.users.length + 1;
        const newUser = {...props, fake: true}
        const updatedUsers = this.state.users.concat(newUser);
        axios.post('/users/', props)
            .then(response => {
                this.setState({ users: updatedUsers });
            })
            .catch(error => {
                this.setState({error: true});
            });
    }

    updaterHandler = (props) => {
        let update = '';
        if(!props.fake){
            update = <UpdateUser name={props.name} />
            // axios.put('/users/' + props.id, props)
            //     .then(response => {
            //         console.log(response)
            //     })
            //     .catch(error => {
            //         this.setState({error: true});
            //     });
        } else {
            update = <UpdateUser name={props.name} />            
        }
        return update;
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
                        data={user}
                        deleteHandler={this.deleteHandler}
                        updateHandler={this.updaterHandler} />
                );
            })
        }
        return (
            <Aux>
                <CreateUser createHandler={this.createHandler} />
                {users}
            </Aux>
        );
    }

}

export default Users;