import React, { Component } from 'react'
import './apikey.css'
import {Form, Col, Row, Button} from 'react-bootstrap'
import {ProductConsumer} from '../../contextAPI/Context'
import {Link} from 'react-router-dom'


export default class Addaccount extends Component {
  
  render() {
    return (
      <ProductConsumer>
  {((value) => {
  const {addingexchange, swithbutton} = value;
    return (
      <div className="container mt-5">
        <div className="d-flex justify-content-center">
        <h3 className=""><a href="/"><i class="fa fa-chevron-left px-5" aria-hidden="true"></i></a>New Binance Account</h3>
        </div>
        <div className="d-flex justify-content-center">
        <div className="col-xl-6 col-centered pt-3">
      <div class="alert alert-info small m-5">
<span>We are only requesting <strong>view permissions</strong>. This does not give us access to your private keys nor the ability move your funds.</span>
</div>
<p>To add your Binance account to CoinTracker, follow these steps:</p>
<ol class="mb-5">
<li>Open the Binance <strong><a href="https://www.binance.com/userCenter/createApi.html" target="_blank" rel="noopener noreferrer">API<i class="fas fa-external-link-alt ml-1" aria-hidden="true"></i></a></strong> page</li>
<li><strong>Create a new API key</strong> by entering a label, such as '<strong>CoinTracker</strong>', and clicking the <strong>Create New Key</strong> button</li>
<li>If applicable, enter your <strong>two-factor authentication code</strong></li>
<li>Copy the <strong>API Key</strong> and <strong>Secret</strong> below</li>
<li class="mt-3"><strong class="text-muted mr-2 small">RECOMMENDED</strong> Disable trading access for this API key:
<ul>
<li>Click the <strong>Edit</strong> button</li>
<li>Disable the <strong>Enable Trading</strong> permission</li>
<li>Click <strong>Save</strong></li>
<li>If applicable, enter your <strong>two-factor authentication code</strong></li>
</ul>
</li>
</ol>
<Form>
  <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
      API Key
    </Form.Label>
    <Col sm={9}>
      <Form.Control type="APIkey"/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={3}>
      API Secret
    </Form.Label>
    <Col sm={9}>
      <Form.Control type="apisecret"/>
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Col sm={{ span: 9, offset: 3 }}>
    {swithbutton ? <Link to="/"><Button type="submit" onClick={addingexchange}>Add Account</Button></Link>:<Link to="/Wallets"><Button type="submit" onClick={addingexchange}>Add Account</Button></Link>}
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
