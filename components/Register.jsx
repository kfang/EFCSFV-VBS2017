import React from 'react'

import Checkbox from 'material-ui/Checkbox'
import TextField from 'material-ui/TextField'

import Paper from 'material-ui/Paper'
import style from '../css/register.css'


class Register extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            inputs: {
                pEmail: '',
                pName: '',
                isAgreed: false
            }
        }
    }

    __onFieldChange = (e) => {
        const {inputs} = this.state;
        const v = e.target.type == 'checkbox' ? e.target.checked : e.target.value;
        inputs[e.target.name] = v;
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


    render(){
        return <div className={style.container}>
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
        </div>
    }
}


export default Register
