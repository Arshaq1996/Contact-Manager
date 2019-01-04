import React, { Component } from "react";
//import Contact.js component
import Contact from "./components/Contact";
//import Header.js component
import Header from "./components/Header";
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//import logo from './logo.svg';
import "./App.css";

//let name = "arshaq"

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1> Your name is {name.toUpperCase()} , 
   
   </h1> */}

        <Header branding="Contact Manager" />
<div className="container">
        <Contact
          name="Arshaq"
          email="arshaqshakeel3@gmail.com"
          phone="0305-2835092"
        />
        <Contact
          name="Areeb"
          email="areebhakeel3@gmail.com"
          phone="0305-28358882"
        />
        </div>
      </div>
    );
  }
}
export default App;
