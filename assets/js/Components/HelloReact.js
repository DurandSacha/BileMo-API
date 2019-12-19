import React, { Component } from 'react';

export default class HelloReact extends Component {
    render() {
        let heart = '';
        if (this.props.withHeart) {
            heart = <span>❤️</span>;
        }
        return (
            <div className='new-line'>
                <p>Hello react {heart} </p>
            </div>

    );
    }
}