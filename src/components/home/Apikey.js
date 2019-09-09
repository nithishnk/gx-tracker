import React, { Component } from 'react'
import './apikey.css'
import {Form, Col, Row, Button} from 'react-bootstrap'
import {ProductConsumer} from '../../contextAPI/Context'
import {Link} from 'react-router-dom'
import axios from 'axios';

export default class Addaccount extends Component {
  state = {
    exlist: []
  }
  componentDidMount(){
    this.getdata();
    }
    getdata = () => {
      axios.get('http://3.16.168.61:80/ccxt/exchange-list')
      .then(res => {
        this.setState({
          exlist: res.data.Data
        })
      })
    }
  render() {
    console.log("Exchangeslist", this.state.exlist )
    return (
      <ProductConsumer>
  {((value) => {
  const {addingexchange, swithbutton} = value;
    return (
      <div className="container mt-5">
        <div className="d-flex justify-content-center">
        <h3 className=""><a href="/"><i class="fa fa-chevron-left px-5" aria-hidden="true"></i></a>New 
        BTC 
        Markets Account</h3>
        </div>
        <div className="d-flex justify-content-center">
        <div className="col-xl-6 col-centered pt-3">
     <p>To add your BTC Markets account to CoinTracker, follow these steps:</p>
<ol class="mb-5">

{/*{this.state.exlist.map((list) => {
return( */}
  <li>Open the BTC Markets<strong><a href="#" target="_blank" rel="noopener noreferrer"> API Key <i class="fas fa-external-link-alt ml-1" aria-hidden="true"></i></a></strong>page</li>
{/*  )})}*/}
  
  
<li>Click the<strong>Generate API Key</strong>button</li>
<li>If applicable, enter your <strong>two-factor authentication code</strong></li>
<li>Click <strong>Display</strong> to reveal the <strong>Secret Key</strong></li>
<li>Copy the <strong>Public Key</strong> and <strong>Secret Key</strong> below
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
