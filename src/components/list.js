import React, { Component } from 'react';
import { MDBAnimation, MDBIcon } from 'mdbreact';

import ListItemComponent from './listItem';


class ListComponent extends Component {
    render() {
        const ifTasks = this.props.listLength;

        if (ifTasks === 0) {
            return (
                <div>
                    <MDBAnimation type="zoomIn" >
                        <span>Congratulations! No tasks for now</span> <MDBIcon icon="smile-wink" className="mr-1" />
                    </MDBAnimation>
                </div>
            );

        } else {
            return (
                <div>
                    <MDBAnimation type="fadeIn" >
                        <MDBIcon icon="tasks" className="mr-1" />
                        <span>Remaining tasks: {ifTasks}</span>
                    </MDBAnimation>
                    <ListItemComponent item={this.props.todos} />
                </div>
            );
        }
    }
}


export default ListComponent;
