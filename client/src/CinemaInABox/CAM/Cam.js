import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCamlist } from "../../actions/camact";
import getCamList from './camData';
import data from '../../data/temp';
import _ from 'lodash';
import removeEmptyObject from '../../validation/removeEmptyObject';

class Cam extends Component {

  constructor(props){
    super(props);
    this.state = {
      tcamlists: data.data,
      totalcat: 0,
      totalproduct: 0,
      totalbrand: 0,
      totalspot: 0,
      rowdt:[],
      selectedMonth:'',
      selectedYear:''
    }
    this.getTopCategory = this.getTopCategory.bind(this);
  }

componentDidMount() {
  this.gttotalspots()
  var t = this;
  document.querySelector('.filter-submit').addEventListener("click", function(e) {
    t.getfinaldata()
  })
  
}

  onClick = (e) => {
    e.preventDefault();
    this.props.history.push('cat')
  };
  getfinaldata(){
      const slmonth = document.querySelector('.filter-month').value;
      const slyear = document.querySelector('.filter-year').value;
      const slzone = document.querySelector('.filter-Zone').value;
      const slcity = document.querySelector('.filter-City').value;
      const slproduct = document.querySelector('.filter-product').value;
      const sladpos = document.querySelector('.filter-adPosition').value;
      const slduration = document.querySelector('.filter-adDuration').value;
      var mnselected = []
      const selectedel = {}
      if(slmonth!=''){
        selectedel.month = slmonth
        this.setState({selectedMonth: slmonth})
      }else{
        this.setState({selectedMonth: ''})
      }
      if(slyear!=''){
        selectedel.year = slyear
        this.setState({selectedYear: slyear})
      }else{
        this.setState({selectedYear: ''})
      }
      if(slzone!=''){
        selectedel.zone = slzone
      }
      if(slcity!=''){
        selectedel.city = slcity
      }
      var filterddata = _.filter(data.data, selectedel);
      
      //this.setState({ tcamlists: mnselected })
      this.setState({ tcamlists: filterddata })
  }
  gttotalspots() {
    const camData = this.state.tcamlists;
    let camSpots = 0;
     _.map(camData, (item, index)=>{ 
        _.map(item, (rowData)=> { if(rowData.length !== 0) {camSpots += rowData.length }  } );
      });
    this.setState({ totalspot: camSpots })
    //this.state.totalspot = camSpots
}
  
  getTotalSpots() {
    const camData = this.state.tcamlists;
    let camSpots = 0;
     _.map(camData, (item, index)=>{
        _.map(item, (rowData)=> { if(rowData.length !== 0 && rowData[0].brandName !== '' && rowData[0].brandName !== undefined) {camSpots += rowData.length }  } );
      });
    return camSpots;
}
  
  getBrand() {
    const camData = this.state.tcamlists;
    const camBrand = [];
     _.map(camData, (item, index)=>{ 
        _.map(item, (rowData)=> { if(rowData.length !== 0 && rowData[0].brandName !== '' && rowData[0].brandName !== undefined) {  camBrand.push(rowData[0].brandName) }} );
      });
    return _.uniq(camBrand);
}

  getProduct() {
    const camData = this.state.tcamlists;
    const camProduct = [];
     _.map(camData, (item, index)=>{ 
        _.map(item, (rowData)=> { if(rowData.length !== 0 && rowData[0].brandName !== '' && rowData[0].brandName !== undefined) {  camProduct.push(rowData[0].productname) }} );
      });
    return _.uniq(camProduct);
}

  getCategory() {
      const camData = this.state.tcamlists;
      
      const camCategory = [];
      _.map(camData, (item, index)=>{ 
          _.map(item, (rowData)=> { if(rowData.length !== 0 && rowData[0].brandName !== '' && rowData[0].brandName !== undefined) { camCategory.push(rowData[0].category) }  } );
        });
      return _.uniq(camCategory);
  }

