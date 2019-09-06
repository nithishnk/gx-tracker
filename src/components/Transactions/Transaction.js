import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap';
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
<div className="pl-2">
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
<div className="pl-2">
<Dropdown>
<Dropdown.Toggle variant="success" id="dropdown-basic">
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
      </div>
      )
      })}
       </ProductConsumer>
    )
  }
}
