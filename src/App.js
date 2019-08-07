import React, { Component } from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Performance from '../src/components/performance/Performance'
import Price from '../src/components/price/Price'
export default class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      <Performance/>
      </div>
    )
  }
}
