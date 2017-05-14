import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'material-ui/DatePicker'
import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import CircularProgress from 'material-ui/CircularProgress'

import styles from '../css/registrant.css'

class Registrant extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            registrant: {}
        }
    }
    componentWillMount(){
        const rCopy = JSON.parse(JSON.stringify(this.props.registrant));
        this.setState({registrant: rCopy});
    }
    componentWillReceiveProps(props){
        const rCopy = JSON.parse(JSON.stringify(props.registrant));
        this.setState({registrant: rCopy});
    }

    __onTFChange = (e, v) => {
        const {registrant} = this.state;
        registrant[e.target.name] = v;
        this.setState({registrant: registrant});
    };

    __onSFChange = (field) => (e, k, v) => {
        const {registrant} = this.state;
        registrant[field] = v;
        this.setState({registrant: registrant});
    };

    __onSFChangeExtra = (field) => (e, k ,v) => {
        const {registrant} = this.state;
        const {extraInformation = {}} = registrant;
        extraInformation[field] = v;
        this.setState({registrant: registrant});
    };

    __onDPChange = (field) => (_, dt) => {
        const {registrant} = this.state;
        registrant[field] = dt.getTime();
        this.setState({registrant: registrant});
    };

    __onPayChange = (e, k, v) => {
        const {registrant} = this.state;
        const {flags = []} = registrant;
        const paidIdx = flags.indexOf('paid');
        const unpaidIdx = flags.indexOf('unpaid');

        if(v === true && paidIdx === -1){
            if(unpaidIdx !== -1) flags.splice(unpaidIdx, 1);
            flags.push('paid');
        }

        if(v === false && unpaidIdx === -1){
            if(paidIdx !== -1) flags.splice(paidIdx, 1);
            flags.push('unpaid')
        }

        this.setState({registrant: registrant});
    };

    __onReset = () => {
        const rCopy = JSON.parse(JSON.stringify(this.props.registrant));
        this.setState({registrant: rCopy});
    };

    __onUpdate = () => {
        const {registrant} = this.state;
        const {_id} = registrant;
        this.setState({isLoading: true}, () => {
            fetch(`https://registry.kfang.xyz/registrants/${_id}`, {
                credentials: 'include',
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(registrant)
            }).then((r) => { return r.json() }).then((r) => {
                setTimeout(() => {
                    this.setState({isLoading: false}, () => {
                        this.props.onRegistrantUpdated(r.registrants[0]);
                    });
                }, 1000);
            })
        });
    };

    render(){
        const {registrant, isLoading} = this.state;
        const {allergies, birthday, comments, createdOn, extraInformation = {}, firstName, gender, lastName, flags = []} = registrant;
        const {grade, stay, tShirt} = extraInformation;

        const birthdayDate = birthday ? new Date(birthday) : null;
        const createdOnDate = createdOn ? new Date(createdOn) : null;
        const isPaid = !flags.includes('unpaid');

        const btnStyle = {margin: '12px'};

        return <div>
            <div className={styles.fieldContainer}>
                <TextField
                    className={styles.field}
                    floatingLabelText="First Name"
                    value={firstName}
                    name="firstName"
                    onChange={this.__onTFChange}
                />
                <TextField
                    className={styles.field}
                    floatingLabelText="Last Name"
                    value={lastName}
                    name="lastName"
                    onChange={this.__onTFChange}
                />
                <DatePicker
                    className={styles.field}
                    floatingLabelText="Birthday"
                    value={birthdayDate}
                />
                <SelectField
                    className={styles.field}
                    floatingLabelText={"Gender"}
                    value={gender}
                    onChange={this.__onSFChange("gender")}
                >
                    <MenuItem value={"male"} primaryText={"Male"} />
                    <MenuItem value={"female"} primaryText={"Female"} />
                </SelectField>
            </div>
            <div className={styles.fieldContainer}>
                <DatePicker
                    className={styles.field}
                    floatingLabelText="Registered On"
                    value={createdOnDate}
                    onChange={this.__onDPChange("createdOn")}
                />
                <SelectField
                    className={styles.field}
                    value={grade}
                    floatingLabelText="Grade"
                    onChange={this.__onSFChangeExtra("grade")}
                >
                    <MenuItem value={"p"} primaryText={"Pre-school"} />
                    <MenuItem value={"k"} primaryText={"Kindergarten"} />
                    <MenuItem value={"1"} primaryText={"1st Grade"} />
                    <MenuItem value={"2"} primaryText={"2nd Grade"} />
                    <MenuItem value={"3"} primaryText={"3rd Grade"} />
                    <MenuItem value={"4"} primaryText={"4th Grade"} />
                    <MenuItem value={"5"} primaryText={"5th Grade"} />
                    <MenuItem value={"6+"} primaryText={"6th+ Grade"} />
                </SelectField>
                <SelectField
                    className={styles.field}
                    floatingLabelText={"Full/Half Day"}
                    value={stay}
                    onChange={this.__onSFChangeExtra("stay")}
                >
                    <MenuItem value={"full-day"} primaryText={"Full Day"} />
                    <MenuItem value={"half-day"} primaryText={"Half Day"} />
                </SelectField>
                <SelectField
                    className={styles.field}
                    floatingLabelText={"T-Shirt Size"}
                    value={tShirt}
                    onChange={this.__onSFChangeExtra("tShirt")}
                >
                    <MenuItem value={"XS"} primaryText={"XS (2-4)"} />
                    <MenuItem value={"S"} primaryText={"S (6-8)"} />
                    <MenuItem value={"M"} primaryText={"M (10-12)"} />
                    <MenuItem value={"L"} primaryText={"L (14-16)"} />
                </SelectField>
                <SelectField
                    className={styles.field}
                    floatingLabelText={"Payment Status"}
                    value={isPaid}
                    onChange={this.__onPayChange}
                >
                    <MenuItem value={true} primaryText="Paid" />
                    <MenuItem value={false} primaryText="Unpaid" />
                </SelectField>
            </div>
            <div className={styles.fieldContainer}>
                <TextField
                    className={styles.field}
                    floatingLabelText="Allergies"
                    value={allergies}
                    multiLine={true}
                    name="allergies"
                    onChange={this.__onTFChange}
                />
            </div>
            <div className={styles.fieldContainer}>
                <TextField
                    className={styles.field}
                    floatingLabelText="Comments"
                    value={comments}
                    multiLine={true}
                    name="comments"
                    onChange={this.__onTFChange}
                />
            </div>

            <div className={styles.fieldContainer}>
                {isLoading ? <CircularProgress/> : null}
                <RaisedButton style={btnStyle} label="Update" onTouchTap={this.__onUpdate}/>
                <RaisedButton style={btnStyle} label="Reset" onTouchTap={this.__onReset}/>
            </div>
        </div>
    }
}

Registrant.propTypes = {
    registrant: PropTypes.object,
    onRegistrantUpdated: PropTypes.func
};

export default Registrant
