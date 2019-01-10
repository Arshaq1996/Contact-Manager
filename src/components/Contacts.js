import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  constructor() {
    
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: "Arshaq",
          email: "arshaqshakeel3@gmail.com",
          phone: "0305-2835092"
        },
        {
          id: 2,
          name: "Omer",
          email: "omerIsmail@gamil.com",
          phone: "0321-2836789"
        },
        {
          id: 3,
          name: "Zain",
          email: "zain.ahmed199425@gamil.com",
          phone: "0305-255557777"
        }
      
      ]
    };
  }
// deleteFunction
  DeleteContact=(id)=>{

    console.log('Okay'+ id)
    const {contacts}=this.state;
    const newContacts = contacts.filter(snapshot1=>snapshot1.id!==id)
    this.setState({
contacts:newContacts

    })

  }
  // deleteFunction

 


  render() {

  



    const { contacts } = this.state;
    return (
      <div>
        {contacts.map((snapshot)=> {
          return (
            <Contact
              key={snapshot.id}
              name={snapshot.name}
              email={snapshot.email}
              phone={snapshot.phone}
              deletekey={this.DeleteContact.bind(this,snapshot.id)}
            
            />
          );
        })}
      </div>
    );
  }
}

export default Contacts;