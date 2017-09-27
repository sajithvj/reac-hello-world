import React from 'react'
import Button from 'react-bootstrap/lib/Button'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
class Home extends React.Component{
constructor(props){
	super(props);
	this.state={name: undefined,number: undefined,message: undefined,email: undefined,data:undefined};
	this.handleSubmit = this.handleSubmit.bind(this);
	}

handleSubmit(e){
	//we don't want the form to submit, so we prevent the default behavior
    e.preventDefault();
	
	//this.setState({name: form.usern.value,number: form.number.value,message: form.message.value,email: form.email.value});
	//alert(form.usern.value);
	
	$.ajax({
	 url:"http://localhost:8090/LifeLine/rest/hello/login",
	 dataType: 'json',
	 url: '/api/users',
      type: 'POST',
      data: {
        username: form.usern.value,
        password: form.number.value
       
      },
      success: function(data) {
        this.setState({data: data});
		alert (data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("http://localhost:8080/", status, err.toString());
      }.bind(this)
	
	});
	
  }


 render(){
 return (

 <div>
	
	<Grid>
		<Row>
			<Col md={6}>
				<p> Hello React!</p>
				
			</Col>
			<Col md={6}>
				<div className ="form-content">
				<form action="#" name= "form" onSubmit={this.handleSubmit} >
				<input name="usern" required="" type="text" placeholder="Name" value={this.state.name} />
				<input name="email" required="" type="email" placeholder="Email" value={this.state.email}/>
				<input name="number" required="" type="text" placeholder="Phone Number" value={this.state.number}/>
				<textarea name="message" required="" placeholder="Message......." value={this.state.message} ></textarea>
				<input type="submit" value="Submit"/>
				</form>
				</div>
			</Col>
		</Row>
	</Grid>
	
 </div>
 );
 }
}

export default Home;