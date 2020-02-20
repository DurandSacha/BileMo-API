'use strict'

import React, { Component } from 'react';

import 'whatwg-fetch';
import 'whatwg-fetch';
//import DisplayOneSmartphone from "../Components/Displayers/displayOneSmartphone";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);



export default class displayUsers extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const results = this.props.results;
        return(
            <TableContainer component={Paper}>
                <Table className="table" aria-label="customized table">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>id</StyledTableCell>
                            <StyledTableCell> name</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {results.map(result => (
                            <StyledTableRow key={result.name}>
                                <StyledTableCell component="th" scope="row">
                                    {result.id}
                                </StyledTableCell>
                                <StyledTableCell align="left">{result.name}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}