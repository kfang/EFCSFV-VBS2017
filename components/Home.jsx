import React from 'react'
import style from '../css/home.css'
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import Day1 from './daycards/Day1.jsx'
import Day2 from './daycards/Day2.jsx'
import Day3 from './daycards/Day3.jsx'
import Day4 from './daycards/Day4.jsx'
import Day5 from './daycards/Day5.jsx'

class Home extends React.Component {
    render(){
        return <div>
            <div className={style.container}>
                <img src="images/big-hero.png" className={style.heroImage}/>
            </div>

            <div className={style.container}>

            <div className={style.dayCard}>
                <Day1 />
            </div>


            <div className={style.dayCard}>
                <Day2 />
            </div>

            <div className={style.dayCard}>
                <Day3 />
            </div>

            <div className={style.dayCard}>
                <Day4 />
            </div>

            <div className={style.dayCard}>
                <Day5 />
            </div>
            </div>
        </div>
    }
}

export default Home