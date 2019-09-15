import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
      this.setState({
          isOpen: !this.state.isOpen
      });
  }

  render() {
   return (
     < div style = {headerStyle}>
       <Navbar color="" dark expand="sm" className="mb-5">
         <Container>
           <NavbarBrand href = "#home">
             <img
                src="/Users/vukdukic/projects/anablock/pwa1.5/public/img/LogosWorkingFiles/4white.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Anablock"
              />
             </NavbarBrand>
           <NavbarToggler onClick={this.toggle} />
           <Collapse isOpen={this.state.isOpen} navbar>
             <Nav className="ml-auto" navbar>
               <NavItem>
                 <NavLink href="https://github.com/vukdukic">
                   
                </NavLink>
               </NavItem>
               <NavItem>
                Blog
               </NavItem>
             </Nav>
           </Collapse>
         </Container>
       </Navbar>
     </div>
   );
  }
}

const headerStyle = {
  background: '#000',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

export default AppNavbar;