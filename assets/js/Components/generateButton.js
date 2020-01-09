'use strict'

import React, { Component } from 'react';
import { render } from 'react-dom';
import ResponseView from "../Components/ResponseView";

export default class generateButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            viewSmartphoneState: false,
            viewOneSmartphoneState: false,
            viewUserState: false,
        };
    }


    ReinizializeState() {
        this.setState({viewSmartphoneState: false});
        this.setState({viewOneSmartphoneState: false});
        this.setState({viewUserState: false});
        console.log('reinitialisation executé');
    };



    viewSmartphone() {
        this.ReinizializeState();
        this.setState({viewSmartphoneState: true});
        let button = 'viewSmartphoneState';
        console.log('API vers api/smartphones?page=1 ');
    }

    viewOneSmartphone() {
        this.ReinizializeState();
        this.setState({viewOneSmartphoneState: true});
        console.log('API vers api/smartphones/{id} ');
    }

    viewUsers() {
        this.ReinizializeState();
        this.setState({viewUserState: true});
        console.log('API vers api/users ');
    }

    render() {
        return (

            <div>
                <div className="row">
                    <div className="data col-lg-3">
                        <button type="button" className="btn btn-success js-view-smartphones"
                                onClick = {() => this.viewSmartphone ()}>View Smartphones Available
                        </button>
                    </div>

                    <div className="data col-lg-2">
                        <button type="button" className="btn btn-success js-view-one-smartphone"
                                onClick = {() => this.viewOneSmartphone ()}>View one Smartphone
                        </button>
                    </div>

                    <div className="data col-lg-2">
                        <button type="button" className="btn btn-success js-view-users"
                                onClick = {() => this.viewUsers ()}>View Your User
                        </button>
                    </div>
                    <br/>

                </div>

                <div className="row">
                    <p>state 1 :  {this.state.viewSmartphoneState}</p>
                </div>

                <ResponseView
                    buttonViewSmartphoneState={this.state.viewSmartphoneState}
                    buttonViewOneSmartphoneState={this.state.viewOneSmartphoneState}
                    buttonViewUsers={this.state.viewUserState}
                />
            </div>

        );
    }
}