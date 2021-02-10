import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./ElectionNavigation.css";
import VeraImage from "../../logos/Vera_Hor_White_800px.png";

export default function ElectionNavigation() {
  return (
    <>
      <Navbar>
        <Navbar.Brand href="/vera-mockup">
          <img
            alt=""
            src={VeraImage}
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Item>
            <NavDropdown title="Dropdown" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">
                Something else here
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
}
