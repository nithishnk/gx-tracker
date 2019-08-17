import React, { Component } from 'react'
import Chart from './Chart'
import '../performance/chart.css' 

export default class Performance extends Component {
  
  render() {
    return (
      <div>
      <div className="container mt-5 p-5 brdr">
      <div className="row">
      <div className="col-md-4 d-flex justify-content-center">
      <p>Market value <br></br> <strong>$0</strong></p>
      </div>
      <div className="col-md-4 d-flex justify-content-center">
      <p>Cost basis<br></br> <strong>$0</strong></p>
      </div>
      <div className="col-md-4 d-flex justify-content-center">
      <p>Net fiat invested<br></br> <strong>$0</strong></p>
      </div>
      </div>
      <div className="row">
      <div className="col-md-6 d-flex justify-content-center">
      <p>Past day <br></br> <strong>0.00%</strong></p>
      </div>
      <div className="col-md-6 d-flex justify-content-center">
      <p>All time return <br></br> <strong>0.00%$</strong> </p>
      </div>
      </div>
      <div className="mt-2">
        <Chart/>
        </div>
        </div>

        <div className="container mt-5 mb-5">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Coin</th>
      <th scope="col">Quantity</th>
      <th scope="col">Unit Price</th>
      <th scope="col">1 Day</th>
      <th scope="col">Market Value</th>
      <th scope="col">Return</th>
      <th scope="col">% of Portfolio</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td></td>
      <td></td>
      <td></td>
      <td>$0.00</td>
      <td>$0.00</td>
    </tr>
    
  </tbody>
</table>
</div>
      
      </div>
      
    )
  }
}
