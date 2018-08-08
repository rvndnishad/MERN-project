import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class Excelupload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monthValue: '',
            optionsMonth: [{
              value: 'Option0',
              label: 'Please Select Month'
            },{
                value: 'Option1',
                label: 'January'
              }, {
                value: 'Option2',
                label: 'February'
              }, {
                value: 'Option3',
                label: 'March'
              }, {
                value: 'Option4',
                label: 'April'
              }, {
                value: 'Option5',
                label: 'May'
              } , {
                value: 'Option6',
                label: 'June'
              } , {
                value: 'Option7',
                label: 'July'
              } , {
                value: 'Option8',
                label: 'August'
              } , {
                value: 'Option9',
                label: 'September'
              } , {
                value: 'Option10',
                label: 'October'
              } , {
                value: 'Option11',
                label: 'November'
              } , {
                value: 'Option12',
                label: 'December'
              }
            ]
            
        };

        this.handleExcelUploadClick.bind(this);
    }
    handleExcelUploadClick(e){
        e.preventDefault();
        console.log("handle excel click");
    }

   render() {
       
       return (
           <div className="container-excelupload">
                <div className="header">Upload excel file here</div>
                <div className="excelImportBtn">
                    <label htmlFor="file-upload" className="custom-file-upload">
                        <i className="fa fa-cloud-upload"></i> Upload Excel
                    </label>
                    <input id="file-upload"  type="file"/>
                </div>
                <span className="hr"></span>
                <div className="formForExcelUpload">
                    <Form>
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
                            <option value="0">Please select the year</option>
                            <option value="1">Buzz Index</option>
                            <option value="2">CAM</option>
                            <option value="3">Ad Impact</option>
                            <option value="4">CAM Ad Recall</option>
                            <option value="5">Bingo</option>
                        </Input>
                    </FormGroup>
                    <Button  color="primary" onClick={this.handleExcelUploadClick} size="md" block>Submit</Button>
                    </Form>
                </div>
                
           </div>
       )
   }
}

export default Excelupload;