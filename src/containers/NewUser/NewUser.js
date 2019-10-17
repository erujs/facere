import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class NewUser extends Component {
    state = {
        name: '',
        submit: false
    }

    userDataHandler = () => {
        const data = {
            name: this.state.name
        }
        axios.post('/user/', data)
            .then(response => {
                this.setState({submit: true});
            });
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
            <div>
                <form>
                    <TextField
                        id="outlined-email-input"
                        label="Name"
                        // className={classes.textField}
                        // type="email"
                        name="name"
                        // autoComplete="email"
                        margin="normal"
                        variant="outlined"
                        onChange={this.changeHandler}
                    />
                    <Button 
                        variant="contained" 
                        onClick={() => this.props.createHandler(this.state)}>
                        Create
                    </Button>
                </form>
                {/* <input type="text" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} /> */}
            </div>
        )
    }
}

export default NewUser;