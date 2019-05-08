import React from 'react';
import { MDBFreeBird, MDBCol, MDBRow, MDBCardBody, MDBCardTitle, MDBContainer, MDBEdgeHeader } from
  "mdbreact";
import './App.scss';

function App() {
  return (
    <div className="App grey lighten-2">
      <MDBContainer className="mw-100 mh-100 p-0">
        <MDBEdgeHeader color="mdb-color deep-purple darken-2"></MDBEdgeHeader>
        <MDBFreeBird>
          <MDBRow className="p-3">
            <MDBCol md="8" lg="7" className="mx-auto float-none white z-depth-2 rounded">
              <MDBCardBody>
                <MDBCardTitle>React.js TODO App</MDBCardTitle>
                <p className="pb-4">Add, Remove, Clear</p>              
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBFreeBird>
      </MDBContainer>
    </div>
  );
}

export default App;
