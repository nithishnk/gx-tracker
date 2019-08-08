import React, { Component } from 'react'
import { Button, Card, ListGroup, ListGroupItem, Dropdown } from 'react-bootstrap';
import SectionTwoCards from '../wallets/SectionTwoCards'
export default class Wallet extends Component {
  render() {
    return (
      <div className="container mt-5">
      <div className="d-flex justify-content-center">
      <div className="p-2">
      <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Add Exchange
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</div>
<div className="p-2">
<Dropdown>
<Dropdown.Toggle variant="success" id="dropdown-basic">
  Add Wallet
</Dropdown.Toggle>

<Dropdown.Menu>
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</div>
<div className="p-2">
<Dropdown>
<Dropdown.Toggle variant="success" id="dropdown-basic">
  Transactions
</Dropdown.Toggle>

<Dropdown.Menu>
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</div>
<div className="p-2">
<a class="my-auto btn btn-light" href="/wallets">Sync Wallets</a>
</div>

</div>
      </div>
    )
  }
}
