import React from 'react';
import { MDBContainer, MDBFooter } from 'mdbreact';


const FooterComponent = () => {
  return (
    <MDBFooter color="grey darken-3" className="font-small mt-4 fixed-bottom">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.github.com/misiek40k/"> Michał Misiejuk</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterComponent;