import React, { Component } from 'react'
import Contact from './Contact';
 class Contacts extends Component {

  constructor(){
super();
this.state={

  contacts:[
{
  id :1,
name:"Arshaq",
email : "arshaqshakeel3@gmail.com",
phone : "0305-2835092"

},
{
  id :2,
name:"Omer",
email : "omerIsmail@gamil.com",
phone : "0321-2836789"

},
{
  id :3,
name:"Zain",
email : "zain.ahmed199425@gamil.com",
phone : "0305-255557777"

}


  ]

};




  }
  render() {
    const {contacts} = this.state;
    return (
      <div>
        {

       
contacts.map(function(snapshot){


  return (<Contact key={snapshot.id} name={snapshot.name} email = {snapshot.email} phone = {snapshot.phone} />)


                                                                                                    
                            })
        }

      </div>
    )
  }
}


export default Contacts;