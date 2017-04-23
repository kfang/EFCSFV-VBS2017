import React from 'react'

import {withRouter} from 'react-router-dom'
import Paper from 'material-ui/Paper'
import DatePicker from 'material-ui/DatePicker'
import FlatButton from 'material-ui/FlatButton'
import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField'
import TextField from 'material-ui/TextField'
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar'

import styles from '../css/registrant.css'

class Registrant extends React.Component {
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
        const {allergies, birthday, comments, createdOn, extraInformation = {}, firstName, gender, lastName, flags = []} = registrant;
        const {grade, stay, tShirt} = extraInformation;

        const birthdayDate = birthday ? new Date(birthday) : null;
        const createdOnDate = createdOn ? new Date(createdOn) : null;
        const isPaid = !flags.includes('unpaid');

        return <Paper className={styles.paper}>
            <h2>Registrant</h2>
            <div className={styles.fieldContainer}>
                <TextField className={styles.field} floatingLabelText="First Name" value={firstName}/>
                <TextField className={styles.field} floatingLabelText="Last Name" value={lastName}/>
                <DatePicker className={styles.field} floatingLabelText="Birthday" value={birthdayDate}/>
                <SelectField className={styles.field} floatingLabelText={"Gender"} value={gender}>
                    <MenuItem value={"male"} primaryText={"Male"} />
                    <MenuItem value={"female"} primaryText={"Female"} />
                </SelectField>
            </div>
            <div className={styles.fieldContainer}>
                <DatePicker className={styles.field} floatingLabelText="Registered On" value={createdOnDate}/>
                <SelectField className={styles.field} value={grade} floatingLabelText="Grade">
                    <MenuItem value={"p"} primaryText={"Pre-school"} />
                    <MenuItem value={"k"} primaryText={"Kindergarten"} />
                    <MenuItem value={"1"} primaryText={"1st Grade"} />
                    <MenuItem value={"2"} primaryText={"2nd Grade"} />
                    <MenuItem value={"3"} primaryText={"3rd Grade"} />
                    <MenuItem value={"4"} primaryText={"4th Grade"} />
                    <MenuItem value={"5"} primaryText={"5th Grade"} />
                    <MenuItem value={"6+"} primaryText={"6th+ Grade"} />
                </SelectField>
                <SelectField className={styles.field} floatingLabelText={"Full/Half Day"} value={stay}>
                    <MenuItem value={"full-day"} primaryText={"Full Day"} />
                    <MenuItem value={"half-day"} primaryText={"Half Day"} />
                </SelectField>
                <SelectField className={styles.field} floatingLabelText={"T-Shirt Size"} value={tShirt}>
                    <MenuItem value={"XS"} primaryText={"XS (2-4)"} />
                    <MenuItem value={"S"} primaryText={"S (6-8)"} />
                    <MenuItem value={"M"} primaryText={"M (10-12)"} />
                    <MenuItem value={"L"} primaryText={"L (14-16)"} />
                </SelectField>
                <SelectField className={styles.field} floatingLabelText={"Payment Status"} value={isPaid}>
                    <MenuItem value={true} primaryText="Paid" />
                    <MenuItem value={false} primaryText="Unpaid" />
                </SelectField>
            </div>
            <div className={styles.fieldContainer}>
                <TextField className={styles.field} floatingLabelText="Allergies" value={allergies} multiLine={true} />
            </div>
            <div className={styles.fieldContainer}>
                <TextField className={styles.field} floatingLabelText="Comments" value={comments} multiLine={true} />
            </div>
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

export default withRouter(Registrant)
