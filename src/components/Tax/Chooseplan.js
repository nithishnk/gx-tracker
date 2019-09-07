import React, { Component } from 'react'
import { Dropdown, Card, ListGroup, DropdownButton, ListGroupItem, Table, ButtonToolbar, Button } from 'react-bootstrap';
import '../Tax/chooseplan.css'
export default class componentName extends Component {

render() {
    return (
      <div className="container">
       <h1 class="mt-5 h3 text-center">
<div class="font-weight-bold pt-4">Get your crypto taxes done today</div>
</h1> 
<div className="mt-4 text-center dropdown-text">
<DropdownButton id="dropdown-basic-button" variant="light" title="2019 Tax year">
      <Dropdown.Item href="#/action-1">2018 Tax year</Dropdown.Item>
      <Dropdown.Item href="#/action-2">2017 Tax year</Dropdown.Item>
      <Dropdown.Item href="#/action-3">2016 Tax year</Dropdown.Item>
      <Dropdown.Item href="#/action-3">2015 Tax year</Dropdown.Item>
      <Dropdown.Item href="#/action-3">2014 Tax year</Dropdown.Item>
      <Dropdown.Item href="#/action-3">2013 Tax year</Dropdown.Item>
</DropdownButton> 
</div>
<div class="h6 mt-5 mb-5 text-center text-muted">
  Track your portfolio for <strong>free</strong>
</div>
<div className="row">
<div className="col-md-3">
<Card className="h-100">
  <Card.Body>
    <Card.Title className="text-center text-muted mb-3">HOBBYIST</Card.Title>
    <Card.Subtitle className=" text-center">
    <span class="text-muted align-top">$</span>
    <span class="h3 font-weight-normal text-center font-weight-bold">49</span>
    </Card.Subtitle>
    <Card.Text class="text-muted text-center small font-weight-bold p-3">
    One-time payment for the tax year
    </Card.Text>
    <Card.Text class="text-center small font-weight-bold ">
    <span class="font-weight-bold">100 </span>
     transactions
    </Card.Text>
    <div class="alert alert-info small text-center font-weight-bold m-0 p-2" style={{ color: "#4527A0", backgroundColor: "#D1C4E9", borderColor : "#B39DDB"}}>
Recommended for your transaction count
</div>
<div className="mt-3">
<a id="tax-package-btn-4" class="btn btn-primary btn-block text-uppercase font-weight-bold py-2" href="" style={{
    backgroundColor: "#607D8B", borderColor: "#607D8B", fontSize: "14px"}}>
Choose Plan
</a>
</div>
  </Card.Body>
</Card>
</div>
<div className="col-md-3">
<Card className="h-100">
  <Card.Body>
    <Card.Title className="text-center mb-3" style={{color:"#0091EA"}}>TRADER</Card.Title>
    <Card.Subtitle className=" text-center">
    <span class="text-muted align-top">$</span>
    <span class="h3 font-weight-normal text-center font-weight-bold">199</span>
    </Card.Subtitle>
    <Card.Text class="text-muted text-center small font-weight-bold p-3">
    One-time payment for the tax year
    </Card.Text>
    <Card.Text class="text-center small font-weight-bold mb-5">
    <span class="font-weight-bold">1,500 </span>
     transactions
    </Card.Text>
<div className="card-button-bottom">
<a id="tax-package-btn-4" class="btn btn-primary btn-block text-uppercase font-weight-bold py-2" href="#" style={{
    backgroundColor: "#0091EA", borderColor: "#607D8B", fontSize: "14px"}}>
Choose Plan
</a>
</div>
  </Card.Body>
</Card>
</div>
<div className="col-md-3">
<Card className="h-100">
  <Card.Body>
    <Card.Title className="text-center mb-3" style={{color:"#6200EA"}}>Pro</Card.Title>
    <Card.Subtitle className=" text-center">
    <span class="text-muted align-top">$</span>
    <span class="h3 font-weight-normal text-center font-weight-bold">499</span>
    </Card.Subtitle>
    <Card.Text class="text-muted text-center small font-weight-bold p-3">
    One-time payment for the tax year
    </Card.Text>
    <Card.Text class="text-center small font-weight-bold mb-5">
    <span class="font-weight-bold">5,000 </span>
     transactions
    </Card.Text>
<div className="card-button-bottom">
<a id="tax-package-btn-4" class="btn btn-primary btn-block text-uppercase font-weight-bold py-2" href="#" style={{
    backgroundColor: "#6200EA", borderColor: "#607D8B", fontSize: "14px"}}>
Choose Plan
</a>
</div>
  </Card.Body>
</Card>
</div>
<div className="col-md-3">
<Card className="h-100">
  <Card.Body>
    <Card.Title className="text-center mb-3" style={{color:"#827717"}}>SATOSHI</Card.Title>
    <Card.Subtitle className="text-center">
    <span class="text-muted align-top">$</span>
    <span class="h3 font-weight-normal text-center font-weight-bold">499</span>
    </Card.Subtitle>
    <Card.Text class="text-muted text-center small font-weight-bold p-3">
    One-time payment for the tax year
    </Card.Text>
    <Card.Text class="text-center small font-weight-bold mb-5">
    <span class="font-weight-bold">5,000 </span>
     transactions
    </Card.Text>
    
<div className="card-button-bottom">
<a id="tax-package-btn-4" class="btn btn-primary btn-block text-uppercase font-weight-bold py-2" href="#" style={{
    backgroundColor: "#827717", borderColor: "#607D8B", fontSize: "14px"}}>
Choose Plan
</a>
</div>
  </Card.Body>
</Card>
</div>
</div>
      </div>
    )
  }
}
