import React from 'react'
import {Card, CardHeader, CardMedia, CardTitle} from 'material-ui/Card'
import style from '../../css/home.css'

class Day1 extends React.Component {
    render(){
        return <Card>
            <CardHeader title="God Made You" subtitle="Day 1"/>
            <CardMedia
                overlay={<CardTitle title='"Thank you for making me so wonderfully complex." -Psalm 139:14' subtitle="God lovingly creates people (Genesis 1:26-2:4)" />}
            >
                <div className={style.d1}><div className={`${style.grunge}`}>
                    <img src="images/d1_decker.png" />
                </div></div>
            </CardMedia>
        </Card>
    }
}

export default Day1;