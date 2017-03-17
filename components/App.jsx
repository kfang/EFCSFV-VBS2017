import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import {BrowserRouter, Route, withRouter} from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'

import style from '../css/app.css'

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {isDrawerOpen: false};
    }

    __toggleDrawer = () => {
        const {isDrawerOpen} = this.state;
        this.setState({isDrawerOpen: !isDrawerOpen});
    };

    __navigate = (path, history) => () => {
        history.push(path);
        this.setState({isDrawerOpen: false});
    };

    render(){
        const {isDrawerOpen} = this.state;

        return <MuiThemeProvider>
            <BrowserRouter>
                <div className={style.router}>
                    <Route render={({history}) => {
                        return <AppBar title="EFC-SFV VBS 2017" onLeftIconButtonTouchTap={this.__toggleDrawer}>
                            <Drawer
                                docked={false}
                                open={isDrawerOpen}
                                onRequestChange={(o) => this.setState({isDrawerOpen: o})}
                            >
                                <MenuItem onTouchTap={this.__navigate("/home", history)}>Home</MenuItem>
                                <MenuItem onTouchTap={this.__navigate("/about", history)}>About</MenuItem>
                                <MenuItem onTouchTap={this.__navigate("/register", history)}>Register</MenuItem>
                                <MenuItem onTouchTap={this.__navigate("/contact", history)}>Contact</MenuItem>
                            </Drawer>
                        </AppBar>
                    }}/>


                    <Route exact path="/" component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                </div>
            </BrowserRouter>
        </MuiThemeProvider>
    }

}

export default App