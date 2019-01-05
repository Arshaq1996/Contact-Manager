import React, { Component } from "react";
//import Contact.js component
import Contacts from "./components/Contacts";
//import Header.js component
import Header from "./components/Header";
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//import logo from './logo.svg';
import "./App.css";
//import Contact from "./components/Contact";

//let name = "arshaq"

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1> Your name is {name.toUpperCase()} , 
   
   </h1> */}

        <Header branding="Contact Manager" />
<div className="container">
        
<Contacts/>
        
        </div>
      </div>
    );
  }
}
export default App;
 