import React, { Component } from 'react'
import {Form, Col, Row, Button} from 'react-bootstrap'
import {ProductConsumer} from '../../contextAPI/Context'
import {Link} from 'react-router-dom'


export default class Addaccount extends Component {
  
  render() {
    return (
      <ProductConsumer>
  {((value) => {
  const {addingwallet} = value;
    return (
      <div className="container mt-5">
        <div className="d-flex justify-content-center">
        <h3 className=""><a href="/"><i class="fa fa-chevron-left px-5" aria-hidden="true"></i></a>New Ledger Wallet</h3>
        </div>
        <div className="d-flex justify-content-center">
        <div className="col-xl-6 col-centered pt-3">
        <p>
CoinTracker will automatically sync the transactions and balances corresponding to the provided xPub key (<a href="https://help.cointracker.io/cost-basis/what-is-xpub-and-utxo" target="_blank" rel="noopener noreferrer">learn more</a>).
We currently support <strong>Bitcoin</strong>, <strong>Bitcoin Cash</strong>, <strong>Dash</strong>, <strong>Dogecoin</strong>, <strong>Litecoin</strong>, <strong>ZCash</strong> wallets.
For other currencies you can directly enter public addresses <a href="/add_wallet">here</a>.
</p>
      <div class="alert alert-info small m-5">
      
<span>We are only requesting <strong>view permissions</strong>. This does not give us access to your private keys nor the ability move your funds.</span>
</div>
<div class="my-5 alert alert-warning">Here are <a href="https://help.cointracker.io/product/how-to-add-my-ledger-hardware-wallet-to-cointracker" target="_blank" rel="noopener noreferrer">instructions</a> to add your Ledger wallet</div>
<Form>
  <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
      API Key
    </Form.Label>
    <Col sm={9}>
      <Form.Control type="Cryptocurrency"/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={3}>
    xPub Key
    </Form.Label>
    <Col sm={9}>
      <Form.Control type="apisecret"/>
    </Col>
    <div id="description_xpub_key" class="small text-muted d-flex justify-content-center">The xPub key for the selected cryptocurrency.</div>
  </Form.Group>
  <Form.Group as={Row}>
    <Col sm={{ span: 9, offset: 3 }}>
    <Link to="/"><Button type="submit" onClick={addingwallet}>Add Wallet</Button></Link>
    </Col>
  </Form.Group>
</Form>
     </div>
     </div>
     </div>
       )
      })}
      </ProductConsumer> 
    )
  }
}
