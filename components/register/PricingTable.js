import React from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from "material-ui";

class PricingTable extends React.Component {
    render(){
        return <Table>
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
    }
}

export default PricingTable