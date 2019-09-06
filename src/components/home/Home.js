import React, { Component} from 'react'
import {Link} from 'react-router-dom'
import Chart from '../home/chart/Main'
import {Card, ListGroup, ListGroupItem, Dropdown } from 'react-bootstrap';
import '../home/home.css'
import {ProductConsumer} from '../../contextAPI/Context'

export default class Home extends Component {
  render() {
    return (
    <ProductConsumer>
{((value) => {
const {exchanges, exvalue, walletvalue, wallet} = value;
return (
      <div>
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
    
    
    <ListGroupItem> <div className="row"> <p className="mr-auto my-auto">{exvalue} Exchanges</p>
    <div className="">
    <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Add Exchange
  </Dropdown.Toggle>

 <Dropdown.Menu>
{exchanges.map((addexchange)=>
  <>
  
  <Dropdown.Item><Link to="/addaccount">{addexchange.exchangename} </Link></Dropdown.Item>

  </>
)}
    <hr></hr>
    <Dropdown.Item >More...(300+ Exchanges)</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</div>
</div>
<div className="">
<div class="mt-3 mb-1 alert alert-success text-center p-2" role="alert ">
  Add Your Exchange accounts
</div>
    </div>
    </ListGroupItem>
    <ListGroupItem><div className="row"> 
    <p className="mr-auto my-auto">{walletvalue} local wallets</p>
    
    <div className="">
    <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
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
    </div>
    <div className="wid">
<div class="mt-3 mb-1 alert alert-success text-center p-2" role="alert ">
  Add Your Crypto Wallets
</div>
    </div>
    </ListGroupItem>
    <ListGroupItem><div className="row"> 
    <p className="mr-auto my-auto">
    0 imported wallets</p>
    </div>
    </ListGroupItem>
    <ListGroupItem><div className="row"> 
    <p className="mr-auto my-auto">
    Add Add your non-crypto accounts?</p>
    
    <a href="#">Banking & Brokerge Accounts</a>
    </div>
    </ListGroupItem>
  </ListGroup>
</Card>
</div>
</div>
        </div>
        <div className="container">
        <div className="row">
        <div className="col-md-8 mt-4">
        <div class="card mb-4">
<div class="card-header d-flex bg-transparent">
<div class="my-auto mr-auto font-weight-bold">Your Portfolio</div>
<a class="my-auto btn btn-light mr-3" href="/performance">Performance</a>
<a class="my-auto btn btn-light" href="/share">Share</a>
</div>
<div class="card-body p-1 p-sm-2" style={{overflow: "auto"}}>
<div class="p-3 text-muted">Nothing in your portfolio yet.</div>
</div>
</div>  
        </div>
        <div className="col-md-4">
<Card>  
  <div className="card-header bg-transparent">
  <div className="d-flex">
  <div class="my-auto mr-auto font-weight-bold">Your crypto Taxes</div>
  </div>
</div>
    <ListGroup className="list-group-flush p-2">
    <ListGroupItem> <div className="row"> <p className="mr-auto my-auto">2019</p>
    <div className="">
    <a class="my-auto btn btn-light" href="/wallets">Get started</a>
</div>
</div>
    </ListGroupItem>
    <ListGroupItem><div className="row"> 
    <p className="mr-auto my-auto">2018</p>
    <div className="">
    <a class="my-auto btn btn-light" href="/wallets">Get started</a>
</div>
    </div>
    </ListGroupItem>
    <ListGroupItem><div className="row"> 
    <p className="mr-auto my-auto">
    Thinking of executing a transaction? </p>
    
    <a href="#">Preview Tax Impact</a>
    </div>
    </ListGroupItem>
  </ListGroup>
</Card>
<Card className="mt-4">  
  <div className="card-header bg-transparent">
  <div className="d-flex">
  <div class="my-auto mr-auto font-weight-bold">Portfolio Insights</div>
  </div>
</div>
    <ListGroup className="list-group-flush p-2">
    <ListGroupItem> <div className="row"> <p className="mr-auto my-auto">Funds on Exchange</p>
    <div className="">
    
</div>
</div>
    </ListGroupItem>
    <ListGroupItem><div className="row"> 
    <p className="mr-auto my-auto">
    You currently don't have opportunities to harvest tax losses. </p>
    
    <a href="#">Tax loss Harvesting</a>
    </div>
    </ListGroupItem>
    <ListGroupItem><div className="row"> 
    <p className="mr-auto my-auto">
    Want to automatically purchase cryptocurrency on a regular basis? </p>
    
    <a href="#">Dollor cost Averaging</a>
    </div>
    </ListGroupItem>
  </ListGroup>
</Card>
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
