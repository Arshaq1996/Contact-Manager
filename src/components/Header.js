import React from "react";
import PropTypes from 'prop-types';

//functional Component Header
const Header = props => {
  return (
    <nav className="navbar navbar-extend-sm navbar-dark  bg-danger mb-3 py-0">

 <div className="container">
 
 <a href="/" className="navbar-brand"> {props.branding}</a>

<div>

  <ul className=" navbar-nav mr-auto" >

<li className="nav-item">
<a className="nav-link"> Home</a>
</li>  
  </ul>
</div>
 </div>
    </nav>
  );
};
//deafaultProps
Header.defaultProps={
branding : "This is My App"

}

//propsType Header it is using for validation

Header.prototype ={

  branding:PropTypes.string.isRequired
}

export default Header;
