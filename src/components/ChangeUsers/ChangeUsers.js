import React, {Component} from 'react';
import {TextField, Button} from '@material-ui/core';
import Aux from '../../hoc/Auxiliary';

class ChangeUsers extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: '',
            name: '',
            email: '',
            phone: '',
            fake: false,
            update: false
        }
        this.initialState = this.state;
    }

    componentDidUpdate(prevProps) {
        if(prevProps !== this.props) {
            this.setState({
                id: this.props.id,
                name: this.props.name,
                email: this.props.email,
                phone: this.props.phone,
                fake: this.props.fake,
                update: this.props.update
            })
        }
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

    clickHandler = () => {
        this.props.updateHandler(this.state)
        this.setState(this.initialState);
    }
    
    render () {
        let button = 
            <Button 
                variant="contained" 
                onClick={() => this.props.createHandler(this.state)}>
                Create
            </Button>
        if(this.state.update){
            button = 
            <Aux>
                <Button 
                    variant="contained"
                    color="primary"
                    onClick={this.clickHandler}>
                    Update
                </Button>
                <Button 
                    variant="contained" 
                    onClick={() => this.setState(this.initialState)}>
                    Cancel
                </Button>
            </Aux>
        }
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
                    value={this.state.name}
                />
                <TextField
                    id="outlined-email-input"
                    label="Email"
                    type="email"
                    name="email"
                    margin="normal"
                    variant="outlined"
                    onChange={(event) => this.setState({email: event.target.value})}
                    value={this.state.email}
                />
                <TextField
                    id="outlined-phone-input"
                    label="Contact"
                    type="text"
                    name="name"
                    margin="normal"
                    variant="outlined"
                    onChange={(event) => this.setState({phone: event.target.value})}
                    value={this.state.phone}
                />
                {button}
            </Aux>
        )
    }
}

export default ChangeUsers;