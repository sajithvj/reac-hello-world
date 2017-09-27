import React from 'react';
import {Nav, NavItem} from 'react-bootstrap';
import { Link } from 'react-router-dom'
export default class Header extends React.Component{
 render(){
return (
<div>
<Nav bsStyle="tabs">
  <NavItem eventKey={1}><Link to='/'>Home</Link></NavItem>
  <NavItem eventKey={2}><Link to='/login'>LogIn</Link></NavItem>
  <NavItem>Register</NavItem>
</Nav>

</div>
)
}
}