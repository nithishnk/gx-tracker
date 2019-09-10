import React, { Component } from 'react'
import  {Nav, Navbar} from 'react-bootstrap';
import axios from 'axios';
import '../navbar/navbar.css'
import gxlogo from '../../Images/Gx.png'


export default class Header extends Component {
  state = {
    currencylist: []
  }
  componentDidMount(){
    this.getdata();
    }
    getdata = () => {
      axios.get('https://restcountries.eu/rest/v2/all')
      .then(res => {
        this.setState({
          currencylist: res.data
        })
      })
    }

  render() {
    console.log("CurrencyList", this.state.currencylist.name )
    return (

      <div className="parent-nav">
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Navbar.Brand className="px-2" href="/"><img src={gxlogo} style={{width: "30px"}}></img></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link className="px-4" href="/">Dashboard</Nav.Link>
      <Nav.Link className="px-4" href="/Performance">Performance</Nav.Link>
      <Nav.Link className="px-4" href="/Wallets">Wallets</Nav.Link>
      <Nav.Link className="px-4" href="/Transaction">Transaction</Nav.Link>
      
      <Nav.Link className="px-4" href="/Tax ">Tax</Nav.Link>
      <Nav.Link className="px-4" href="/Price">Price</Nav.Link>
      <div className="select-width d-flex justify-content-end">
      <select className="browser-default custom-select">
        <option>India</option>
      {this.state.currencylist.map((clist) => {
return(
 <option>{clist.name}</option>
)})}
  </select>
        </div>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
    )
  }
}
