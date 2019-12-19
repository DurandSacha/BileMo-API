import React, { Component } from 'react';

export default class ResponseView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jsonld: true
        };
    }





    render() {

        return (
            <div className='new-line'>
                <p>API Response Here </p>
            </div>

        );
    }
}