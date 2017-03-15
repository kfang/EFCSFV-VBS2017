import React from 'react'
import styles from '../css/index.css'

class HelloWorld extends React.Component {
    render(){
        return <div>
            <h1 className={styles.headline}>Hello World!</h1>
        </div>
    }
}

export default HelloWorld