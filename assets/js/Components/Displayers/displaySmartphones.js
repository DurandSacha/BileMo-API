'use strict'

import React, { Component } from 'react';
import 'whatwg-fetch';


export default class displaySmartphones extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        const results = this.props.results;
        return(
            <div className='new-line'>

                <table className="table">
                    <thead className="table thead-dark">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">View More</th>
                    </tr>
                    </thead>
                    <tbody>
                    {results.map((result) => {
                        return (
                            <tr key={result.id}>
                                <th>{result.id}</th>
                                <td>{result.id}</td>
                                <td>{result.name}</td>
                                <td>View Single Component</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        );


    }
}