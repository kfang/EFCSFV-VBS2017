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
                pName: '',
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

    __onSubmit = () => {

    };

    __onFieldChange = (e) => {
        const {inputs} = this.state;
        const v = e.target.type == 'checkbox' ? e.target.checked : e.target.value;
        inputs[e.target.name] = v;
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
        this.setState({inputs: inputs});
    };

    __onChildSelectChange = (idx, name) => (e, k, p) => {
        const {inputs} = this.state;
        const {children} = inputs;
        children[idx][name] = p;
        this.setState({inputs: inputs});
    };

    __renderField = (field, label, className) => {
        const {inputs} = this.state;
        const floatingLabelStyle = {
            color: 'gray'
        };
        return <div className={className}>
            <TextField
                name={field}
                fullWidth={true}
                value={inputs[field]}
                onChange={this.__onFieldChange}
                floatingLabelText={label}
                floatingLabelStyle={floatingLabelStyle}
            />
        </div>
    };

    __renderCheckbox = () => {
        const {inputs} = this.state;
        const {isAgreed} = inputs;
        const label = "I agree to the Liability Agreement stated above";

        return <div className={style.agreement}>
            <Checkbox label={label} checked={isAgreed} name="isAgreed" onCheck={this.__onFieldChange} />
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
                onChange={this.__onChildFieldChange}
                floatingLabelText={label}
                floatingLabelStyle={floatingLabelStyle}
            />
        </div>
    };

    __renderChild = (child, idx) => {
        const floatingLabelStyle = {
            color: 'gray'
        };

        return <Paper className={style.registerForm} key={idx}>
            <div className={style.registerFormRow}><h2>CHILD #{idx}</h2></div>
            <div className={style.registerFormRow}>
                {this.__renderChildField("first", "First Name", style.w1, idx)}
                {this.__renderChildField("last", "Last Name", style.w1, idx)}
                <div className={style.w1}>
                    <SelectField floatingLabelText={"Full/Half Day"} floatingLabelStyle={floatingLabelStyle}  value={child.stay} onChange={this.__onChildSelectChange(idx, "stay")}>
                        <MenuItem value={"full-day"} primaryText={"Full Day"} />
                        <MenuItem value={"half-day"} primaryText={"Half Day"} />
                    </SelectField>
                </div>
            </div>

            <div className={style.registerFormRow}>
                <DatePicker autoOk={true} floatingLabelText="Birthday" floatingLabelStyle={floatingLabelStyle}  className={style.w1} />

                <div className={style.w1}>
                    <SelectField floatingLabelText={"Grade"} floatingLabelStyle={floatingLabelStyle} value={child.grade} onChange={this.__onChildSelectChange(idx, "grade")}>
                        <MenuItem value={"p"} primaryText={"Pre-school"} />
                        <MenuItem value={"k"} primaryText={"Kindergarten"} />
                        <MenuItem value={"1"} primaryText={"1st Grade"} />
                        <MenuItem value={"2"} primaryText={"2nd Grade"} />
                        <MenuItem value={"3"} primaryText={"3rd Grade"} />
                        <MenuItem value={"4"} primaryText={"4th Grade"} />
                        <MenuItem value={"5"} primaryText={"5th Grade"} />
                        <MenuItem value={"6"} primaryText={"6th+ Grade"} />
                    </SelectField>
                </div>

                <div className={style.w1}>
                    <SelectField floatingLabelText={"Gender"} floatingLabelStyle={floatingLabelStyle}  value={child.gender} onChange={this.__onChildSelectChange(idx, "gender")}>
                        <MenuItem value={"male"} primaryText={"male"} />
                        <MenuItem value={"female"} primaryText={"female"} />
                    </SelectField>
                </div>
            </div>

            <div className={style.registerFormRow}>
                <div className={style.w1}>
                    <TextField multiLine={true} rows={1} fullWidth={true} floatingLabelText="Allergies/Medication" floatingLabelStyle={floatingLabelStyle} />
                </div>
            </div>

            <div className={style.registerFormRow}>
                <div className={style.w1}>
                    <TextField multiLine={true} rows={1} fullWidth={true} floatingLabelText="Special Remarks (behavioral issues, special needs, etc...)" floatingLabelStyle={floatingLabelStyle} />
                </div>
            </div>

            <div className={style.buttonRow}>
                <div className={style.button}>
                    <FlatButton label={"Remove"} secondary={true} onTouchTap={this.__onRemoveChildClicked(idx)}/>
                </div>
            </div>


        </Paper>
    };

    render(){
        const {inputs} = this.state;
        const {children} = inputs;

        return <form className={style.container}>
            <Paper className={style.registerForm}>
                <div className={style.registerFormRow}><h2>PARENT INFORMATION</h2></div>
                <div className={style.registerFormRow}>
                    {this.__renderField("pName", "Parent's Name", style.w1)}
                    {this.__renderField("pEmail", "Parent's Email", style.w1)}
                </div>
                <div className={style.registerFormRow}>
                    {this.__renderField("pStreet", "Street Address", style.w5)}
                    {this.__renderField("pCity", "City", style.w1)}
                    {this.__renderField("pState", "State", style.w1)}
                    {this.__renderField("pZip", "Zip", style.w1)}
                </div>
                <div className={style.registerFormRow}>
                    {this.__renderField("pHomePhone", "Home Phone", style.w1)}
                    {this.__renderField("pCellPhone", "Cell Phone", style.w1)}
                    {this.__renderField("pHomeChurch", "Home Church", style.w3)}
                </div>
            </Paper>

            {children.map(this.__renderChild)}
            <RaisedButton label="Add Child" fullWidth={true} backgroundColor={blue100} onTouchTap={this.__onAddChildClicked}/>

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
            <RaisedButton label="Submit" fullWidth={true} backgroundColor={blue100} />
        </form>
    }
}


export default Register
