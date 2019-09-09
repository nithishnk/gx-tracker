import React, { Component } from 'react'
import { Dropdown, Card, ListGroup, DropdownButton} from 'react-bootstrap';
import '../Tax/chooseplan.css'
import tickimage from '../../Images/tick.png'
import rightimage from '../../Images/right.png'
import { Link } from 'react-router-dom'
export default class componentName extends Component {

  state={
    cardlist:[
      {
        id:1, cardtitle:"HOBBYIST", currency:"$", price:"49", content:"One-time payment for the tax year", transactionNum:"100", transactionContent:"transactions", alert:"Recommended for your transaction count", select:"CHOOSE PLAN", 
        cardtitlestyle: "text-center mt-3 h3 customcardstyle1",
        currencystyle: "text-muted align-top", 
        pricestyle: "h3 font-weight-normal text-center font-weight-bold",
        contentstyle: "text-muted text-center small font-weight-bold p-3",
        transactionNumstyle: "font-weight-bold",
        alertstyle: "alert alert-info small text-center font-weight-bold m-0 p-2  customalertstyle",
        selectstyle:"btn btn-primary btn-block text-uppercase font-weight-bold py-2 customselectstyle1",
        pathname:"/Checkout"
      },
      {
        id:2, cardtitle:"TRADER", currency:"$", price:"199", content:"One-time payment for the tax year", transactionNum:"1,500", transactionContent:"transactions", select:"CHOOSE PLAN",
        cardtitlestyle: "text-center mt-3 h3 customcardstyle2",
        currencystyle: "text-muted align-top", 
        pricestyle: "h3 font-weight-normal text-center font-weight-bold",
        contentstyle: "text-muted text-center small font-weight-bold p-3",
        transactionNumstyle: "font-weight-bold",
        selectstyle:"btn btn-primary btn-block text-uppercase font-weight-bold py-2 customselectstyle2",  
      },
      {
        id:3, cardtitle:"PRO", currency:"$", price:"499", content:"One-time payment for the tax year", transactionNum:"5,000", transactionContent:"transactions",   select:"CHOOSE PLAN",
        cardtitlestyle: "text-center mt-3 h3 customcardstyle3",
        currencystyle: "text-muted align-top", 
        pricestyle: "h3 font-weight-normal text-center font-weight-bold",
        contentstyle: "text-muted text-center small font-weight-bold p-3",
        transactionNumstyle: "font-weight-bold",
        selectstyle:"btn btn-primary btn-block text-uppercase font-weight-bold py-2 customselectstyle3",  
      },
      {
        id:4, cardtitle:"SATOSHI", currency:"$", price:"999", content:"One-time payment for the tax year", transactionNum:"5,000", transactionContent:"transactions",   select:"CHOOSE PLAN",
        cardtitlestyle: "text-center mt-3 h3 customcardstyle4",
        currencystyle: "text-muted align-top", 
        pricestyle: "h3 font-weight-normal text-center font-weight-bold",
        contentstyle: "text-muted text-center small font-weight-bold p-3",
        transactionNumstyle: "font-weight-bold",
        selectstyle:"btn btn-primary btn-block text-uppercase font-weight-bold py-2 customselectstyle4",  
      },
    ]
  }

render() {
    return (
      <div>
      <div className="container">
       <h1 class="mt-5 h3">
<div class="font-weight-bold pt-4 text-center">Get your crypto taxes done today</div>
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
{this.state.cardlist.map(cl => {
return (
<div className="col-md-3">
<Card className="h-100">
  <Card.Body>
    <Card.Title className={cl.cardtitlestyle}>{cl.cardtitle}</Card.Title>
    <Card.Subtitle className=" text-center">
    <span class={cl.currencystyle}>{cl.currency}</span>
    <span class={cl.pricestyle}>{cl.price}</span>
    </Card.Subtitle>
    <Card.Text class={cl.contentstyle}>
    {cl.content}
    </Card.Text>
    <Card.Text class="text-center small font-weight-bold ">
    <span class={cl.transactionNumstyle}>{cl.transactionNum} </span>
     transactions
    </Card.Text>
    <div class={cl.alertstyle}>{cl.alert}
</div>
<div className="mt-3"><Link to={cl.pathname}>
<span id="tax-package-btn-4"  class={cl.selectstyle}>
{cl.select}</span></Link>
</div>
  </Card.Body>
</Card>
</div>
)
})}
</div>

<div className="row mt-5 ml-5 mr-5">
  <div className="col-md-6 text-center">
  <Card className="h-100">
  <Card.Body>
    <Card.Title>
    <div class="text-uppercase font-weight-bold mb-5 " style={{fontSize: "17px", color: "#4E342E"}}>
Custom
</div>
    </Card.Title>
    <Card.Subtitle>
    <div class="mt-4"><strong>15,000 to 1M+</strong> transactions</div>
    </Card.Subtitle>
    <Card.Text>
    <div class="my-3 mt-4">Priority support</div>
    </Card.Text>
    <Card.Text>
    <div class="my-3 mt-4">Custom features</div>
    </Card.Text>
    <a class="mt-5 btn btn-primary btn-block px-3 text-uppercase font-weight-bold py-2" href="#" style={{backgroundColor: "#4E342E", borderColor: "#4E342E", fontSize: "14px"}}>
Contact Us
</a>
  </Card.Body>
</Card>
  </div>
  <div className="col-md-6">
  <Card className="h-100">
  <ListGroup variant="flush">
    <ListGroup.Item>
    <div class="my-auto pt-3 pb-3">
You have
<strong> 0 transactions </strong>
in 2019
</div>
    </ListGroup.Item>
    <ListGroup.Item>
    <div class="my-auto flex-grow-1 d-flex flex-wrap">
<div class="my-auto mr-auto">Currency</div>
<div class="my-auto">
<div className="mt-4 text-center mb-4">
<DropdownButton id="dropdown-basic-button" variant="light" title="USD">
      <Dropdown.Item href="#/action-1">INR</Dropdown.Item>
      
</DropdownButton> 
</div>
</div>
</div> 
    </ListGroup.Item>
    <ListGroup.Item>
      <div className="mt-3 mb-3">
    <div class="my-auto flex-grow-1 d-flex flex-wrap ">
<div class="my-auto mr-auto">Have a question?</div>
<div class="my-auto">
<a class="btn btn-light" href="#">
Contact Us
</a>
</div>
</div>
</div>
    </ListGroup.Item>
  </ListGroup>
</Card>
  </div>
</div>
      </div>
      <div class="text-center text-white py-5 mt-5" style={{backgroundColor: "#0083ff"}}>
<div class="d-inline-block">
<img className="mb-4" src={tickimage}></img>
<div class="h3 font-weight-bold mb-5">One year money-back guarantee</div>
<p class="a-on-dark" href="#" target="_blank" rel="noopener noreferrer">
If you aren't completely satisfied with GxTracker, we will refund your payment in full.
</p>
</div>
</div>
<div className="mx-5 mt-5">
<div class="h3 font-weight-bold text-center mt-4 mb-5">Included in all plans</div>
<div className="marginleft mb-5">
<div className="mx-5 mb-2 d-flex">
<img src={rightimage}></img>
<div class="my-auto">Support for bitcoin, ethereum, and 2,500+ other coins and tokens</div>
</div>
<div className="mx-5  text-center d-flex">
<img src={rightimage}></img>
<div class="my-auto">Cost basis methods: FIFO, LIFO, HIFO, ACB, Share pool</div>
</div>
<div className="mx-5 mb-2 mt-2  text-center d-flex">
<img src={rightimage}></img>
<div class="my-auto">Auto sync with unlimited exchanges and wallets</div>
</div>
<div className="mx-5  text-center d-flex">
<img src={rightimage}></img>
<div class="my-auto">Bulk uploads of transactions CSVs</div>
</div>
<div className="mx-5 mb-2 mt-2  text-center d-flex">
<img src={rightimage}></img>
<div class="my-auto">Transaction history CSV</div>
</div>
<div className="mx-5  text-center d-flex">
<img src={rightimage}></img>
<div class="my-auto">Capital gains report</div>
</div>
<div className="mx-5 mb-2 mt-2  text-center d-flex">
<img src={rightimage}></img>
<div class="my-auto">Export to TurboTax</div>
</div>
<div className="mx-5 mt-2 text-center d-flex">
<img src={rightimage}></img>
<div class="my-auto">Export to TaxAct</div>
</div>
<div className="mx-5 mt-2  text-center d-flex">
<img src={rightimage}></img>
<div class="my-auto">Referral to affiliate crypto tax advisor</div>
</div>
</div>
</div>
</div>

    )
  }
}
