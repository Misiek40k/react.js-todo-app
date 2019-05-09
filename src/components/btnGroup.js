import React, { Component } from 'react';
import { MDBBtn, MDBBtnGroup} from "mdbreact";

class BtnGroupComponent extends Component {
    render() {
        return (
            <div>
                <MDBBtnGroup className="mb-4">
                    <MDBBtn color="primary">Add</MDBBtn>
                    <MDBBtn color="warning">Remove last</MDBBtn>
                    <MDBBtn color="danger">Clear</MDBBtn>
                </MDBBtnGroup>
            </div>
        );
    }
}

export default BtnGroupComponent;
