'use strict'

import React, { Component } from 'react';
import generateButton from "../Components/generateButton";
import PropTypes from 'prop-types';
import 'whatwg-fetch';
//import 'promise-polyfill/src/polyfill';

export default class ResponseView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            results: [],
        };
        this.apiQuery = this.apiQuery.bind(this);
        this.queryViewSmartphone = this.queryViewSmartphone.bind(this);
        this.queryViewOneSmartphone = this.queryViewOneSmartphone.bind(this);
        this.queryViewUsers = this.queryViewUsers.bind(this);
    }

    componentDidMount() {

    }


    
    apiQuery = () => {
        console.log('apiquery()');
        if (this.props.buttonViewSmartphoneState == true) {
            this.queryViewSmartphone();
        } else if (this.props.buttonViewOneSmartphoneState == true) {
            this.queryViewOneSmartphone();
        } else if (this.props.buttonViewUsers == true) {
            this.queryViewUsers();
        }
    };

    queryViewSmartphone = () => {
        console.log('query in progress');
        return fetch('api/smartphones.json')
            .then(response => {
                return response.text()
                    .then((text) => {
                        if (text) {
                            if (JSON.parse(text).hasOwnProperty('hydra:member')) return JSON.parse(text)['hydra:member'];
                            console.log(JSON.parse(text));
                            this.setState({
                                results : JSON.parse(text),
                            })
                        }
                    return '';
                    });
            });
    };

    queryViewOneSmartphone = () => {
        return fetch('api/smartphones/1 ')
            .then(response => {
                return response.json();
            })
    };

    queryViewUsers = () => {
        return fetch('api/users.json')
            .then(response => {
                return response.text()
                    .then((text) => {
                        if (text) {
                            if (JSON.parse(text).hasOwnProperty('hydra:member')) return JSON.parse(text)['hydra:member'];
                            console.log(JSON.parse(text));
                            this.setState({
                                results : JSON.parse(text),
                            })
                        }
                        return '';
                    });
            });
    };

    render() {
        const {hasError, isLoaded, results} = this.state;

        console.log('view smartphones: ' + this.props.buttonViewSmartphoneState);
        console.log('view one smartphone: ' + this.props.buttonViewOneSmartphoneState);
        console.log('view users: ' + this.props.buttonViewUsers);
        console.log('-------------------');

        this.apiQuery();
        let text = <span>❤️</span>;

        if (this.state.hasError) {
            return <h1>Une erreur a été detecté</h1>;
        }
            return (
                <div className='new-line'>
                    <p>JSON Response {text} </p>
                    <ul>
                        {results.map((result) =>
                            <li key={result.id}>{result.name}</li>
                        )}
                    </ul>
                </div>
            );
    }
}
