import React, { Component } from 'react';
import {  MDBIcon } from 'mdbreact';

import ListItemComponent from './listItem';


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
                    <MDBIcon icon="tasks" className="mr-1" />
                    <span>Remaining tasks: {ifTasks}</span>
                    <ListItemComponent item={this.props.todos}/>
                </div>
            );
        }
    }
}


export default ListComponent;
