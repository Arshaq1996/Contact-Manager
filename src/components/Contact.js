import React, { Component } from "react";
import './contact.css';
import Prototypes from 'prop-types';
class Contact extends Component { 
 //1st way we can do like this and add bind(this) on the event exmaple onShowClick().bind(this)
//   state ={
//    sub:'Ali',
//    nick : 'Ashuu'
//  }
//  //using a simple fuction
//   onShowClick(){

//     console.log("new world")
//     console.log(this.state);
//   }
//simples way 2nd way
state = {showContactInfo :true};
onShowClick = (e)=>{

 // console.log(this.state); 
  //console.log(e.target);
  //console.log(e);
  // we donot mutate state directle we should use set state for changing a state
  // this.state ={
  //   showContactInfo:false
  // };
this.setState({showContactInfo:!this.state.showContactInfo});


}
//start Delete function
onDeleteClick=()=>{
this.props.deletekey();

}


//end delete function
  
  render() {
    const { name, email, phone } = this.props;
const {showContactInfo}=this.state;

    return (
      <div className="card card-body mb-3">
        {/* <h4> Name: {name} <i onClick={()=>console.log('Hello World')} className="fas fa-sort-down"></i></h4> */}
        
   {/* using simple function     <h4 >{name} <i className="fa fa-sort-down" onClick={this.onShowClick.bind(this)}></i> </h4> */}
     {/* using arrow function this is a simplest way of doing this stuff  */}
     
     <i className="fa fa-times " id="delete"
     style={{cursor:'pointer'
     }} onClick={this.onDeleteClick}></i>
     
         <h4>{name} <i className="fa fa-sort-down" onClick={this.onShowClick}></i></h4>
            
            {showContactInfo ?(<ul className="list-group">
        <li className="list-group-item">
            Email:
            {email}
          </li>

          <li className="list-group-item">Phone: {phone}</li>
        </ul>):null}
        
      </div>
    );
  }
}


Contact.Prototypes={

  deletekey:Prototypes.func.isRequired
}
export default Contact;
