import React from 'react';
import { MDBFreeBird, MDBCol, MDBRow, MDBCardBody, MDBContainer, MDBEdgeHeader } from 'mdbreact';

import TitleComponent from './components/title';
import BtnGroupComponent from './components/btnGroup';
import ListComponent from './components/list';
import FooterComponent from './components/footer';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

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
                  <BtnGroupComponent />
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
