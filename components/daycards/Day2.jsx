import React from 'react'
import {Card, CardHeader, CardMedia, CardTitle} from 'material-ui/Card'
import style from '../../css/home.css'

class Day2 extends React.Component {
    render(){
        return <Card>
            <CardHeader title="God Is For You" subtitle="Day 2"/>
            <CardMedia
                overlay={<CardTitle title='"If God is for us, who can ever be against us?" -Romans 8:31' subtitle="Rehab believes in God's might power (Joshua 1-2)" />}
            >
                <div className={style.d2}><div className={`${style.grunge}`}>
                    <img src="images/d2_tina.png" />
                </div></div>
            </CardMedia>
        </Card>
    }
}

export default Day2;
