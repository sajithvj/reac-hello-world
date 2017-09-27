import React from 'react'
import {Route,Switch} from 'react-router-dom'
import HomePage from './components/Home/home'
import LoginPage from './components/Login/login'

export default class Main extends React.Component{
 render(){
return(
<main>
<Switch>
<Route exact path="/" component={HomePage} />
<Route path="/login" component = {LoginPage} />	
</Switch>
</main>
);
}
}