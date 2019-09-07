import React, { Component } from 'react'
import { Dropdown, Card, ListGroup, Form,FormControl, Button, DropdownButton } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../../contextAPI/Context'

export default class componentName extends Component {
  render() {
    return (
      <ProductConsumer>
      {((value) => {
      const {exchanges, exvalue, walletvalue, wallet} = value;
        return (

      <div class="mt-5 p-2">
        <div class="text-center mb-4 d-flex flex-wrap justify-content-center">
        <Dropdown>
  <Dropdown.Toggle variant="light" id="dropdown-basic">
    Add Exchange
  </Dropdown.Toggle>
<Dropdown.Menu>
{exchanges.map((addexchangewallet)=>
  <> 
  <Dropdown.Item><Link to="/addaccount">{addexchangewallet.exchangename} </Link></Dropdown.Item>
  </>
)}
    <hr></hr>
    <Dropdown.Item >More...(300+ Exchanges)</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
<div className="pl-2">
<Dropdown>
  <Dropdown.Toggle variant="light" id="dropdown-basic">
    Add Wallet
  </Dropdown.Toggle>
 <Dropdown.Menu>
   {wallet.map((addwallet)=>
   <>
    <Dropdown.Item><Link to="/addwallet">{addwallet.walletname}</Link></Dropdown.Item>
    </>
   )}
  </Dropdown.Menu>
</Dropdown>
</div>
<div className="pl-2">
<Dropdown>
<Dropdown.Toggle variant="light" id="dropdown-basic">
  Transactions
</Dropdown.Toggle>

<Dropdown.Menu>
  <Dropdown.Item href="#/action-1">Add Transaction</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Import from CSV</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Download CSV</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</div>
</div>
<div className="container">
<Card style={{ width: '100%' }}>
  <ListGroup variant="flush">
    <ListGroup.Item>
      <div className="text-center mb-4 d-flex flex-wrap justify-content-center">
      <Form inline>
      <FormControl type="text" placeholder="Filter by Crypto" className="mr-sm-2" />
      <Button variant="light">Search</Button>
    </Form> 
    </div>
    <div className="text-center mb-4 d-flex flex-wrap justify-content-center">
    <div className="pr-3">
    <a class="btn btn-light btn-sm" href="#">all</a>
    </div>
    <div className="pr-3">
    <DropdownButton id="dropdown-basic-button" variant="light" title="category">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>
</div>
<div className="pr-3">
<DropdownButton id="dropdown-basic-button" variant="light" title="type">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>
</div>
<div className="pr-3">
<DropdownButton id="dropdown-basic-button" variant="light" title="other">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton> 
</div>
<div className="pr-3">
<a class=" btn btn-light btn-sm" href="#">2018</a>
</div>
<div className="pr-3">
<a class=" btn btn-light btn-sm" href="#">need review</a>
</div>
</div>
    </ListGroup.Item>
    <div className="text-center d-flex p-1 justify-content-center">
    <ListGroup.Item>No transactions found.</ListGroup.Item>
    </div>
  </ListGroup>

</Card>
</div>
      </div>
      )
      })}
       </ProductConsumer>
    )
  }
}
