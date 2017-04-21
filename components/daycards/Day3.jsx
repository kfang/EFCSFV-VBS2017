import React from 'react'
import {Card, CardHeader, CardMedia, CardTitle} from 'material-ui/Card'
import style from '../../css/home.css'

class Day3 extends React.Component {
    render(){
        return <Card>
            <CardHeader title="God Is Always With You" subtitle="Day 3"/>
            <CardMedia
                overlay={<CardTitle title='"The Lord your God is with you wherever you go." -Joshua 1:9' subtitle="God is with Gideon (Judges 6:11-7:25)"/>}
            >
                <div className={style.d3}><div className={`${style.grunge}`}>
                    <img src="images/d3_bubba.png" />
                </div></div>
            </CardMedia>
        </Card>
    }
}

export default Day3
