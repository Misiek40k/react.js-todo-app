import React, { Component } from 'react';
import { MDBBtn, MDBBtnGroup} from 'mdbreact';

import '../styles/btnGroup.scss';

class BtnGroupComponent extends Component {
    render() {
        return (
            <div>
                <MDBBtnGroup className="mb-4 btnGroup">
                    <MDBBtn color="primary btn">Add</MDBBtn>
                    <MDBBtn color="warning">Delete last</MDBBtn>
                    <MDBBtn color="danger">Clear</MDBBtn>
                </MDBBtnGroup>
            </div>
        );
    }
}

export default BtnGroupComponent;
