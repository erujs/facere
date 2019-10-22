import React, {Component} from 'react';
import {Button} from '@material-ui/core';

class ViewUser extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return(
            <p>{this.props.location.state.name} sample</p>
        );
    }
};

export default ViewUser;