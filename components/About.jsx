import React from "react";

import {MdAccessTime, MdDateRange} from "react-icons/lib/md";

import Paper from "material-ui/Paper";
import {Card, CardActions, CardHeader, CardMedia, CardText} from "material-ui/Card";
import {Tab, Tabs} from "material-ui/Tabs";
import FlatButton from "material-ui/FlatButton";
import PricingTable from "./register/PricingTable";

import Day1 from "./daycards/Day1.jsx";
import Day2 from "./daycards/Day2.jsx";
import Day3 from "./daycards/Day3.jsx";
import Day4 from "./daycards/Day4.jsx";
import Day5 from "./daycards/Day5.jsx";

import styles from "../css/about.css";

class About extends React.Component {
    render(){
        return <Tabs className={styles.container}>
            <Tab label="About Us" value="about">
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

            <Tab label="Schedule" value="schedule">
                <div className={styles.schedule}>
                    <div className={styles.dayCard}>
                        <Paper className={styles.scheduleCard}>
                            <h2><MdDateRange/> Date</h2>
                            Monday, June 19th 2017 to <br />
                            Friday, June 23rd 2017 <br />
                            <br />
                            <br />

                            <h2><MdAccessTime/> Time</h2>
                            Half Day: 9 AM - 12 PM <br />
                            Full Day: 9 AM - 3 PM
                        </Paper>
                    </div>
                    <div className={styles.dayCard}><Day1 /></div>
                    <div className={styles.dayCard}><Day2 /></div>
                    <div className={styles.dayCard}><Day3 /></div>
                    <div className={styles.dayCard}><Day4 /></div>
                    <div className={styles.dayCard}><Day5 /></div>
                </div>
            </Tab>

            <Tab label="Registration" value="registration">
                <div className={styles.schedule}>
                    <Paper className={styles.regCard} style={{padding: '1rem'}}>
                        <h2>Registration Instructions</h2>
                        <ol>
                            <li>Fill out and submit a registration form <a href="/register">here</a></li>
                            <li>Please make checks payable to EFC-SFV and write the child/children's name in the memo section</li>
                            <li>Send the Check to:<br />
                                EFC-SFV VBS<br />
                                7702 Tampa Ave.<br />
                                Reseda, 91335
                            </li>
                            <li>Payment must be received by May 14th to get the early bird price.</li>
                            <li>Registration closes when we receive 75 registrants</li>
                        </ol>
                        <strong>Note: Your registration is not complete until we receive payment.</strong>
                    </Paper>
                    <Paper className={styles.regCard} style={{padding: '1rem'}}>
                        <h2>Pricing Information</h2>
                        <PricingTable/>
                    </Paper>
                </div>
            </Tab>
        </Tabs>
    }
}

export default About