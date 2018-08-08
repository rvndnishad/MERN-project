import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    return (
      <div className = "container-excelupload" >
                <div className = "header" > 
            <h1>Hello World</h1>
            </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});


export default connect(mapStateToProps)( Dashboard);;
