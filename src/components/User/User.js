import React from 'react';
import Button from '@material-ui/core/Button';

const user = (props) => (
    <div key={props.data.id}>
        <p>{props.data.name}</p>
        <Button 
            variant="contained"
            >
            View
        </Button>
        <Button 
            variant="contained"
            color="primary"
            onClick={() => props.updateHandler(props.data)}>
            Update
        </Button>
        <Button 
            variant="contained" 
            color="secondary"
            onClick={() => props.deleteHandler(props.data.id)}>
            Delete
        </Button>
    </div>
);

export default user;