import React from 'react'

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
            }
        }
    }

    __onFieldChange = (e) => {
        const {inputs} = this.state;
        inputs[e.target.name] = e.target.value;
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
        </div>
    }
}


export default Register
