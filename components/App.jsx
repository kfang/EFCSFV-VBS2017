import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {isDrawerOpen: false};
    }

    __toggleDrawer = () => {
        const {isDrawerOpen} = this.state;
        this.setState({isDrawerOpen: !isDrawerOpen});
    };

    render(){
        const {isDrawerOpen} = this.state;
        return <MuiThemeProvider>
            <AppBar title="EFC-SFV VBS 2017" onLeftIconButtonTouchTap={this.__toggleDrawer}>
                <Drawer
                    docked={false}
                    open={isDrawerOpen}
                    onRequestChange={(o) => this.setState({isDrawerOpen: o})}
                >
                    <MenuItem>Home</MenuItem>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Contact</MenuItem>
                </Drawer>
            </AppBar>
        </MuiThemeProvider>
    }

}

export default App