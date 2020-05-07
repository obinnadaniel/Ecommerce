import React, { Component } from 'react';

export default class Default extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-uppercase py-5">
                        <h1 className="display-3">404</h1>
                        <h1>error</h1>
                        <h2>page not found</h2>
                        <h3>Sorry, the requested url: <u className="text-danger">"{this.props.location.pathname}"</u> does not exist on this server.</h3>
                    </div>
                </div>
            </div>
        )
    }
}