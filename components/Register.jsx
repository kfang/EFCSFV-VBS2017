import React from 'react'

import Checkbox from 'material-ui/Checkbox'
import DatePicker from 'material-ui/DatePicker'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

import Paper from 'material-ui/Paper'
import style from '../css/register.css'

import {blue100} from 'material-ui/styles/colors'


class Register extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            inputs: {
                pEmail: '',
                pFirst: '',
                pLast: '',
                pStreet: '',
                pCity: '',
                pState: '',
                pZip: '',
                pHomePhone: '',
                pCellPhone: '',
                pHomeChurch: '',
                isAgreed: false,
                children: [{}],
                eName: '',
                ePhone: '',
                eRelationship: ''
            }
        }
    }

    __verifyEmergency = () => {
        const {inputs} = this.state;
        const {eName, ePhone, eRelationship} = inputs;
        const errors = {};
        if(eName.length === 0) errors.eNameError = "required";
        if(ePhone.length === 0) errors.ePhoneError = "required";
        if(eRelationship.length === 0) errors.eRelationshipError = "required";

        const errorKeys = Object.keys(errors);
        errorKeys.forEach((k) => inputs[k] = errors[k]);
        return errorKeys.length === 0;
    };

    __verifyParent = () => {
        const {inputs} = this.state;
        const {pFirst, pLast, pEmail, pStreet, pCity, pState, pZip} = inputs;
        const {pHomePhone, pCellPhone, pHomeChurch} = inputs;

        const errors = {};

        if(pFirst.length === 0) errors.pFirstError = 'required';
        if(pLast.length === 0) errors.pLastError = 'required';
        if(pEmail.length === 0) errors.pEmailError = 'required';
        if(pStreet.length === 0) errors.pStreetError = 'required';
        if(pCity.length === 0) errors.pCityError = 'required';
        if(pState.length === 0) errors.pStateError = 'required';
        if(pZip.length === 0) errors.pZipError = 'required';
        if(pHomePhone.length === 0) errors.pHomePhoneError = 'required';
        if(pCellPhone.length === 0) errors.pCellPhoneError = 'required';
        if(pHomeChurch.length === 0) errors.pHomeChurchError = 'required';

        const errorKeys = Object.keys(errors);
        errorKeys.forEach((key) => inputs[key] = errors[key]);
        return errorKeys.length === 0;
    };

    __verifyChild = (child, idx) => {
        const {first, last, stay, grade, gender, birthday} = child;

        const isValidStr = (str) => {
            return str !== undefined && str.length > 0;
        };

        const errors = {};

        if(!isValidStr(first)) errors.firstError = 'required';
        if(!isValidStr(last)) errors.lastError = 'required';
        if(!isValidStr(stay)) errors.stayError = 'required';
        if(!isValidStr(grade)) errors.gradeError = 'required';
        if(!isValidStr(gender)) errors.genderError = 'required';

        if(birthday === undefined) errors.birthdayError = 'required';

        const errorKeys = Object.keys(errors);
        errorKeys.forEach((key) => child[key] = errors[key]);
        return errorKeys.length === 0;
    };

    __verifyChecked = () => {
        const {inputs} = this.state;
        const {isAgreed} = inputs;
        if(isAgreed === undefined || isAgreed === false){
            inputs.isAgreedError = 'you must agree to the liability';
            return false;
        } else {
            return true;
        }
    };

    __onSubmit = () => {
        const {inputs} = this.state;
        const {children} = inputs;
        const isParentValid = this.__verifyParent();
        const isEmergencyValid = this.__verifyEmergency();
        const isVerifiedChecked = this.__verifyChecked();
        const areChildrenValid = !children.map(this.__verifyChild).includes(false);

        console.log("e: " + isEmergencyValid);
        console.log("p: " + isParentValid);
        console.log("c: " + areChildrenValid);
        console.log("v: " + isVerifiedChecked);

        if(isEmergencyValid && isParentValid && areChildrenValid && isVerifiedChecked){
            return console.log("GOOD TO GO")
        } else {
            inputs.submitError = "We're missing some information in your submission. Please fix them before continuing.";
            this.setState({inputs: inputs});
        }
    };

    __onFieldChange = (e) => {
        const {inputs} = this.state;
        const v = e.target.type == 'checkbox' ? e.target.checked : e.target.value;
        inputs[e.target.name] = v;
        delete inputs[e.target.name + 'Error'];
        this.setState({inputs: inputs});
    };

    __onAddChildClicked = () => {
        const {inputs} = this.state;
        inputs.children.push({});
        this.setState({inputs: inputs});
    };

    __onRemoveChildClicked = (idx) => () => {
        const {inputs} = this.state;
        inputs.children.splice(idx, 1);
        this.setState({inputs: inputs});
    };

    __onChildFieldChange = (idx) => (e) => {
        const {inputs} = this.state;
        const {children} = inputs;
        children[idx][e.target.name] = e.target.value;
        delete children[idx][e.target.name + 'Error'];
        this.setState({inputs: inputs});
    };

    __onChildBirthdayChange = (idx) => (a, date) => {
        const {inputs} = this.state;
        inputs.children[idx]['birthday'] = date;
        delete inputs.children[idx]['birthdayError'];
        this.setState({inputs: inputs})
    };

    __onChildSelectChange = (idx, name) => (e, k, p) => {
        const {inputs} = this.state;
        const {children} = inputs;
        children[idx][name] = p;
        delete children[idx][name + 'Error'];
        this.setState({inputs: inputs});
    };

    __renderField = (field, label, className) => {
        const {inputs} = this.state;
        const floatingLabelStyle = {
            color: 'gray'
        };

        const errField = field + 'Error';
        return <div className={className}>
            <TextField
                name={field}
                fullWidth={true}
                value={inputs[field]}
                onChange={this.__onFieldChange}
                errorText={inputs[errField]}
                floatingLabelText={label}
                floatingLabelStyle={floatingLabelStyle}
            />
        </div>
    };

    __renderCheckbox = () => {
        const {inputs} = this.state;
        const {isAgreed, isAgreedError} = inputs;
        const label = "I agree to the Liability Agreement stated above";

        const error = isAgreedError ? <span style={{color: 'red'}}>{isAgreedError}</span> : null;

        return <div className={style.agreement}>
            <Checkbox
                label={label}
                checked={isAgreed} name="isAgreed"
                onCheck={this.__onFieldChange}
            />
            {error}
        </div>
    };

    __renderChildField = (field, label, className, idx) => {
        const {inputs} = this.state;
        const {children} = inputs;

        const floatingLabelStyle = {
            color: 'gray'
        };

        return <div className={className}>
            <TextField
                name={field}
                fullWidth={true}
                value={children[idx][field]}
                onChange={this.__onChildFieldChange(idx)}
                floatingLabelText={label}
                floatingLabelStyle={floatingLabelStyle}
                errorText={children[idx][field + 'Error']}
            />
        </div>
    };

    __renderChild = (child, idx) => {
        const {allergies, remarks, birthday, birthdayError} = child;
        const floatingLabelStyle = {
            color: 'gray'
        };

        return <Paper className={style.registerForm} key={idx}>
            <div className={style.registerFormRow}><h2>CHILD #{idx + 1}</h2></div>
            <div className={style.registerFormRow}>
                {this.__renderChildField("first", "First Name", style.w1, idx)}
                {this.__renderChildField("last", "Last Name", style.w1, idx)}
                <div className={style.w1}>
                    <SelectField
                        floatingLabelText={"Full/Half Day"} floatingLabelStyle={floatingLabelStyle}
                        value={child.stay} errorText={child.stayError}
                        onChange={this.__onChildSelectChange(idx, "stay")}
                    >
                        <MenuItem value={"full-day"} primaryText={"Full Day"} />
                        <MenuItem value={"half-day"} primaryText={"Half Day"} />
                    </SelectField>
                </div>
            </div>

            <div className={style.registerFormRow}>
                <DatePicker
                    autoOk={true} className={style.w1}
                    floatingLabelText="Birthday" floatingLabelStyle={floatingLabelStyle}
                    name="birthday" value={birthday} errorText={birthdayError}
                    onChange={this.__onChildBirthdayChange(idx)}
                />

                <div className={style.w1}>
                    <SelectField
                        floatingLabelText={"Grade"} floatingLabelStyle={floatingLabelStyle}
                        value={child.grade} errorText={child.gradeError}
                        onChange={this.__onChildSelectChange(idx, "grade")}
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
                </div>

                <div className={style.w1}>
                    <SelectField
                        floatingLabelText={"Gender"} floatingLabelStyle={floatingLabelStyle}
                        value={child.gender} errorText={child.genderError}
                        onChange={this.__onChildSelectChange(idx, "gender")}
                    >
                        <MenuItem value={"male"} primaryText={"male"} />
                        <MenuItem value={"female"} primaryText={"female"} />
                    </SelectField>
                </div>
            </div>

            <div className={style.registerFormRow}>
                <div className={style.w1}>
                    <TextField
                        multiLine={true} rows={1} fullWidth={true}
                        floatingLabelText="Allergies/Medication"
                        floatingLabelStyle={floatingLabelStyle}
                        name="allergies" value={allergies}
                        onChange={this.__onChildFieldChange(idx)}
                    />
                </div>
            </div>

            <div className={style.registerFormRow}>
                <div className={style.w1}>
                    <TextField
                        multiLine={true} rows={1} fullWidth={true}
                        floatingLabelText="Special Remarks (behavioral issues, special needs, etc...)"
                        floatingLabelStyle={floatingLabelStyle}
                        name="remarks" value={remarks}
                        onChange={this.__onChildFieldChange(idx)}
                    />
                </div>
            </div>

            {idx === 0 ? null :
                <div className={style.buttonRow}>
                    <div className={style.button}>
                        <FlatButton label={"Remove"} secondary={true} onTouchTap={this.__onRemoveChildClicked(idx)}/>
                    </div>
                </div>
            }


        </Paper>
    };

    render(){
        const {inputs} = this.state;
        const {children} = inputs;

        return <form className={style.container}>
            <Paper className={style.registerForm}>
                <div className={style.registerFormRow}><h2>PARENT INFORMATION</h2></div>
                <div className={style.registerFormRow}>
                    {this.__renderField("pFirst", "First Name", style.w1)}
                    {this.__renderField("pLast", "Last Name", style.w1)}
                    {this.__renderField("pEmail", "Email", style.w1)}
                </div>
                <div className={style.registerFormRow}>
                    {this.__renderField("pStreet", "Street Address", style.w3)}
                    {this.__renderField("pCity", "City", style.w1)}
                    {this.__renderField("pState", "State", style.w1)}
                    {this.__renderField("pZip", "Zip", style.w1)}
                </div>
                <div className={style.registerFormRow}>
                    {this.__renderField("pHomePhone", "Home Phone", style.w1)}
                    {this.__renderField("pCellPhone", "Cell Phone", style.w1)}
                    {this.__renderField("pHomeChurch", "Home Church", style.w1)}
                </div>
            </Paper>

            {children.map(this.__renderChild)}

            <div className={style.registerForm}>
                <RaisedButton label="Add Child" fullWidth={true} backgroundColor={blue100} onTouchTap={this.__onAddChildClicked}/>
            </div>

            <Paper className={style.registerForm}>
                <div className={style.registerFormRow}><h2>EMERGENCY CONTACT</h2></div>
                <div className={style.registerFormRow}>
                    {this.__renderField("eName", "Full Name", style.w1)}
                    {this.__renderField("ePhone", "Phone", style.w1)}
                    {this.__renderField("eRelationship", "Relationship", style.w1)}
                </div>
            </Paper>

            <Paper className={style.registerForm}>
                <div className={style.registerFormRow}><h2>LIABILITY</h2></div>
                <div className={style.registerFormRow}>
                    <p className={style.liability}>
                    I give permission for son, daughter, or ward to take part in Evangelical Formosan Church of
                    San Fernando Valley (EFC-SFV hereafter) VBS program from June 13, 2015 through June 17, 2015.
                    In consideration of my decision to allow my child to walk around the church campus, and fully
                    recognizing that such an undertaking involves an element of risk, I assume all risks and hazards
                    of my decision. I hereby release, absolve, and indemnify and agree to hold harmless EFC-SFV, its
                    agents, employees, and officers; the chaperones, leaders, organizers and sponsors. EFC-SFV, nor
                    any of the aforementioned people shall be held financially responsible for any injury, illness or
                    death incurred as a direct or indirect result of my decision.

                    <br />
                    <br />

                    In the event that medical treatment is required, and if I cannot seek treatment on my own, I give
                    my permission for the staff to seek the service of a licensed physician to provide the necessary
                    care, including anesthesia, for my well-being. I also give permission to notify the person listed
                    below that there is a medical emergency. I have disclosed all of my significant medical, health
                    and special needs information.
                    </p>
                    {this.__renderCheckbox()}
                </div>
            </Paper>

            <div className={style.registerForm}>
                {inputs.submitError ? <span style={{color: 'red'}}>{inputs.submitError}</span> : null}
                <RaisedButton label="Submit" fullWidth={true} backgroundColor={blue100} onTouchTap={this.__onSubmit}/>
            </div>
        </form>
    }
}


export default Register
