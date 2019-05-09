import React, { Component } from 'react';
import { MDBCardTitle } from
    "mdbreact";

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <MDBCardTitle>React.js TODO App</MDBCardTitle>
                <p className="pb-4">Add, Remove, Clear</p>
            </div>
        );
    }
}

export default HeaderComponent;
