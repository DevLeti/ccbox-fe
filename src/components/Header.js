import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import logo from "../assets/logo.png";
import "./Header.css";
// import React from "react";
export function Header() {
  return (
    // py-0~5 높이 조절
    <Navbar bg="white" expand="lg" className="py-0 p-2">
      <Navbar.Brand href="/" className="mb-0">
        <img
          alt="logo"
          src={logo}
          width="50"
          height="50"
          className="d-inline-block align-middle"
        />
        CCBOX
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {/* ms-auto: 우측, me-auto: 좌측 정렬 */}
        <Nav className="ms-auto">
          <Nav.Link
            href="login"
            className="rounded bg-secondary text-white m-1 px-3"
          >
            로그인
          </Nav.Link>
          <Nav.Link
            href="register"
            eventKey="1"
            className="rounded bg-primary text-white m-1 px-3"
          >
            회원가입
          </Nav.Link>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
