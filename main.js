import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App.jsx'


//Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render((<App />), document.getElementById("mount-point"));