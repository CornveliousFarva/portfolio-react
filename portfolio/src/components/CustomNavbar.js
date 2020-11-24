import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom'

const CustomNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div class="navbar">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Greg Schuman</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/About">About</NavLink>
              </NavItem>
              <NavItem>
              <NavLink tag={Link} to="/Projects">Projects</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink tag={Link} to="Resume">Resume</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

export default CustomNavbar