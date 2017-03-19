import React from 'react'
import style from '../css/home.css'
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'

class Home extends React.Component {
    render(){
        return <div className={style.container}>
            <div className={style.heroImage}>
                <img src="images/big-hero.png"/>
            </div>


            <Card>
                <CardHeader title="God Made You" subtitle="Day 1"/>
                <CardMedia
                    overlay={<CardTitle title='"Thank you for making me so wonderfully complex." -Psalm 139:14' subtitle="God lovingly creates people (Genesis 1:26-2:4)" />}
                >
                    <div className={style.d1}><div className={`${style.grunge}`}>
                        <img src="images/d1_decker.png" />
                    </div></div>
                </CardMedia>
            </Card>


            <Card>
                <CardHeader title="God Is For You" subtitle="Day 2"/>
                <CardMedia
                    overlay={<CardTitle title='"If God is for us, who can ever be against us?" -Romans 8:31' subtitle="Rehab believes in God's might power (Joshua 1-2)" s/>}
                >
                    <div className={style.d2}><div className={`${style.grunge}`}>
                        <img src="images/d2_tina.png" />
                    </div></div>
                </CardMedia>
            </Card>

            <Card>
                <CardHeader title="God Is Always With You" subtitle="Day 3"/>
                <CardMedia
                    overlay={<CardTitle title='"The Lord you God is with you wherever you go." -Joshua 1:9' subtitle="God is with Gideon (Judges 6:11-7:25)"/>}
                >
                    <div className={style.d3}><div className={`${style.grunge}`}>
                    <img src="images/d3_bubba.png" />
                    </div></div>
                </CardMedia>
            </Card>

            <Card>
                <CardHeader title="God Will Always Love You" subtitle="Day 4"/>
                <CardMedia
                    overlay={<CardTitle title='"Your unfailing love will last forever" -Psalm 89:2' subtitle="Jesus dies and comes back to life. (Luke 22:66-24:12)"/>}
                >
                    <div className={style.d4}><div className={`${style.grunge}`}>
                    <img src="images/d4_skyler.png" />
                    </div></div>
                </CardMedia>
            </Card>

            <Card>
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
        </div>
    }
}

export default Home