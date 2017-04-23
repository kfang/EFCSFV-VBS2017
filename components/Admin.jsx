import React from 'react'
import {withRouter} from 'react-router-dom'

import Paper from 'material-ui/Paper'
import {Table, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, TableBody} from 'material-ui/Table'
import RaisedButton from 'material-ui/RaisedButton'
import CircularProgress from 'material-ui/CircularProgress'
import styles from '../css/admin.css'

class Admin extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            registrants: [],
            contacts: {}
        }
    }

    componentWillMount(){
        fetch('https://registry.kfang.xyz/registrants?sideload=contacts&limit=100', {
            credentials: 'include'
        }).then((r) => {return r.json()}).then((r) => {
            const {registrants, contacts} = r;
            const cMap = {};
            contacts.forEach((con) => cMap[con._id] = con);
            this.setState({isLoading: false, registrants: registrants, contacts: cMap});
        })
    }

    __navigateToRegistrant = (id) => () => {
        this.props.history.push(`/registrants/${id}`)
    };

    __renderRegistrantRow = (registrant, idx) => {
        const {allergies, birthday, comments, contacts, createdOn, firstName, flags, gender, lastName, _id} = registrant;
        const {extraInformation = {}} = registrant;
        const {stay, grade, tShirt} = extraInformation;

        return <TableRow key={_id}>
            <TableRowColumn>{idx + 1}</TableRowColumn>
            <TableRowColumn>{firstName}</TableRowColumn>
            <TableRowColumn>{lastName}</TableRowColumn>
            <TableRowColumn>{new Date(birthday).toLocaleDateString()}</TableRowColumn>
            <TableRowColumn>{gender}</TableRowColumn>
            <TableRowColumn>{grade}</TableRowColumn>
            <TableRowColumn>{stay}</TableRowColumn>
            <TableRowColumn>{tShirt}</TableRowColumn>
            <TableRowColumn>{allergies}</TableRowColumn>
            <TableRowColumn>{comments}</TableRowColumn>
            <TableRowColumn>{new Date(createdOn).toLocaleDateString()}</TableRowColumn>
            <TableRowColumn><RaisedButton label="More Info" onTouchTap={this.__navigateToRegistrant(_id)}/></TableRowColumn>
        </TableRow>
    };

    render(){
        const {isLoading, registrants} = this.state;

        return <div className={styles.container}>
            <Paper className={styles.registrantsContainer}>
                <h1>Registrants {isLoading ? <CircularProgress/> : null}</h1>
                <Table>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn>{}</TableHeaderColumn>
                            <TableHeaderColumn>First</TableHeaderColumn>
                            <TableHeaderColumn>Last</TableHeaderColumn>
                            <TableHeaderColumn>Birthday</TableHeaderColumn>
                            <TableHeaderColumn>Gender</TableHeaderColumn>
                            <TableHeaderColumn>Grade</TableHeaderColumn>
                            <TableHeaderColumn>Stay</TableHeaderColumn>
                            <TableHeaderColumn>T-Shirt</TableHeaderColumn>
                            <TableHeaderColumn>Allergies</TableHeaderColumn>
                            <TableHeaderColumn>Comments</TableHeaderColumn>
                            <TableHeaderColumn>Registration Date</TableHeaderColumn>
                            <TableHeaderColumn>{}</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>

                    <TableBody displayRowCheckbox={false} showRowHover={true}>
                        {registrants.map(this.__renderRegistrantRow)}
                    </TableBody>
                </Table>
            </Paper>
        </div>

    }
}

export default withRouter(Admin)