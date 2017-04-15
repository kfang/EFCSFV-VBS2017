import React from 'react'
import Paper from 'material-ui/Paper'

import style from '../../css/register.css'
import Table from 'material-ui/Table'
import {TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from "material-ui";


class RegisterInformation extends React.Component {
    render(){
        return <Paper className={style.registerForm}>
            <h2>INSTRUCTIONS:</h2>
            <p>
                Please fill out all the fields and make sure they are correct. You can register more than one child at once
                by clicking the 'Add Child' button below the child form. You must agree to the Liability Agreement before
                submitting. If you run into any problems or have a question, feel free to email us at <a href="mailto:vbs@efcsfv.org"> vbs@efcsfv.org</a>.
                <br />
                <br />
            </p>
            Note: Your registration is not complete until we receive payment.
            <ol>
                <li>Please make checks payable to EFC-SFV and write the child/children's name in the memo section</li>
                <li>Pricing:
                    <Table>
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                            <TableRow>
                                <TableHeaderColumn></TableHeaderColumn>
                                <TableHeaderColumn>Regular</TableHeaderColumn>
                                <TableHeaderColumn>Early Bird (deadline: May 14th)</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>

                        <TableBody displayRowCheckbox={false}>
                            <TableRow>
                                <TableRowColumn>1/2 Day</TableRowColumn>
                                <TableRowColumn>$40</TableRowColumn>
                                <TableRowColumn>$25</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>Full Day</TableRowColumn>
                                <TableRowColumn>$50</TableRowColumn>
                                <TableRowColumn>$35</TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                </li>
                <li>Send the Check to:<br />
                    EFC-SFV VBS<br />
                    7702 Tampa Ave.<br />
                    Reseda, 91335
                </li>
                <li>Payment must be received by May 14th to get the early bird price.</li>
            </ol>
        </Paper>
    }
}

export default RegisterInformation