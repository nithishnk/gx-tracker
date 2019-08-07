import React, { Component } from 'react'
import DateTimePicker from './DateTimePicker' 

export default class Performance extends Component {
  render() {
    return (
      <div className="container mt-5">
      <div class="mb-4 d-flex">
      <div class="my-auto ml-auto text-muted">View portfolio as of</div>
      <input id="date-picker" class="my-auto ml-2 btn btn-light hide-caret clickable mr-4 hasDatepicker" style={{width: "150px"}}></input>
      <a class="my-auto btn btn-light" href="/share">Share</a>
      </div>
      <DateTimePicker/>
      </div>
    )
  }
}
