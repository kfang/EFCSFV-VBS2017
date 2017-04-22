import React from 'react'

import Paper from 'material-ui/Paper'
import {Card, CardActions, CardHeader, CardMedia, CardText, CardTitle} from 'material-ui/Card'
import {Tabs, Tab} from 'material-ui/Tabs'
import FlatButton from 'material-ui/FlatButton'

import styles from '../css/about.css'

class About extends React.Component {
    render(){
        return <Tabs className={styles.container}>
            <Tab label="About Us">
                <Paper className={styles.aboutUs}>
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
                </Paper>
            </Tab>

            <Tab label="Schedule">

            </Tab>

            <Tab label="Registration">

            </Tab>
        </Tabs>
    }
}

export default About