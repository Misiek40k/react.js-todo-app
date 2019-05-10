import React, { Component } from 'react';
import { MDBListGroup, MDBListGroupItem } from 'mdbreact';

class ListComponent extends Component {
    render() {
        return (
            <div>
                <MDBListGroup>
                    <MDBListGroupItem href="#" hover>1</MDBListGroupItem>
                    <MDBListGroupItem href="#" hover>2</MDBListGroupItem>
                    <MDBListGroupItem href="#" hover>3</MDBListGroupItem>
                    <MDBListGroupItem href="#" hover>4</MDBListGroupItem>
                    <MDBListGroupItem href="#" hover>5</MDBListGroupItem>
                </MDBListGroup>
            </div>
        );
    }
}

export default ListComponent;
