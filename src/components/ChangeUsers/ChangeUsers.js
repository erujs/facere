import React, {Component} from 'react';
import {TextField, Button} from '@material-ui/core';
import Aux from '../../hoc/Auxiliary';

class ChangeUsers extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        fake: true
    }

    changeHandler = (event) => {
        this.setState({name: event.target.value})
        // const { users } = { ...this.state };
        // const currentState = users;
        // const { name, value } = e.target;
        // console.log(currentState)
        // currentState[name] = value;
        // this.setState({ users: currentState });
        // this.setState({ name:  });
    }

    render () {
        return (
            <Aux>
                <TextField
                    id="outlined-name-input"
                    label="Name"
                    type="text"
                    name="name"
                    margin="normal"
                    variant="outlined"
                    onChange={(event) => this.setState({name: event.target.value})}
                    value={this.props.name}
                />
                <TextField
                    id="outlined-email-input"
                    label="Email"
                    type="email"
                    name="email"
                    margin="normal"
                    variant="outlined"
                    onChange={(event) => this.setState({email: event.target.value})}
                    value={this.props.email}
                />
                <TextField
                    id="outlined-phone-input"
                    label="Phone"
                    type="text"
                    name="name"
                    margin="normal"
                    variant="outlined"
                    onChange={(event) => this.setState({phone: event.target.value})}
                    value={this.props.phone}
                />
                <Button 
                    variant="contained" 
                    onClick={() => this.props.createHandler(this.state)}>
                    Create
                </Button>
                <Button 
                    variant="contained" 
                    onClick={() => this.props.createHandler(this.state)}>
                    Update
                </Button>
                {/* <input type="text" value={this.state.name} 
                onChange={(event) => this.setState({name: event.target.value})} /> */}
            </Aux>
        )
    }
}

export default ChangeUsers;