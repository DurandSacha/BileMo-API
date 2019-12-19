import React, { Component } from 'react';

export default class frontToken extends Component {
    render() {

        return (
            <div>

                <label htmlFor="name">Name of client :</label><input type="text" name="name" id="pseudo" size="20" maxLength="10"/>
                <label htmlFor="password">password :</label><input type="password" name="password" id="password" size="20" maxLength="10"/>
                <br/>
                <button type="submit" className="btn btn-little btn-success">Authentification</button>

                <p className="little">Hello is a token Result</p>
            </div>

        );
    }
}