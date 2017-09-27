import React from 'react'
import {Route} from 'react-router-dom'
import Main from './routes'
import Header from './header'
import Footer from './footer'
export default class App extends React.Component{
 render(){
 return (

 <div>
	<Header/>
	<Main/>
	<Footer/>
 </div>
 );
 }
}