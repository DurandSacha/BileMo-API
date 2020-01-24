'use strict'

import React, { Component } from 'react';

import 'whatwg-fetch';


export default class displayOneSmartphones extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        const results = this.props.results;
        return(
            <div className='new-line'>
                <ul>
                    <li> id : {results.id}</li>
                    <li> name : {results.name}</li>
                    <li> price : {results.price} euros</li>
                    <li> screen size : {results.screenSize} "</li>
                    <li> release date : {results.releaseDate}</li>
                    <li> autonomy : {results.autonomy} mah</li>
                    <li> Operating Systeme : {results.OS}</li>
                    <li> weight : {results.weight}</li>
                    <li> Network : {results.network}</li>
                </ul>
            </div>
        );


    }
}