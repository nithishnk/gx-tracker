import React, { Component } from 'react'
import Route from '../src/components/Route'
import Footer from '../src/components/footer/Footer'
export default class App extends Component {
  render() {
    return (
      <div>
      <Route/>
      <hr></hr>
      <Footer/>
      </div>
    )
  }
}
