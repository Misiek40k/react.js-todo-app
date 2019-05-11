import React from 'react';
import { MDBCardTitle, MDBRow, MDBCol } from 'mdbreact';

import logo from '../assets/img/logo.png';


const TitleComponent = () => {
    return (
        <div className="">
            <MDBRow className="mb-4 justify-content-center">
                <MDBCol size="5">
                    <img src={logo} className="img-fluid" alt="logo" />
                </MDBCol>
            </MDBRow>
            <MDBCardTitle>React.js TODO App</MDBCardTitle>
            <p className="pb-4">Add task / Remove last / Clear all</p>
        </div>
    );
}

export default TitleComponent;
