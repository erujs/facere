import React, { Component } from 'react';
import axios from 'axios';
import { TextField, Button } from '@material-ui/core';
import Aux from '../../hoc/Auxiliary';

class CreateUser extends Component {
    state = {
        name: '',
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
                    // className={classes.textField}
                    type="text"
                    name="name"
                    // autoComplete="name"
                    margin="normal"
                    variant="outlined"
                    onChange={this.changeHandler}
                />
                <Button 
                    variant="contained" 
                    onClick={() => this.props.createHandler(this.state)}>
                    Create
                </Button>
                {/* <input type="text" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} /> */}
            </Aux>
        )
    }
}

export default CreateUser;