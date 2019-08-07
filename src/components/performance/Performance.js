import React, { Component } from 'react'
import Chart from './Chart'
import '../performance/chart.css' 

export default class Performance extends Component {
  render() {
    return (
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
    )
  }
}
