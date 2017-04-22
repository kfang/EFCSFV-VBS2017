import React from 'react'
import style from '../css/home.css'
import FlatButton from 'material-ui/FlatButton'
import {Card, CardActions, CardText, CardTitle} from 'material-ui/Card'

class Home extends React.Component {
    render(){
        return <div className={style.container}>
                <img src="images/big-hero.png" className={style.heroImage}/>
                <div className={style.registerNow}>
                    <Card>
                        <CardTitle title="VBS 2017 - Maker Fun Factory!" subtitle="presented by Harvest San Fernando Valley" />
                        <CardText>
                            <strong>What is VBS? </strong><br />
                            Vacation Bible School or VBS is a wonderful opportunity for your child to learn more about
                            God through music, games, and daily biblical adventures. A daily Bible point will be
                            reinforced throughout the day's activities.
                            <br /><br />

                            <strong>What are the dates?</strong><br />
                            June 19th-23rd <br />
                            9 AM - 12 PM (half day) <br />
                            9 AM - 3 PM (full day)

                            <br /><br />

                            <strong>Where is it being held?</strong><br />
                            Evangelical Formosan Church of San Fernando Valley <br />
                            7702 Tampa Ave., <br />
                            Reseda, CA 91335 <br />
                            <a href="https://goo.gl/maps/jdHLArtxzgK2" target="_blank">Directions</a>
                        </CardText>
                        <CardActions>
                            <FlatButton label="Learn More" href="/about" primary={true}/>
                            <FlatButton label="Register Now" href="/register" secondary={true}/>
                        </CardActions>
                    </Card>

                </div>
            </div>
    }
}

export default Home