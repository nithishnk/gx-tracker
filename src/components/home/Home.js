import React, { Component } from 'react'
import Navbar from '../navbar/Navbar'
import Chart from '../home/chart/Main'
import { Button, Card, ListGroup, ListGroupItem, Dropdown } from 'react-bootstrap';
import '../home/home.css'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="container mt-5">
        <div className="row">
        <div className="col-md-8">
        <Chart/>
        </div>
        <div className="col-md-4">
        <div class="alert alert-primary mb-4">
<div class="font-weight-bold mb-2">Welcome to CoinTracker!</div>
<div>Let's get started by adding your exchanges and wallets to seamlessly pull all your data into CoinTracker.</div>
</div>
<Card>  
  <div className="card-header bg-transparent">
  <div className="d-flex">
  <div class="my-auto mr-auto font-weight-bold">Your Wallets</div>
  <a class="my-auto btn btn-light" href="/wallets">All Wallets</a>
  </div>
</div>
    <ListGroup className="list-group-flush p-2">
    
    <div className="d-flex">
    <ListGroupItem>0 Exchanges</ListGroupItem>
    <div className="my-auto justify-content-end">
    <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>
 <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</div>
</div>
<div className="">
<div class="alert alert-success p-2 text-center" role="alert ">
  Add Your Exchange accounts
</div>
    </div>
    <ListGroupItem>Vestibulum at eros
    <div className="">
    <div className="my-auto justify-content-end">
    <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>
 <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</div>
    </div>
    </ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
    
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
</div>
</div>
        </div>
        </div>
        
    )
  }
}
