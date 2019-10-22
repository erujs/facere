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
            update: false,
            validname: true,
            validemail: true,
            validphone: true,
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

    validate(name, value){
        switch(name) {
            case 'name':
                if(value.trim() !== ''){
                    return true
                };
            // break;
            case 'email':
                const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
                if(pattern.test(value)){
                  return true
                };
            // break; 
            case 'phone':
                const regexr = /[\d()x-]/;
                if(regexr.test(value)){
                    return true
                };
            default:
                return false;
        }
    }

    changeHandler = name => event => {
        this.setState({[name]: event.target.value });
        let valid = this.validate(name, event.target.value);
        this.setState({['valid'+name]: valid})
    };

    clickHandler = () => {
        this.props.updateHandler(this.state)
        this.setState(this.initialState);
    }
    
    render () {
        let button = 
            <Button 
                style={{margin: '24px 0px 8px'}}
                variant="contained" 
                onClick={() => this.props.createHandler(this.state)}>
                Create
            </Button>
        if(this.state.update){
            button = 
            <Aux>
                <Button 
                    style={{margin: '24px 8px 8px'}}
                    variant="contained"
                    color="primary"
                    onClick={this.clickHandler}>
                    Update
                </Button>
                <Button 
                    style={{margin: '24px 0px 8px'}}
                    variant="contained" 
                    onClick={() => this.setState(this.initialState)}>
                    Cancel
                </Button>
            </Aux>
        }
        return (
            <Aux>
                <TextField
                    style={{marginRight: '8px'}}
                    error={!this.state.validname}
                    id="outlined-name-input"
                    label="Name"
                    type="text"
                    name="name"
                    margin="normal"
                    variant="outlined"
                    onChange={this.changeHandler('name')}
                    value={this.state.name}
                />
                <TextField
                    style={{marginRight: '8px'}}
                    error={!this.state.validemail}
                    id="outlined-email-input"
                    label="Email"
                    type="email"
                    name="email"
                    margin="normal"
                    variant="outlined"
                    onChange={this.changeHandler('email')}
                    value={this.state.email}
                />
                <TextField
                    style={{marginRight: '8px'}}
                    error={!this.state.validphone}
                    id="outlined-phone-input"
                    label="Contact"
                    type="text"
                    name="phone"
                    margin="normal"
                    variant="outlined"
                    onChange={this.changeHandler('phone')}
                    value={this.state.phone}
                />
                {button}
            </Aux>
        )
    }
}

export default ChangeUsers;