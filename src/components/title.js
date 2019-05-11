import React from 'react';
import { MDBCardTitle } from 'mdbreact';


const TitleComponent = () => {
    return (
        <div>
            <MDBCardTitle>React.js TODO App</MDBCardTitle>
            <p className="pb-4">Add task / Delete last / Clear all</p>
        </div>
    );
}

export default TitleComponent;
