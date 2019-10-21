import React, {Component} from 'react';
import { TextField, Button } from '@material-ui/core';
import Aux from '../../hoc/Auxiliary';

class UpdateUser extends Component {
    state = {
        name: this.props.name,
        fake: false
    }

    changeHandler = (event) => {
        // this.setState({name: event.target.value})
        this.props.name = event.target.value
    }

    render() {
        return (
            <Aux>
                <TextField
                    id="outlined-name-input"
                    label="Name"
                    type="text"
                    name="name"
                    margin="normal"
                    variant="outlined"
                    onChange={this.changeHandler}
                    value={this.props.name}
                />
                <Button 
                    variant="contained" 
                    onClick={() => this.props.updateHandler(this.state)}>
                    Update
                </Button>
            </Aux>
        );
    }
}

export default UpdateUser;