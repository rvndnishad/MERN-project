import React, { Component } from 'react';
import { connect } from 'react-redux';

class users extends Component {
    render(){
        return(
            <div className = "container-excelupload" >
                <div className = "header" > 
                    Get the users list here.
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
auth: state.auth
});


export default connect(mapStateToProps)( users);