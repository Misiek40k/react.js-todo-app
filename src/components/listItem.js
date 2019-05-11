import React, { Component } from 'react';
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';

class ListItemComponent extends Component {

    createItem(item) {
        return (
            <MDBListGroupItem href="#" hover key={item.index}>
                <MDBIcon icon="clipboard-list" className="mr-2" />
                {item.content}
            </MDBListGroupItem>
        )
    }

    render() {

        let todos = this.props.item;
        let todoItem = todos.map(this.createItem);

        return (
            <div>
                <MDBListGroup>
                    {todoItem}
                </MDBListGroup>
            </div>
        );
    }
}

export default ListItemComponent;
