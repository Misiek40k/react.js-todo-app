import React from 'react';
import { MDBFreeBird, MDBCol, MDBRow, MDBCardBody, MDBCardTitle, MDBContainer, MDBEdgeHeader } from
  "mdbreact";
import './App.scss';
import FooterComponent from './components/footer';

function App() {
  return (
    <div className="App grey lighten-4 min-vh-100">
      <MDBContainer className="mw-100 mh-100 p-0">
        <MDBEdgeHeader color="mdb-color deep-purple"></MDBEdgeHeader>
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

      <FooterComponent/>
    </div>
  );
}

export default App;
