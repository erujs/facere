import React, { Component } from 'react';
import axios from 'axios';
import { TextField, Button } from '@material-ui/core';
import Aux from '../../hoc/Auxiliary';

const updateUser = (props) => {
    console.log(props)
    return (
        <p>{props.name}</p>
    )
}

// class UpdateUser extends Component {
//     state = {
//         name: '',
//         submit: false
//     }

//     updateHandler = (props) => {
//         console.log(props)
//         axios.put('/users/' + props.id, props)
//             .then(response => {
//                 console.log(response)
//             })
//             .catch(error => {
//                 this.setState({error: true});
//             });
//     }

//     render () {
//         return (
//             <Aux>
//                 <TextField
//                     id="outlined-name-input"
//                     label="Name"
//                     type="text"
//                     name="name"
//                     margin="normal"
//                     variant="outlined"
//                     onChange={(event) => this.setState({name: event.target.value})}
//                     value={this.state.name}
//                 />
//                 <Button 
//                     variant="contained" 
//                     onClick={() => this.props.updateHandler(this.state)}>
//                     Update
//                 </Button>
//             </Aux>
//         )
//     }
// }

export default updateUser;