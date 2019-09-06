import React, { Component } from 'react'
import {Form, Button, FormControl} from 'react-bootstrap'
import axios from 'axios';
export default class componentName extends Component {
  state = {
    exlist: []
  }
  componentDidMount(){
    this.getdata();
    }
    getdata = () => {
      axios.get('http://3.16.168.61:80/ccxt/exchange-list')
      .then(res => {
        this.setState({
          exlist: res.data.Data
        })
      })
    }
    

  render()
   {
     console.log("Exchangeslist", this.state.exlist )
    return (
        <div className="container">
            <div className="m-3 d-flex justify-content-center">
            <h2 class="font-weight-bold h2 my-lg-4">Sync all your wallets and exchanges</h2>
            </div>
            <h5 className="text-secondary d-flex justify-content-center text-center">Automatically and continuously sync all your crypto data.<br></br> We use read-only access to your exchange accounts to protect your funds.</h5>
            
            <div className="mt-5 mb-5 d-flex justify-content-center">
            <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
    </div>
    <div>
    <h3 class="h5 text-center text-secondary mt-3">Exchanges</h3>
            <div class="small text-center">
Directly connect your exchange accounts.
</div>
    </div>
    
        {this.state.exlist.map((list) => {
          var image = list.logo
          return (
            <>
            <a href="/Apikey">
            <img className="ml-5" style={{width:"6rem",height:"2rem",margin:"2rem"}} src={image}/></a>
            
            </>
          )          
        })}
      </div>
      
    )
  }
}

