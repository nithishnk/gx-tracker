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

<div className="">
<div className="">
<table className="">
<thead>
<tr>
<th>DIGITAL ASSET</th>
<th>PRICE</th>
<th>CHANGE(24HR)</th>

</tr>
</thead>

<tbody>
<td></td>
</tbody>
</table>
</div>
</div>

)
}
}