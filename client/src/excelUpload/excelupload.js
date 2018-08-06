import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



class Excelupload extends Component {
    constructor() {
        super();
        this.setState = {
            filetype : 'excel',
            filename : 'tempname',
            brandColumnsBeforeMovie: 50,
            brandColumnDuringInterval : 50,
            brandCategory  : ["BrandName", "Product", "Category", "LanguagueOfTheHead", "DurationOfAd"],
            error: {}
    
        };
    }
     
    

   render() {
       return (
           <div className="container-excelupload">
                <div className="header">Upload excel file here</div>
                <div className="excelImportBtn">
                    <label htmlFor="file-upload" className="custom-file-upload">
                        <i className="fa fa-cloud-upload"></i> Custom Upload
                    </label>
                    <input id="file-upload" id="xlf" type="file"/>
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
                        <Input type="select" name="Month" id="monthSelect">
                            <option value="0">Please select the Month</option>
                            <option value="1">Jan</option>
                            <option value="2">Feb</option>
                            <option value="3">Mar</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6">June</option>
                            <option value="7">July</option>
                            <option value="8">Aug</option>
                            <option value="9">Sept</option>
                            <option value="10">Oct</option>
                            <option value="11">Nov</option>
                            <option value="12">Dec</option>
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
                            <option value="4">Bingo</option>
                        </Input>
                    </FormGroup>
                    <Button>Submit</Button>
                    </Form>
                </div>
                
           </div>
       )
   }
}

export default Excelupload;