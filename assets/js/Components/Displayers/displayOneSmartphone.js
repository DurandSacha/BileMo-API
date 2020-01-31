'use strict'

import React, { Component } from 'react';

import 'whatwg-fetch';
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


export default class displayOneSmartphone extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {resultsOne} = this.props;

        return(
            <TableContainer component={Paper}>
                <Table className="table" aria-label="customized table">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>id</StyledTableCell>
                            <StyledTableCell> name</StyledTableCell>
                            <StyledTableCell> price</StyledTableCell>
                            <StyledTableCell> Screen Size</StyledTableCell>
                            <StyledTableCell> Release Date</StyledTableCell>
                            <StyledTableCell> Autonomy</StyledTableCell>
                            <StyledTableCell> OS</StyledTableCell>
                            <StyledTableCell> Weight</StyledTableCell>
                            <StyledTableCell> Network Type</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">
                                    {resultsOne.id}
                                </StyledTableCell>
                                <StyledTableCell align="left">{resultsOne.name}</StyledTableCell>
                                <StyledTableCell align="left">{resultsOne.price}</StyledTableCell>
                                <StyledTableCell align="left">{resultsOne.screenSize}</StyledTableCell>
                                <StyledTableCell align="left">{resultsOne.releaseDate}</StyledTableCell>
                                <StyledTableCell align="left">{resultsOne.autonomy}</StyledTableCell>
                                <StyledTableCell align="left">{resultsOne.OS}</StyledTableCell>
                                <StyledTableCell align="left">{resultsOne.weight}</StyledTableCell>
                                <StyledTableCell align="left">{resultsOne.network}</StyledTableCell>
                            </StyledTableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}