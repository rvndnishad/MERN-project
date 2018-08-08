import React, {
    Component
} from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

import { connect } from 'react-redux';

class Cam extends Component {
    render() {
        return ( 
            <div className = "container-excelupload" >
                <div className = "header" > 
                    Cam 
                </div> 
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
  });
  
  
  export default connect(mapStateToProps)( Cam);;
