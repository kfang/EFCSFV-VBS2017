import React from 'react'
import style from '../css/home.css'

class Home extends React.Component {
    render(){
        console.log(this.props);
        return <div>
            <img src="images/big-hero.png"/>
        </div>
    }
}

export default Home