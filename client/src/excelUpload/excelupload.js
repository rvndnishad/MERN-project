import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, FormFeedback, FormGroup  } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { uploadExcel } from '../actions/authActions';
import { connect } from 'react-redux';
import removeEmptyObjects from '../validation/removeEmptyObject';

class Excelupload extends Component {
  constructor() {
    super();
    this.state = {
      file:null,
      errors: {},
      monthValue: '',
      optionsMonth: [{
        value: 'Option0',
        label: 'Please Select Month'
      }, {
        value: 'Month1',
        label: 'January'
      }, {
        value: 'Month2',
        label: 'February'
      }, {
        value: 'Month3',
        label: 'March'
      }, {
        value: 'Month4',
        label: 'April'
      }, {
        value: 'Month5',
        label: 'May'
      }, {
        value: 'Month6',
        label: 'June'
      }, {
        value: 'Month7',
        label: 'July'
      }, {
        value: 'Month8',
        label: 'August'
      }, {
        value: 'Month9',
        label: 'September'
      }, {
        value: 'Month10',
        label: 'October'
      }, {
        value: 'Month11',
        label: 'November'
      }, {
        value: 'Month12',
        label: 'December'
      }],
      yearValue: '',
      yearOption: [{
          value: 'year0',
          label: 'Please select the year'
        }, {
          value: 'year2015',
          label: '2015'
        },
        {
          value: 'year2016',
          label: '2016'
        },
        {
          value: 'year2017',
          label: '2017'
        },
        {
          value: 'year2018',
          label: '2018'
        },
        {
          value: 'year2019',
          label: '2019'
        },
      ]

    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onClick(e) {
    
  }

  onChange(e) {
    if(e.target.value) {
      console.log("file selected.")
    }
    this.setState({file:e.target.files[0]})
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.uploadExcel(this.state.file, this.props.history);
  }

  render() {
    const { errors } = this.state;
    return ( 
      <div className = "container-excelupload" >
      <div className = "header" > Upload excel file here </div> 
      <Form onSubmit = { this.onSubmit } >
        <div className = "excelImportBtn" >
        <FormGroup>
        <label htmlFor = "file-upload" className = "custom-file-upload" >
          <i className = "icon-cloud-upload" > </i> <span>Select Excel File</span>
        </label>
        </FormGroup>
        <FormGroup>{
          Object.entries(errors).map((key, index)=> {
            console.log("index" + index);
            console.log("key" + JSON.stringify(key));
            return (
              <div key={index}>{errors[key]}</div>
            )
          })
        }</FormGroup>
        <FormGroup>
        <Input type = "file" name = "file" id = "file-upload" onClick={this.onClick}  onChange={this.onChange}  
        className={classnames('form-control form-control-md', {
          'is-invalid': errors.file
        })}
        />
        </FormGroup>
        
        
        </div> {
           /*
                          <span className="hr"></span>
                          <div className="formForExcelUpload">
                              <FormGroup>
                                  <Label for="exampleEmail">Excel file name</Label>
                                  <Input type="text" name="excel-file-name" id="excelname" placeholder="Excel file name" />
                              </FormGroup>
                              <FormGroup>
                                  <Label for="monthSelect">Month</Label>
                                  
                                  <Input type="select" value={this.state.monthValue}>
                                  {
                                    this.state.optionsMonth.map(el => {
                                      return <option key={el.value} label={el.label} value={el.value} />
                                    })
                                  }
                                </Input>
                              </FormGroup>
                              <FormGroup>
                                  <Label for="yearSelect">Year</Label>
                                  <Input type="select" name="Year" id="yearSelect">
                                      <option value="0">Please select the year</option>
                                      <option value="1">2015</option>
                                      <option value="2">2016</option>
                                      <option value="3">2017</option>
                                      <option value="4">2018</option>
                                  </Input>
                              </FormGroup>
                              <FormGroup>
                                  <Label for="exampleSelectMulti">Database Type</Label>
                                  <Input type="select" name="database-type" id="databaseTypeSelect">
                                      <option value="0">Please select the Database Type</option>
                                      <option value="1">Buzz Index</option>
                                      <option value="2">CAM</option>
                                      <option value="3">Ad Impact</option>
                                      <option value="4">CAM Ad Recall</option>
                                      <option value="5">Bingo</option>
                                  </Input>
                              </FormGroup>
                                */
        } 
        <Button color = "primary mb-2 mr-sm-2 mb-sm-0"  block>Upload</Button>
      </Form> 
      </div>
    )
  }
};

Excelupload.propTypes = {
  uploadExcel: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps, { uploadExcel })(withRouter(Excelupload));