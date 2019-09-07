import React, { Component } from 'react'
import { Dropdown, Card, ListGroup, Form,FormControl, Button, DropdownButton } from 'react-bootstrap';

export default class componentName extends Component {
  render() {
    return (
      <div className="container mt-5">
      <div class="d-flex my-auto flex-wrap justify-content-center ">Automatically generate crypto tax forms for
      <DropdownButton className="ml-5" id="dropdown-basic-button" variant="light" title="2019 Tax year">
      <Dropdown.Item href="#/action-1">2018 Tax year</Dropdown.Item>
      <Dropdown.Item href="#/action-2">2017 Tax year</Dropdown.Item>
      <Dropdown.Item href="#/action-3">2016 Tax year</Dropdown.Item>
      <Dropdown.Item href="#/action-3">2015 Tax year</Dropdown.Item>
      <Dropdown.Item href="#/action-3">2014 Tax year</Dropdown.Item>
      <Dropdown.Item href="#/action-3">2013 Tax year</Dropdown.Item>
</DropdownButton> 
       </div>
       <div className="d-flex my-auto flex-wrap justify-content-center ">
       <div class="mt-5 alert alert-info d-inline-block font-weight-bold mt-3">
        <a href="#">
        Choose a tax plan</a>
        to get your tax summary &amp; reports.
</div>
       </div>
      </div>
    )
  }
}
