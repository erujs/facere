import React, {Component} from 'react';
import axios from '../../axios';
import Aux from '../../hoc/Auxiliary';
import User from '../../components/User/User';
import ChangeUsers from '../../components/ChangeUsers/ChangeUsers';
import {Table,
    TableHead,
    TableRow,
    TableCell} from '@material-ui/core';

class Users extends Component {
    state = {
        users: [],
        id: '',
        name: '',
        email: '',
        phone: '',
        fake: false,
        update: false,
        error: false
    }

    componentDidMount() {
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
                this.setState({users: updatedUsers});
            })
            .catch(error => {
                this.setState({error: true});
            });
    }

    updateMapHandler = (id) => {
        let userData = this.state.users.find(data => {
            return data.id === id;
        })
        this.setState({
            id: userData.id,
            name: userData.name,
            email: userData.email,
            phone: userData.phone,
            fake: userData.fake,
            update: true
        })
    }

    updateHandler = (props) => {
        const users = this.state.users;
        users.splice(
            users.indexOf(users.find(data => data.id === props.id)
            ), 1, props)
        if(!props.fake){
            axios.put('/users/' + props.id, users)
                .then(response => {
                    this.setState({users: users,
                        id: '',
                        name: '',
                        email: '',
                        phone: '',
                        fake: false,
                        update: false,
                        error: false});
                })
                .catch(error => {
                    this.setState({error: true});
                });
        } else {
            this.setState({users: users,
                id: '',
                name: '',
                email: '',
                phone: '',
                fake: false,
                update: false,
                error: false});
        }
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

    viewHandler = (id) => {
        let userData = this.state.users.find(data => {
            return data.id === id;
        })
        this.setState({
            id: userData.id,
            name: userData.name,
            email: userData.email,
            phone: userData.phone,
            fake: userData.fake,
            update: true
        })
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
                        updateHandler={this.updateMapHandler}
                        viewHandler={this.viewHandler} />
                );
            })
        }
        return (
            <Aux>
                <ChangeUsers 
                    id={this.state.id}
                    fake={this.state.fake}
                    name={this.state.name}
                    email={this.state.email}
                    phone={this.state.phone}
                    update={this.state.update}
                    updateHandler={this.updateHandler}
                    createHandler={this.createHandler} />
                <Table aria-label="customized table">
                    <TableHead>
                      <TableRow>
                          <TableCell>ID</TableCell>
                          <TableCell>NAME</TableCell>
                          <TableCell>EMAIL</TableCell>
                          <TableCell>CONTACT#</TableCell>
                          <TableCell>ACTION</TableCell>
                      </TableRow>
                    </TableHead>
                        {users}
                </Table>
            </Aux>
        );
    }

}

export default Users;