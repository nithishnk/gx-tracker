import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './home/Home'
import Performance from '../components/performance/Performance'
import Price from '../components/price/Price'
import Header from '../components/navbar/Navbar'
import Wallets from '../components/wallets/Wallet'
import Addaccount from '../components/exchanges/Addaccount'
import Addwallet from '../components/wallets/Addwallet'
import Transaction from '../components/Transactions/Transaction'
import Apikey from './home/Apikey'
import MoreExchanges from '../components/home/moreexchanges'
import Tax from '../components/Tax/Tax'
import {ProductConsumer} from '../contextAPI/Context'

export default class Routea extends Component {
  render() {
    return (
      <ProductConsumer>
  {((value) => {
  const {} = value;
    return (
      <div>
      <Header/>
      <Router>
      <Route path="/" exact component={Home} value={1}/>
      <Route path="/MoreExchanges" exact component={MoreExchanges}/>
      <Route path="/Performance" exact component={Performance}/> 
      <Route path="/Price" exact component={Price}/>
      <Route path="/Wallets" exact component={Wallets} value={2}/>
      <Route path="/addaccount" exact component={Addaccount}/>
      <Route path="/addwallet" exact component={Addwallet}/>
      <Route path="/Transaction" exact component={Transaction}/>
      <Route path="/Tax" exact component={Tax}/>
      <Route path="/Apikey" exact component={Apikey}/>
      </Router>
      </div>   )
      })}
      </ProductConsumer> 
    )
  }
}
