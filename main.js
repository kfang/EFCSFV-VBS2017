import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import HelloWorld from './components/HelloWorld.jsx'

ReactDOM.render((
    <BrowserRouter>
        <Route path="/" component={HelloWorld} />
    </BrowserRouter>
), document.getElementById("mount-point"));