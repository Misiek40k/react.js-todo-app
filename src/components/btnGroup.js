import React, { Component } from 'react';
import { MDBBtn, MDBBtnGroup, MDBIcon } from 'mdbreact';

import '../styles/btnGroup.scss';


class BtnGroupComponent extends Component {

    render() {
        return (
            <div>              
                <MDBBtnGroup className="mb-4 btnGroup">               
                    <MDBBtn color="primary btn" onClick={this.props.addClick} >
                        <MDBIcon icon="plus-square" className="mr-1" />Add</MDBBtn>
                    <MDBBtn color="warning btn" onClick={this.props.deleteClick}>
                        <MDBIcon icon="minus-square" className="mr-1" />Delete</MDBBtn>
                    <MDBBtn color="danger btn" onClick={this.props.clearClick}>
                        <MDBIcon icon="eraser" className="mr-1" />Clear</MDBBtn>
                </MDBBtnGroup>
            </div>
        );
    }
}

export default BtnGroupComponent;
