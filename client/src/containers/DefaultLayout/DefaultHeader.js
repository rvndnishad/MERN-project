import React, { Component } from 'react';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';

import { BrowserRouter, Router, Route, Link, Switch, NavLink , Redirect} from "react-router-dom";

import PropTypes from 'prop-types';
import { logoutUser } from './../../actions/authActions';
import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../asset/img/brand/logo.svg';
import sygnet from '../../asset/img/brand/sygnet.svg';

import { connect } from 'react-redux';


const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};


class DefaultHeader extends Component {
  
  onLogoutClick(e) {
    e.preventDefault();
    console.log("firing logput user")
    this.props.logoutUser();
  }

  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none left-toggler" display="lg" />

          <Nav className="d-md-down-none" navbar>         
            <NavItem className="px-3">
            <BrowserRouter basename="/"/>
              <Link to="/excel-upload"  activestyle={{ fontWeight: 'bold', color: 'red'}}>
                <i className="fa fa-file-excel"></i> Upload Excel</Link>
            </NavItem>
            <NavItem className="px-3">
            <BrowserRouter basename="/"/>
              <Link to="/register"> <i className="icon-user"></i> Register New User</Link>
            </NavItem>
            <NavItem className="px-3">
            <BrowserRouter basename="/"/>
              <Link to="/users"> <i className="icon-list"></i> User List</Link>
            </NavItem>
          </Nav>        

        <Nav className="ml-auto" navbar>         
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              <img src={'http://www.gravatar.com/avatar/5a1dcd3fc90085153f5e554290474974?s=200&r=pg&d=mm'}  style={{ width: '35px', marginRight: '5px' }} className="img-avatar" alt="admin" /> Admin 
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
              <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
              <DropdownItem> 
                <div onClick={this.onLogoutClick.bind(this)}>
                  <i className="fa fa-lock"></i> Logout
                </div>
              </DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
        <AppAsideToggler className="d-md-down-none right-toggler" />
        <AppAsideToggler className="d-lg-none" mobile />
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;


const mapStateToProps = state => ({
  auth: state.auth
});


export default connect(mapStateToProps, { logoutUser })(
  DefaultHeader
);