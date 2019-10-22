import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Button} from '@material-ui/core';
import Aux from '../../hoc/Auxiliary';

class ViewUser extends Component {
    render() {
        console.log(this.props)
        return(
            <Aux>
                <h2>{this.props.location.state.name}</h2>
                <h2>Email: {this.props.location.state.email}</h2>
                <h2>Contact: {this.props.location.state.phone}</h2>
                <Link 
                    to='/' 
                    style={{textDecoration: 'none'}}>
                    <Button variant="outlined">Back</Button>
                </Link>
            </Aux>  
        );
    }
};

export default ViewUser;