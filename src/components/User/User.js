import React from 'react';
import Button from '@material-ui/core/Button';

const user = (props) => (
    <div key={props.id}>
        <p>{props.name}</p>
        <Button 
            variant="contained"
            color="primary"
            onClick={() => props.updateHandler(props.id)}>
            Update
        </Button>
        <Button 
            variant="contained" 
            color="secondary"
            onClick={() => props.deleteHandler(props.id)}>
            Delete
        </Button>
    </div>
);

export default user;