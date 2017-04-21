import React from 'react'
import {Card, CardHeader, CardMedia, CardTitle} from 'material-ui/Card'
import style from '../../css/home.css'

class Day4 extends React.Component {
    render(){
        return <Card>
            <CardHeader title="God Will Always Love You" subtitle="Day 4"/>
            <CardMedia
                overlay={<CardTitle title='"Your unfailing love will last forever" -Psalm 89:2' subtitle="Jesus dies and comes back to life. (Luke 22:66-24:12)"/>}
            >
                <div className={style.d4}><div className={`${style.grunge}`}>
                    <img src="images/d4_skyler.png" />
                </div></div>
            </CardMedia>
        </Card>

    }
}

export default Day4
