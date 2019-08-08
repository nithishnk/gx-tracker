import React, { Component } from 'react'
import { Button, Card, ListGroup, ListGroupItem, Dropdown } from 'react-bootstrap';

export default class SectionTwoCards extends Component {
  render() {
    return (
      <div className="container">
      <div className="row">
      <div className="col-md-5">
      <ListGroup className="list-group-flush p-2">
      <ListGroupItem> <div className="row"> <p className="mr-auto my-auto">Funds on Exchange</p>
      <div className="">
      
  </div>
  </div>
      </ListGroupItem>
      <ListGroupItem><div className="row"> 
      <p className="mr-auto my-auto">
      You currently don't have opportunities to harvest tax losses. </p>
      
      <a href="#">Tax loss Harvesting</a>
      </div>
      </ListGroupItem>
      <ListGroupItem><div className="row"> 
      <p className="mr-auto my-auto">
      Want to automatically purchase cryptocurrency on a regular basis? </p>
      
      <a href="#">Dollor cost Averaging</a>
      </div>
      </ListGroupItem>
    </ListGroup>
      </div>
      <div className="col-md-7">
      </div>
      </div>
        
      </div>
    )
  }
}
