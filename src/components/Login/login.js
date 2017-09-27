import React from 'react'
import Button from 'react-bootstrap/lib/Button'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
class LoginPage extends React.Component {

	render() {
		return  ( 
		<Grid>
		<Row>
		<Col md={6}>
		 
		<div className ="form-content">
		  <h1>Login: </h1>
			<form action="login" method="post">
			<input type="text" name="username" required="required" placeholder="User Name"/>
			<input type="password" name="password" required="required" placeholder="Password"/>
			<input type="submit" value="Login"/>
			</form>
		 </div> 
		 </Col>
		 </Row>
		 </Grid>
		);
	}
}

export default LoginPage