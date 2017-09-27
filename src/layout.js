import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import App from './app'


class Layout extends React.Component {

    render(){
        return (
            <BrowserRouter>
			<App/>
            </BrowserRouter>
        )
    }
}

export default Layout