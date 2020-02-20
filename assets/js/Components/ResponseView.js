'use strict'

import React, { Component } from 'react';
import generateButton from "../Components/generateButton";
import PropTypes from 'prop-types';
import 'whatwg-fetch';
import { getSmartphones, getOneSmartphone , getUsers} from "../api/smartphoneApi";
import DisplaySmartphones from "../Components/Displayers/displaySmartphones";
import DisplayUsers from "../Components/Displayers/displayUsers";

export default class ResponseView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            results: [],
        };
    }
    render() {
        const {error, isLoaded} = this.state;
        const {results, id} = this.props;
        if(this.props.buttonViewSmartphoneState == true){return(<DisplaySmartphones  results={results}/>);}
        else if(this.props.buttonViewUsers == true){return(<DisplayUsers  results={results}/>);}
        else {
            return (
                <div className='new-line'>
                    <p> Effectuez une requete</p>
                </div>
            );
        }
    }
}
