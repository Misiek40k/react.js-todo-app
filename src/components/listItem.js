import React, { Component } from 'react';
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';


class ListItemComponent extends Component {

    createItem(item) {
        return (
            <div key={item.index}>
                <MDBListGroupItem href="#" hover key={item.index}>
                    <MDBIcon key={item.index} icon="clipboard-list" className="mr-2" />
                    {item.content}
                </MDBListGroupItem>
            </div>
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
