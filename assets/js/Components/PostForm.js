import React, { Component } from 'react';

export default class PostForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            form: false
        };
    }

    render() {

        let name = ''
        name = <input type="text" name="name" id="pseudo" size="20" maxLength="10"/>

        return (
            <form method="post" action="#">
                <p>

                </p>
            </form>
        );
    }
}