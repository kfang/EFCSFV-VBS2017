import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';

import styles from '../css/home-page.css'

class HomePage extends React.Component {
    render(){
        return <div className={styles.container}>
            <div className={styles.navbar}>
                <RaisedButton label="Home" />
                <div className={styles.navbarItem}>Home</div>
                <div className={styles.navbarItem}>About</div>
                <div className={styles.navbarItem}>Register</div>
                <div className={styles.navbarItem}>Contact</div>
            </div>
            <div>
                <img src="images/big-hero.png" />
            </div>
            <div>Cols</div>
        </div>
    }
}

export default HomePage