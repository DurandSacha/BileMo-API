import React, { Component } from 'react';
import { render } from 'react-dom';

export default class generateButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    render() {

        function viewsmartphone(e) {
            e.preventDefault();
            console.log('API vers api/smartphones?page=1 ');
            /*
            fetch("https://api.example.com/items")
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({
                            isLoaded: true,
                            items: result.items
                        });
                    });
                    */
        }

        function viewOneSmartphone(e) {
            e.preventDefault();
            console.log('Le lien a été cliqué.');
        }

        function viewusers(e) {

        }




        return (

            <div className="row">
                <div className="data col-lg-3">
                    <button type="button" className="btn btn-success js-view-smartphones"
                            onClick={viewsmartphone}>View Smartphones Available
                    </button>
                </div>

                <div className="data col-lg-2">
                    <button type="button" className="btn btn-success js-view-one-smartphone"
                            onClick={viewOneSmartphone}>View one Smartphone
                    </button>
                </div>

                <div className="data col-lg-2">
                    <button type="button" className="btn btn-success js-view-users"
                            onClick={viewusers}>View Your User
                    </button>
                </div>

                <div className="data col-lg-3">
                    <button type="button" className="btn btn-info js-add_user"
                            onClick="{console.log('OMG an onClick!') }">Add User
                    </button>
                </div>

                <div className="data col-lg-2">
                    <button type="button" className="btn btn-info js-add-smartphone"
                            onClick="{console.log('OMG an onClick!') }">Add Smartphone
                    </button>
                </div>

                <div className="data col-lg-2">
                    <button type="button" className="btn btn-danger js-delete-User"
                            onClick="{console.log('OMG an onClick!') }">Delete User
                    </button>
                </div>


            </div>





        );
    }
}