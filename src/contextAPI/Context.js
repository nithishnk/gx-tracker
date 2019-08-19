import React, { Component } from 'react';
import axios from 'axios';

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    exchanges:[
      {id:"1",exchangename:"Binance"},
      {id:"2",exchangename:"Binance DEX"},
      {id:"3",exchangename:"Coinbase"},
      {id:"4",exchangename:"Coinbase Pro"},
      {id:"5",exchangename:"Gemini"},
      {id:"6",exchangename:"Kraken"},
      {id:"7",exchangename:"Kucoin"}

  ],
  exvalue : 0,
  }

  inputValue = async (e) => {
     await this.setState({
        [e.target.name]: e.target.value
      });
  }
  addingexchange=(e)=> {
    this.setState({
      exvalue : this.state.exvalue + 1
    })
    }


    formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2
    });



  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,

        inputValue:this.inputValue,
        addingexchange:this.addingexchange
       
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )

  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };