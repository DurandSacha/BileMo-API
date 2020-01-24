'use strict'

import React, { Component } from 'react';
import generateButton from "../Components/generateButton";
import PropTypes from 'prop-types';
import 'whatwg-fetch';
import { getSmartphones, getOneSmartphone , getUsers} from "../api/smartphoneApi";
import DisplaySmartphones from "../Components/Displayers/displaySmartphones";
import DisplayOneSmartphone from "../Components/Displayers/displayOneSmartphone";
import DisplayUsers from "../Components/Displayers/displayUsers";

export default class ResponseView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            results: [],
            handleClickSmartphone: false,
            handleClickOneSmartphone: false,
            handleClickUsers: false,
        };
    }

    render() {
        const {error, isLoaded} = this.state;
        const {results} = this.props;

        if(this.props.buttonViewSmartphoneState == true){return(<DisplaySmartphones results={results}/>);}
        if(this.props.buttonViewOneSmartphoneState == true){return(<DisplayOneSmartphone results={results}/>);}
        if(this.props.buttonViewUsers == true){return(<DisplayUsers results={results}/>);}

        return (
                <div className='new-line'>
                    <p> Chargement..</p>
                </div>
            );
    }
}
