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
  wallet:[
    {id:"1",walletname:"Ledger"},
    {id:"2",walletname:"Trezor"},
    {id:"3",walletname:"Jaxx"},
    {id:"4",walletname:"Public Address"},
    {id:"5",walletname:"xPub Address"}
  ],
  walletvalue : 0,
  toggle : true,
  showDivBox : false
  }

  inputValue = async (e) => {
     await this.setState({
        [e.target.name]: e.target.value
      });
  }
  addingexchange=()=> {
    this.setState({
      exvalue : this.state.exvalue + 1
    })
    }
  addingwallet=()=>{
    this.setState({
      walletvalue : this.state.walletvalue + 1
    })
  }

  componentDidMount() {
    window.scrollTo(0,0)
    }


    formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2
    });

// swithbutton=() => 
// {
//   this.setState({
//     toggle : !this.state.toggle
//   })
// }
// handleOnChange = e => {
 
//     if(value = 1) {
//       showDivBox : e.target.value === 1
//     }
//      else if (value = 2){

//       showDivBox : e.target.value === 2
//     }

 
// };


  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,

        inputValue:this.inputValue,
        addingexchange:this.addingexchange,
        addingwallet:this.addingwallet,
        componentDidMount:this.componentDidMount,
        swithbutton:this.swithbutton,
        handleOnChange:this.handleOnChange
       
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )

  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };