import React, { Component } from 'react'
import axios from 'axios';
export default class AssetsSupport extends Component {
  state = {
    crypto: []

    
  }
  componentDidMount(){
    this.getdata();
    }
    getdata = () => {
      axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=100&tsym=USD')
      .then(res => {
        this.setState({
          crypto: res.data.Data
        })
      })
    }
        




render() {
  console.log("Nithish", this.state.crypto )
return (

<div className="container mt-5">
<div className="" style={{width:"100%"}}>
<table className="table" style={{width:"100%"}} responsive> 
<thead>
<tr>
<th className="">DIGITAL ASSET</th>
<th className="">PRICE</th>
<th className="">CHANGE(24HR)</th>
<th className="">Market Cap</th>
<th className="">SUPPLY</th>
<th className="">Circulating</th>
</tr>
</thead>

<tbody>
{this.state.crypto.map((cryp,i) => {
  var image = "http://www.cryptocompare.com" + cryp.CoinInfo.ImageUrl
  
  return(
  <tr>
  <td>{i+1}<img className="ml-5"style={{width:"2rem",marginRight:"1rem"}} src={image}/>{cryp.CoinInfo.FullName}({cryp.CoinInfo.Name})</td>
  <td scope="col">{cryp.RAW.USD.PRICE.toFixed(2)}</td>
  <td scope="col">{cryp.RAW.USD.CHANGEPCT24HOUR.toFixed(2)}</td>
  <td scope="col">{cryp.DISPLAY.USD.MKTCAP}</td>
  <td scope="col">{cryp.RAW.USD.SUPPLY}</td>
  <td scope="col">{cryp.RAW.USD.MKTCAP}</td>
  </tr>
  )
  })
  }
</tbody>
</table>
</div>
</div>

)
}
}