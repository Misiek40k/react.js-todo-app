import React from 'react';
import { MDBFreeBird, MDBCol, MDBRow, MDBCardBody, MDBContainer, MDBEdgeHeader } from 'mdbreact';

import TitleComponent from './title';
import BtnGroupComponent from './btnGroup';
import ListComponent from './list';
import FooterComponent from './footer';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: []
    };

    this.addClick = this.addClick.bind(this);
    this.deleteClick = this.deleteClick.bind(this);
    this.clearClick = this.clearClick.bind(this);
  }

  addClick = () => {
    const todo = {
      index: this.state.todos.length + 1,
      content: `Task number ${this.state.todos.length + 1}`
    };

    const newTodo = this.state.todos.concat(todo);

    this.setState({
      todos: newTodo
    });

    console.log(this.state.todos);
  };

  deleteClick = () => {
    console.log('delete');
  };

  clearClick = () => {
    console.log('clear');
  };

  render() {
    return (
      <div className="grey lighten-4 min-vh-100 text-center">
        <MDBContainer className="mw-100 mh-100 p-0">
          {/* edge header */}
          <MDBEdgeHeader color="deep-purple"></MDBEdgeHeader>

          {/* Main container */}
          <MDBFreeBird>
            <MDBRow className="p-3">
              <MDBCol md="8" lg="7" className="mx-auto mb-5 float-none white z-depth-2 rounded">
                <MDBCardBody>

                  <TitleComponent />
                  <BtnGroupComponent
                    addClick={this.addClick}
                    deleteClick={this.deleteClick}
                    clearClick={this.clearClick}
                  />
                  <ListComponent />

                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBFreeBird>

          {/* footer */}
          <FooterComponent />
        </MDBContainer>
      </div>
    );
  }
}

export default App;
