import React from 'react'

import {Card, CardActions, CardHeader, CardMedia, CardText, CardTitle} from 'material-ui/Card'
import {Tabs, Tab} from 'material-ui/Tabs'
import FlatButton from 'material-ui/FlatButton'

import Day1 from './daycards/Day1.jsx'
import Day2 from './daycards/Day2.jsx'
import Day3 from './daycards/Day3.jsx'
import Day4 from './daycards/Day4.jsx'
import Day5 from './daycards/Day5.jsx'

import styles from '../css/about.css'

class About extends React.Component {
    render(){
        return <Tabs className={styles.container}>
            <Tab label="About Us">
                <div className={styles.aboutUs}>
                    <Card>
                        <CardHeader title="Who We Are" subtitle="Harvest San Fernando Valley"/>
                        <CardMedia>
                            <img src="/images/harvest_fb.png" />
                        </CardMedia>
                        <CardText>
                            We’re a community of believers with a big heart. <br />
                            We look forward to serving you in the Love of Christ, <br />
                            and trust that you’ll find this to be a place of Hope and Faith <br />
                        </CardText>
                        <CardActions>
                            <FlatButton label="Services" href="http://efcsfv.org/harvest/services" target="_blank"/>
                            <FlatButton label="Facebook" href="https://facebook.com/harvestsfv" target="_blank"/>
                            <FlatButton label="What We Believe" href="http://efcsfv.org/harvest/statement-of-faith/" target="_blank"/>
                        </CardActions>
                    </Card>
                </div>
            </Tab>

            <Tab label="Schedule">
                <div className={styles.schedule}>
                    <div className={styles.dayCard}><Day1 /></div>
                    <div className={styles.dayCard}><Day2 /></div>
                    <div className={styles.dayCard}><Day3 /></div>
                    <div className={styles.dayCard}><Day4 /></div>
                    <div className={styles.dayCard}><Day5 /></div>
                </div>
            </Tab>

            <Tab label="Registration">

            </Tab>
        </Tabs>
    }
}

export default About