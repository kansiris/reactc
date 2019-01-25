import React, { Component } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

class Adminsidebar extends Component {
    constructor(props) {
      super(props);
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
    }
    render() {
      return (
        <div style={{backgroundColor:"silver"}}>
         
          <div className="col-sm-2">
            <label>
           
            <a href="/Userdetails" style={{ float: "right", paddingTop: "4px" }}>Profile</a>  
            </label>
            </div>
         
            <div className="col-sm-2">
            <label>
           
            <a href="/UserOrderlist" style={{ float: "right", paddingTop: "4px" }}>Orders</a>  
            </label>
            </div>
  
        </div>
      );
    }
  }
  
  export default Adminsidebar;