'use strict'

import React, { Component } from 'react';
import { render } from 'react-dom';
import ResponseView from "../Components/ResponseView";
import { getSmartphones, getOneSmartphone , getUsers} from "../api/smartphoneApi";


export default class generateButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            viewSmartphoneState: true,
            viewOneSmartphoneState: false,
            viewUserState: false,
            results: [],

        };
    }


    ReinizializeState() {
        this.setState({viewSmartphoneState: false});
        this.setState({viewOneSmartphoneState: false});
        this.setState({viewUserState: false});
        console.log('reinitialisation executé');
    };

    viewSmartphone = (event) => {

        this.ReinizializeState();
        getSmartphones()
            .then(response => {
                this.setState({
                    results : response,
                    viewUserState: true,
                })
            });
    };




    viewOneSmartphone() {
        this.ReinizializeState();
        getOneSmartphone()
            .then(response => {
                this.setState({
                    results : response,
                    viewOneSmartphoneState: true,
                })
            });
    };



    viewUsers() {
        this.ReinizializeState();
        getUsers()
            .then(response => {
                this.setState({
                    viewUserState: true,
                    results : response
                })
            });
    }

    render() {

        return (



            <div>
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home"
                           role="tab" aria-controls="nav-home" aria-selected="true"
                           onClick = {() => this.viewSmartphone ()}>Smartphones</a>

                        <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile"
                           role="tab" aria-controls="nav-profile" aria-selected="false"
                           onClick = {() => this.viewUsers ()}>Your Users</a>

                    </div>
                </nav>
                <br/><br/><br/><br/>
                <ResponseView
                    {...this.props}
                    {...this.state}
                    results={this.state.results}
                    buttonViewSmartphoneState={this.state.viewSmartphoneState}
                    buttonViewOneSmartphoneState={this.state.viewOneSmartphoneState}
                    buttonViewUsers={this.state.viewUserState}
                />
            </div>

        );
    }
}