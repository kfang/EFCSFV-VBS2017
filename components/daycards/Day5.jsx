import React from 'react'
import {Card, CardHeader, CardMedia, CardTitle} from 'material-ui/Card'
import style from '../../css/home.css'

class Day5 extends React.Component {
    render(){
        return <Card>
            <CardHeader title="God made you" subtitle="Day 5"/>
            <CardMedia
                overlay={<CardTitle title='"For I know the plans I have for you, says the Lord" -Jeremiah 29:11'
                                    subtitle="Abigail brings peace. (1 Samuel 25)"/>}
            >
                <div className={style.d5}><div className={`${style.grunge}`}>
                    <img src="images/d5_abbee.png" />
                </div></div>
            </CardMedia>
        </Card>
    }
}

export default Day5
