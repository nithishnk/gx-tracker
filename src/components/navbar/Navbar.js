import React, { Component } from 'react'
import  {Nav, Navbar} from 'react-bootstrap';
import '../navbar/navbar.css'

export default class Header extends Component {
  render() {
    return (
      <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">GX Tracker</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Dashboard</Nav.Link>
      <Nav.Link href="#pricing">Performance</Nav.Link>
      <Nav.Link href="#pricing">Wallets</Nav.Link>
      <Nav.Link href="#pricing">Transaction</Nav.Link>
      <Nav.Link href="#pricing">Tax</Nav.Link>
      <Nav.Link href="#pricing">Price</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  
      </div>
    )
  }
}
