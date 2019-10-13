import React from 'react';

const user = (props) => (
    <div key={props.id}>
        <h1>{props.name}</h1>
        <button onClick={this.deleteUserHandler}>Delete</button>
    </div>
);

export default user;