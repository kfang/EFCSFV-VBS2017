import React from 'react'
import Paper from 'material-ui/Paper'

import style from '../../css/register.css'


class ConfirmationDiag extends React.Component {
    render(){
        const {registrationCode} = this.props;

        return <div className={style.registerForm}>
            <Paper className={style.confirmationContainer}>
                <h1>Thanks for Registering!</h1>
                <h5>Don't forget! Your Registration is not yet complete until we receive your payment:</h5>
                <ol>
                    <li>Make check payable to : EFCSFV</li>
                    <li>write your child's name on the bottom of the check</li>
                    <li>
                        Send it to: <br />
                        <p>
                        EFC SFV --VBS<br />
                        7702 Tampa Avenue<br />
                        Reseda, 91335
                        </p>
                    </li>
                    <li>Payment must received by May 14th to get the early bird price</li>
                </ol>

                <h4>Your confirmation Code: {registrationCode}</h4>
            </Paper>
        </div>
    }
}

ConfirmationDiag.propTypes = {
    registrationCode: React.PropTypes.string
};

export default ConfirmationDiag
