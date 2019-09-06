import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../../contextAPI/Context'
export default class Wallet extends Component {
  render() {
    return (
      <ProductConsumer>
  {((value) => {
  const {exchanges, exvalue} = value;
    return (
      <div className="container mt-5">
      <div className="d-flex justify-content-center">
      <div className="p-2">
      <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
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
<div className="row mt-5">
<div className="col-md-5">

<div class="card mb-5 d-none d-lg-block" style={{ overflow_y: "scroll" , min_height: "300px" , max_height:" calc(100vh - 200px)" }}>
<div class="card-header small font-weight-bold">
EXCHANGES
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item text-muted py-3">
{exvalue} added
</li>
</ul>
<div class="card-header small font-weight-bold">
CRYPTO WALLETS
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item text-muted py-3">
None added
</li>
</ul>
<div class="card-header small font-weight-bold">
IMPORTED WALLETS
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item text-muted py-3">
None added
</li>
</ul>
<div class="card-header small font-weight-bold">
UNCATEGORIZED WALLET
</div>
<ul class="list-group list-group-flush">
<a href="#" data-href="#" data-name="" class="list-group-item list-group-item-action d-flex p-0 wallet-button active-wallet">
<div>
<div class="wallet-stripe h-100" style={{width: "3px"}}></div>
</div>
<div class="d-flex w-100 px-3 py-4">
<div class="my-auto mr-3">
<div class="d-flex">
<div class="my-auto">Uncategorized Wallet</div>
</div>
</div>
<div class="my-auto ml-auto">₹0.00</div>
</div>
</a>
</ul>
</div>
<div class="card mb-5 d-block d-lg-none" style={{ overflow_y : "scroll", height: "300px" }}>
<div class="card-header small font-weight-bold">
EXCHANGES
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item text-muted py-3">
None added
</li>
 </ul>
<div class="card-header small font-weight-bold">
CRYPTO WALLETS
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item text-muted py-3">
None added
</li>
</ul>
<div class="card-header small font-weight-bold">
IMPORTED WALLETS
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item text-muted py-3">
None added
</li>
</ul>
<div class="card-header small font-weight-bold">
UNCATEGORIZED WALLET
</div>
<ul class="list-group list-group-flush">
<a href="/wallets/4/00000000-0000-0000-0000-000000000000/content" data-href="/wallets/4/00000000-0000-0000-0000-000000000000" data-name="" class="list-group-item list-group-item-action d-flex p-0 wallet-button active-wallet">
<div>
<div class="wallet-stripe h-100" style={{width: "3px"}}></div>
</div>
<div class="d-flex w-100 px-3 py-4">
<div class="my-auto mr-3">
<div class="d-flex">
<div class="my-auto">Uncategorized Wallet</div>
</div>
</div>
<div class="my-auto ml-auto">₹0.00</div>
</div>
</a>
</ul>
</div>
</div>
<div className="col-md-7">
<div class="card mb-4">
<div class="card-header d-flex">
<div class="my-auto mr-3">
<div>Uncategorized Wallet</div>
<a class="badge badge-light font-weight-normal px-2" href="/transactions?q=is%3Auncategorized">0 Transactions</a>
</div>
<div class="my-auto ml-auto">₹0.00</div>
<div class="my-auto ml-3">
<div class="dropdown">
<a class="btn btn-light dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></a>
<div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
<a class="dropdown-item" href="/add_transaction?public_wallet_id=00000000-0000-0000-0000-000000000000">Add Manual Transaction</a>
<a class="dropdown-item" href="/transactions?q=is%3Auncategorized">
View Transactions</a>
</div>
</div>
</div>
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item text-muted py-3">
No coins
</li>
</ul>
</div>
</div>
</div>
      </div>
      )
    })}
    </ProductConsumer> 
    )
  }
}
