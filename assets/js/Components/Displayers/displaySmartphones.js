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
import {getOneSmartphone} from "../../api/smartphoneApi";
import DisplayOneSmartphone from '../../Components/Displayers/displayOneSmartphone';




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


export default class displaySmartphones extends Component {

    constructor(props) {
        super(props);
        this.state = {
            viewSmartphoneState: false,
            viewOneSmartphoneState: false,
            viewUserState: false,
            results: [],
            resultsOne:[],
        };
    }

    ReinizializeState() {
        this.setState({viewSmartphoneState: false});
        this.setState({viewOneSmartphoneState: false});
        this.setState({viewUserState: false});
        this.setState({result: []});
        this.setState({resultOne: []});

        console.log('reinitialisation executé');
    };

    viewOneSmartphone(id) {
        this.ReinizializeState();
        getOneSmartphone(id)
            .then(response => {
                this.setState({
                    resultsOne: response,
                    viewOneSmartphoneState: true,


                })
            });
    };

    render() {
        const {results} = this.props;
        const {resultsOne} = this.state;

        if (this.state.viewOneSmartphoneState == true) {
            return (
                <DisplayOneSmartphone  resultsOne={resultsOne}/>
            );
        }
        else {
            return (
                <TableContainer component={Paper}>
                    <Table className="table" aria-label="customized table">
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell>id</StyledTableCell>
                                <StyledTableCell> name</StyledTableCell>
                                <StyledTableCell> More</StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {results.map(result => (
                                <StyledTableRow key={result.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {result.id}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">{result.name}</StyledTableCell>

                                    <StyledTableCell align="left">
                                        <button type="button" className="btn btn-primary"
                                                onClick={() => this.viewOneSmartphone(result.id)}>View More
                                        </button>

                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            );
        }
    }
}