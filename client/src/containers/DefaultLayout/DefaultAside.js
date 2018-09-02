import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Button, TabContent } from 'reactstrap';
import PropTypes from 'prop-types';

import CamFilter from '../../CinemaInABox/CAM/CamFilter';


const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultAside extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <Nav tabs>
          <NavItem>
            <NavLink>
              <i className="icon-settings"></i>  <span>Filter </span>
              <Button color="primary" className="reset-button" size="sm" >Reset Filter</Button>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
            <CamFilter />
        </TabContent>
      </React.Fragment>
    );
  }
}

DefaultAside.propTypes = propTypes;
DefaultAside.defaultProps = defaultProps;

export default DefaultAside;
