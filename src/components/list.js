import React, { Component } from 'react';
import { MDBListGroup, MDBIcon } from 'mdbreact';

class ListComponent extends Component {
    render() {
        const ifTasks = this.props.listLength;

        if (ifTasks === 0) {
            return (
                <div>
                    <span>Congratulations! No tasks for now</span> <MDBIcon icon="smile-wink" className="mr-1" />
                </div>
            );

        } else {
            return (
                <div>
                    <span>Remaining tasks: {ifTasks}</span>
                    <MDBListGroup></MDBListGroup>
                </div>
            );
        }
    }
}


export default ListComponent;
