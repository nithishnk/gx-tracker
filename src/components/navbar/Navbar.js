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
      <Nav.Link href="/">Dashboard</Nav.Link>
      <Nav.Link href="/Performance">Performance</Nav.Link>
      <Nav.Link href="/Wallets">Wallets</Nav.Link>
      <Nav.Link href="/Transaction">Transaction</Nav.Link>
      <Nav.Link href="/Tax  ">Tax</Nav.Link>
      <Nav.Link href="/Price">Price</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  
      </div>
    )
  }
}