  getTopCategory() {
    const camData = this.state.tcamlists;
    const camCategory = [];
    _.map(camData, (item, index)=>{ 
        _.map(item, (rowData)=> { if(rowData.length !== 0) { camCategory.push({category :rowData[0].category} ) }} );
      });

      
      //console.log(camCategory);
      
      var categoryObject = _.countBy(camCategory, "category");
      //console.log(categoryObject);

      var result = _.reduceRight(_.invert(_.invert(categoryObject)), function(current, val, key){    
          current[key] = parseInt(val);
          return current;
      },{});

      let count=1;
      for (var key in result) {
        if (result.hasOwnProperty(key)) {
            if (count> 10){
              delete result[key];
            }
            count++;
        }
    }
      return result;
  }
  getTopbrand() {
    const camData = this.state.tcamlists;
    const camCategory = [];
    _.map(camData, (item, index)=>{ 
        _.map(item, (rowData)=> { if(rowData.length !== 0) { camCategory.push({brandName :rowData[0].brandName} ) }} );
      });

      
      //console.log(camCategory);
      
      var categoryObject = _.countBy(camCategory, "brandName");
      //console.log(categoryObject);

      var result = _.reduceRight(_.invert(_.invert(categoryObject)), function(current, val, key){    
          current[key] = parseInt(val);
          return current;
      },{});

      let count=1;
      for (var key in result) {
        if (result.hasOwnProperty(key)) {
            if (count> 10){
              delete result[key];
            }
            count++;
        }
    }
      return result;
  }
  getTopproduct() {
    const camData = this.state.tcamlists;
    const camCategory = [];
    _.map(camData, (item, index)=>{ 
        _.map(item, (rowData)=> { if(rowData.length !== 0) { camCategory.push({productname :rowData[0].productname} ) }} );
      });

      
      //console.log(camCategory);
      
      var categoryObject = _.countBy(camCategory, "productname");
      //console.log(categoryObject);

      var result = _.reduceRight(_.invert(_.invert(categoryObject)), function(current, val, key){    
          current[key] = parseInt(val);
          return current;
      },{});

      let count=1;
      for (var key in result) {
        if (result.hasOwnProperty(key)) {
            if (count> 10){
              delete result[key];
            }
            count++;
        }
    }
      return result;
  }
  render() {
    const { error, loading, camlist } = this.props;
    console.log( this.getBrand())
    return (
      <div className="clearfix">
        <h3 className="page-title">
          Cam <small>reports &amp; statistics</small>
        </h3>
        <div className="containercam">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="dashboard-stat blue-madison">
                <div className="visual">
                  <i className="fa fa-comments" />
                </div>
                <div className="details">
                  <div className="number">{this.getCategory().length}</div>
                  <div className="desc">Total Categories</div>
                </div>
                <a className="more" href="javascript:;">
                  View more <i className="m-icon-swapright m-icon-white" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="dashboard-stat red-intense">
                <div className="visual">
                  <i className="fa fa-bar-chart-o" />
                </div>
                <div className="details">
                  <div className="number">{this.getProduct().length}</div>
                  <div className="desc">Total Products</div>
                </div>
                <a className="more" href="javascript:;">
                  View more <i className="m-icon-swapright m-icon-white" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="dashboard-stat green-haze">
                <div className="visual">
                  <i className="fa fa-shopping-cart" />
                </div>
                <div className="details">
                  <div className="number">{this.getBrand().length}</div>
                  <div className="desc">Total Brands</div>
                </div>
                <a className="more" href="javascript:;">
                  View more <i className="m-icon-swapright m-icon-white" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="dashboard-stat purple-plum">
                <div className="visual">
                  <i className="fa fa-globe" />
                </div>
                <div className="details">
                  <div className="number">{this.getTotalSpots()}</div>
                  <div className="desc">Total Spots</div>
                </div>
                <a className="more" href="javascript:;">
                  View more <i className="m-icon-swapright m-icon-white" />
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <div className="portlet light ">
                <div className="portlet-title">
                  <div className="caption">
                    <i className="icon-bar-chart font-green-sharp hide">&npbs;</i>
                    <span className="caption-subject font-green-sharp bold uppercase">
                      Top 10 Category
                    </span>
                    <span className="caption-helper">{this.state.selectedMonth}, {this.state.selectedYear}</span>
                  </div>
                </div>
                <div className="portlet-body">
                  <table className="table clickable">
                    <tbody>
                    {
                      Object.entries(this.getTopCategory()).map(([key, value], index) => {
                        const percentageValue = Math.round((value/200)*100);
                        if (key !== 'undefined' && key !==''){
                          return (
                            <tr key={index}>
                              <td stule="w">
                                {key}
                              </td>
                              <td className="width100">{percentageValue}%</td>
                            </tr>
                          )
                        }
                      })
                    }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="portlet light ">
                <div className="portlet-title">
                  <div className="caption">
                    <i className="icon-bar-chart font-blue-steel hide">&npbs;</i>
                    <span className="caption-subject font-blue-steel bold uppercase">
                      Top 10 Brands
                    </span>
                    <span className="caption-helper">{this.state.selectedMonth}, {this.state.selectedYear}</span>
                  </div>
                </div>
                <div className="portlet-body">
                  <table className="table">
                    <tbody>
                    {
                      Object.entries(this.getTopbrand()).map(([key, value], index) => {
                          const percentageValue = Math.round((value/200)*100);
                          if (key !== 'undefined' && key !==''){
                            return (
                              <tr key={index}>
                                <td stule="w">
                                  {key}
                                </td>
                                <td className="width100">{percentageValue}%</td>
                              </tr>
                            )
                          }
                        })
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="portlet light ">
                <div className="portlet-title">
                  <div className="caption">
                    <i className="icon-bar-chart font-red-sunglo hide">&nbsp;</i>
                    <span className="caption-subject font-red-sunglo bold uppercase">
                      Top 10 Products
                    </span>
                    <span className="caption-helper">{this.state.selectedMonth}, {this.state.selectedYear}</span>
                  </div>
                </div>
                <div className="portlet-body">
                  <table className="table">
                    <tbody>
                    {
                      Object.entries(this.getTopproduct()).map(([key, value], index) => {
                          const percentageValue = Math.round((value/200)*100);
                          if (key !== 'undefined' && key !==''){
                            return (
                              <tr key={index}>
                                <td stule="w">
                                  {key}
                                </td>
                                <td className="width100">{percentageValue}%</td>
                              </tr>
                            )
                          }
                        })
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  camlist: state.camlist,
  loading: state.camlist,
  error: state.camlist
});

export default connect(mapStateToProps)(Cam);
