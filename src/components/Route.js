import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './home/Home'
import Performance from '../components/performance/Performance'
import Price from '../components/price/Price'
import Header from '../components/navbar/Navbar'
import Wallets from '../components/wallets/Wallet'
import Addaccount from '../components/exchanges/Addaccount'
export default class Routea extends Component {
  render() {
    return (
      <div>
      <Header/>
      <Router>
      <Route path="/" exact component={Home}/>
      <Route path="/Performance" exact component={Performance}/> 
      <Route path="/Price" exact component={Price}/>
      <Route path="/Wallets" exact component={Wallets}/>
      <Route path="/addaccount" exact component={Addaccount}/>
      </Router>
      </div>
    )
  }
}
