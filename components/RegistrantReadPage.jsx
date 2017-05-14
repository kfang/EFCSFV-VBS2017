import React from 'react'

import {withRouter} from 'react-router-dom'
import Paper from 'material-ui/Paper'
import DatePicker from 'material-ui/DatePicker'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'

import Registrant from './Registrant'

import styles from '../css/registrant.css'

class RegistrantReadPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            registrant: {},
            contacts: [],
            registration: {}
        }
    }

    componentWillMount(){
        this.__loadRegistrant(this.props);
    }
    componentWillReceiveProps(props){
        this.__loadRegistrant(props);
    }

    __loadRegistrant = (props) => {
        const {id} = props.match.params;
        fetch(`https://registry.kfang.xyz/registrants/${id}`, {
            credentials: 'include'
        }).then((r) => { return r.json() }).then((r) => {
            const {registrants, contacts, registrations} = r;
            const registrant = registrants[0];
            const registration = registrations[0];
            this.setState({
                registrant: registrant,
                contacts: contacts,
                registration: registration
            });
        })
    };

    __renderRegistrantCard = () => {
        const {registrant} = this.state;
        return <Paper className={styles.paper}>
            <h2>Registrant</h2>
            <Registrant registrant={registrant} onRegistrantUpdated={this.__onRegistrantUpdated}/>
        </Paper>
    };

    __renderGuardian = (guardian) => {
        const {cellPhone, city, email, firstName, homePhone, lastName, state, street, zip, extraInformation = {}} = guardian;
        const {homeChurch} = extraInformation;

        return <Paper className={styles.paper}>
            <h2>Guardian</h2>
            <div className={styles.fieldContainer}>
                <TextField className={styles.field} floatingLabelText="First Name" value={firstName}/>
                <TextField className={styles.field} floatingLabelText="Last Name" value={lastName}/>
                <TextField className={styles.field} floatingLabelText="Cell" value={cellPhone}/>
                <TextField className={styles.field} floatingLabelText="Home" value={homePhone}/>
                <TextField className={styles.field} floatingLabelText="Email" value={email}/>
            </div>
            <div className={styles.fieldContainer}>
                <TextField className={styles.field} floatingLabelText="Street" value={street}/>
                <TextField className={styles.field} floatingLabelText="City" value={city}/>
                <TextField className={styles.field} floatingLabelText="State" value={state}/>
                <TextField className={styles.field} floatingLabelText="Zip" value={zip}/>
                <TextField className={styles.field} floatingLabelText="Home Church" value={homeChurch}/>
            </div>
        </Paper>
    };

    __renderEmergency = (emergency) => {
        const {firstName, homePhone, lastName, relationship} = emergency;
        return <Paper className={styles.paper}>
            <h2>Emergency Contact</h2>
            <div className={styles.fieldContainer}>
                <TextField className={styles.field} floatingLabelText="First Name" value={firstName} />
                <TextField className={styles.field} floatingLabelText="Last Name" value={lastName} />
                <TextField className={styles.field} floatingLabelText="Phone" value={homePhone} />
                <TextField className={styles.field} floatingLabelText="Relationship" value={relationship} />
            </div>
        </Paper>
    };

    __renderRegistration = () => {
        const {registration} = this.state;
        const {code, createdOn} = registration;
        const createdOnDate = createdOn ? new Date(createdOn) : null;
        return <Paper className={styles.paper}>
            <h2>Registration</h2>
            <div className={styles.fieldContainer}>
                <TextField className={styles.field} floatingLabelText="Confirmation Code" value={code} />
                <DatePicker className={styles.field} floatingLabelText="Registered On" value={createdOnDate}/>
            </div>
        </Paper>
    };

    __renderBackButton = () => {
        return <Paper className={styles.paper}>
            <FlatButton onTouchTap={() => {this.props.history.push("/admin")}} label="Back" />
        </Paper>
    };


    __onRegistrantUpdated = (registrant) => {
        this.setState({registrant: registrant})
    };

    render(){
        const {contacts} = this.state;
        const guardian = contacts.find((c) => {return c.flags.includes('guardian')});
        const emergency = contacts.find((c) => {return c.flags.includes('emergency')});

        return <div>
            {this.__renderBackButton()}
            {this.__renderRegistrantCard()}
            {guardian !== undefined ? this.__renderGuardian(guardian) : null}
            {emergency !== undefined ? this.__renderEmergency(emergency) : null}
            {this.__renderRegistration()}
        </div>
    }
}

export default withRouter(RegistrantReadPage)
