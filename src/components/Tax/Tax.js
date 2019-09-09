import React, { Component } from 'react'
import { Dropdown, Card, ListGroup, DropdownButton, ListGroupItem, Table, ButtonToolbar, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import '../Tax/tax.css'
export default class componentName extends Component {
  render() {
    return (
      <div className="container mt-5">
      <div class="d-flex my-auto flex-wrap justify-content-center ">Automatically generate crypto tax forms for
      <DropdownButton className="ml-5" id="dropdown-basic-button" variant="light" title="2019 Tax year">
      <Dropdown.Item href="#/action-1">2018 Tax year</Dropdown.Item>
      <Dropdown.Item href="#/action-2">2017 Tax year</Dropdown.Item>
      <Dropdown.Item href="#/action-3">2016 Tax year</Dropdown.Item>
      <Dropdown.Item href="#/action-3">2015 Tax year</Dropdown.Item>
      <Dropdown.Item href="#/action-3">2014 Tax year</Dropdown.Item>
      <Dropdown.Item href="#/action-3">2013 Tax year</Dropdown.Item>
</DropdownButton> 
       </div>
       <div className="d-flex my-auto flex-wrap justify-content-center ">
       <div class="mt-5 alert alert-info d-inline-block font-weight-bold mt-3">
        <a href="#"><Link to="/Chooseplan">
        Choose a tax plan</Link></a>
        to get your tax summary &amp; reports.
</div>
       </div>
       <div className="row mt-5">
       <div className="col-md-7">
       <Card>  
  <div className="card-header bg-transparent">
  <div className="d-flex">
  <div class="small font-weight-bold">TRANSACTION HISTORY</div>
  </div>
</div>
    <ListGroup className="list-group-flush">
    <ListGroupItem> <div className="row"> <p className="mr-auto my-auto ml-3">Connected exchanges and wallets</p>
    <div className="">
    <a class="my-auto btn btn-light" href="/wallets">View all Wallets and Exchanges</a>
</div>
</div>
<div class="text-muted small">
0 exchanges, 0 crypto wallets, 0 imported wallets
</div>
    </ListGroupItem>
    <ListGroupItem><div className="row"> 
    <p className="mr-auto my-auto ml-3">Transactions</p>
    <div className="">
    <a class="my-auto btn btn-light" href="/wallets">View All Transaction</a>
</div>
    </div>
    <div>
<a class="badge badge-info px-2 mr-1" href="#">0 transactions</a>
<a class="badge badge-info px-2 mr-1" href="#">0 sent</a>
<a class="badge badge-info px-2 mr-1" href="#">0 received</a>
</div>
    </ListGroupItem>
    <ListGroupItem><div className="d-flex"> 
    <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
    <div class="small ml-3"> CoinTracker needs your <strong>complete</strong> transaction history across all exchanges and all off-exchange wallets to correctly calculate your capital gains. Please thoroughly review your <a href="/Transactions">transactions</a> for completeness &amp; accuracy before filing your tax reports.</div> 
    </div>
    </ListGroupItem>
  </ListGroup>
</Card>
        </div>
        <div className="col-md-5">
        <Card style={{ width: '100%' }}>
  <ListGroup variant="flush">
    <ListGroup.Item><p class="small font-weight-bold">CAPITAL GAINS<i class="ml-3 fa fa-question-circle" aria-hidden="true"></i></p></ListGroup.Item>
    <ListGroup.Item>
    <Table borderless>
  <thead>
    <tr>
      <th></th>
      <th><p class="small font-weight-bold">Short term</p></th>
      <th><p class="small font-weight-bold">Long term</p></th>
    </tr>
  </thead>
  <tbody>
    <tr>
     <td>Total Proceeds</td>
      <td>₹0.00</td>
      <td>₹0.00</td>
    </tr>
    <tr>
    
      <td>Total Cost Basis</td>
      <td>₹0.00</td>
      <td>₹0.00</td>
    </tr>
    <tr>
    
      <td>Total Capital Gains</td>
      <td>₹0.00</td>
      <td>₹0.00</td>
    </tr>
  </tbody>
</Table>

    </ListGroup.Item>
    
  </ListGroup>
</Card>
        </div>
        <div className="col-md-7 mt-3">
        <Card>  
  <div className="card-header bg-transparent">
  <div className="d-flex">
  <div class="my-auto mr-auto font-weight-bold"><p class="small font-weight-bold">TAX REPORTS</p></div>
  <a class="my-auto btn btn-sm btn-outline-primary" href="#">Share With Accountant</a>
  </div>
</div>
    <ListGroup className="list-group-flush p-2">
    <ListGroupItem> <div className="row"> <p className="mr-auto my-auto">Transaction History CSV</p>
    <div className="">
    <a class="my-auto btn btn-light" href="#">Download</a>
</div>
</div>
    </ListGroupItem>
    <div className="disable-section">
    <ListGroupItem> <div className="row"> <p className="mr-auto my-auto">Capital Gains CSV</p>
    <div className="">
    <a class="my-auto btn btn-light" href="#">Download</a>
</div>
</div>
    </ListGroupItem>
    <ListGroupItem> <div className="row"> <p className="mr-auto my-auto">TurboTax Online File</p>
    <div className="">
    <p class="my-auto small">Coming later in 2019</p>
</div>
</div>
    </ListGroupItem>
    <ListGroupItem> <div className="row"> <p className="mr-auto my-auto">TurboTax CD/Download File</p>
    <div className="">
    <p class="my-auto small">Coming later in 2019</p>
</div>
</div>
    </ListGroupItem>
    <ListGroupItem> <div className="row"> <p className="mr-auto my-auto">TaxAct File</p>
    <div className="">
    <p class="my-auto small">Coming later in 2019</p>
</div>
</div>
    </ListGroupItem>
    <ListGroupItem> <div className="row"> <p className="mr-auto my-auto">IRS Form 8949</p>
    <div className="">
    <p class="my-auto small">Coming later in 2019</p>
</div>
</div>
    </ListGroupItem>
    <ListGroupItem> <div className="row"> <p className="mr-auto my-auto">Condensed IRS Form 8949</p>
    <div className="">
    <p class="my-auto small">Coming later in 2019</p>
</div>
</div>
    </ListGroupItem>
    <ListGroupItem> <div className="row"> <p className="mr-auto my-auto">IRS Schedule D(Form 1040)</p>
    <div className="">
    <p class="my-auto small">Coming later in 2019</p>
</div>
</div>
    </ListGroupItem>
    </div>
  </ListGroup>
  
</Card>
<div className="choose-position">
  <ButtonToolbar>
  <Button className="p-3 mb-2 font-weight-bold" variant="primary"><Link className="link-text-clr" to="/Chooseplan">Choose Your TAX Plan</Link></Button>
  </ButtonToolbar>
  <a className="ml-3" href="https://s3-us-west-1.amazonaws.com/coin-tracker-public/static/files/sample_f8949.pdf" target="_blank" rel="noopener noreferrer">Sample IRS Form 8949</a>
  </div>
        </div>
        <div className="col-md-5 mt-3">
        <Card style={{ width: '100%' }}>
  <ListGroup variant="flush">
    <ListGroup.Item>
    <div className=" bg-transparent">
  <div className="d-flex">
  <div class="my-auto mr-auto font-weight-bold"><p class="small font-weight-bold">TAXABLE INCOME <i class="ml-3 fa fa-question-circle" aria-hidden="true"> </i></p> </div>
  <p class="my-auto">₹0.00</p>
  </div>
</div>
<div class="text-muted small">
If you received crypto through airdrops, forks, mining, or payments, manually mark such transactions to see the total income here.
</div>
    </ListGroup.Item>
    <ListGroupItem> 
      <div className="m-3">
      <div className="row"> <p className="mr-auto my-auto small">Airdrops</p>
    <div className="">
    <p class="my-auto">₹0.00</p>
</div>
</div>
<div className="row mt-3"> <p className="mr-auto my-auto small">Forks</p>
    <div className="">
    <p class="my-auto">₹0.00</p>
</div>
</div>
<div className="row mt-3"> <p className="mr-auto my-auto small">Mining</p>
    <div className="">
    <p class="my-auto">₹0.00</p>
</div>
</div>
<div className="row mt-3"> <p className="mr-auto my-auto small">Payments</p>
    <div className="">
    <p class="my-auto">₹0.00</p>
</div>
</div>
</div>
    </ListGroupItem>
    
  </ListGroup>
  
</Card>
        </div>
        </div>
      </div>

    )
  }
}
