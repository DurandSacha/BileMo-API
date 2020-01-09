import React, { Component } from 'react';
import generateButton from "../Components/generateButton";

export default class ResponseView extends Component {

    constructor(props) {
        super(props);
        this.setState({
            smartphones: []
        });
    }

    //   (arg) => this.namefunction (){}
    apiQuery() {
        if(this.props.buttonViewSmartphoneState == true){
            this.queryViewSmartphone();
        }
        else if  (this.props.buttonViewOneSmartphoneState == true){
            this.queryViewOneSmartphone();
        }
        else if  (this.props.buttonViewUsers == true){
            this.queryViewUsers();
        }
    }

    queryViewSmartphone() {
        console.log('query in progress');
        return fetch('api/smartphones?page=1')
            .then(response => {
                this.setState({
                    smartphones: response.smartphones
                });
                //return response.json();
            })
    }

    queryViewOneSmartphone() {
        return fetch('api/smartphones/1 ')
            .then(response => {
                return response.json();
            })
    }

    queryViewUsers() {
        return fetch('api/users/ ')
            .then(response => {
                return response.json();
            })
    }



    render() {
        //const { smartphones2 } = this.state;
        console.log('view smartphones: ' + this.props.buttonViewSmartphoneState);
        console.log('view one smartphone: ' + this.props.buttonViewOneSmartphoneState);
        console.log('view users: ' + this.props.buttonViewUsers);
        console.log('-------------------');
        this.apiQuery();


        return (
            <div className='new-line'>
                /*{this.apiQuery()}*/
                <p>JSON Response :</p>
                <ul>
                    /*
                    {smartphones.map(smartphone => (
                        <li key={smartphone.name}>
                            {smartphone.name}
                        </li>
                    ))}
                    */
                </ul>
            </div>

        );

    }
}