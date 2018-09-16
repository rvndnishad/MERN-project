import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';

class HomeLayout extends Component {
    render(props) {
        return (
            <div className="app">
                {props.children}
            </div>
        )
    }
}


export default HomeLayout;