import React, { Component } from "react";
import { connect } from "react-redux";
//import { fetchCamlist } from "../../actions/camact";
import getCamList from './camData';
import data from '../../data/temp';
import _ from 'lodash';
//import removeEmptyObject from '../../validation/removeEmptyObject';

class Cam extends Component {

  constructor(props){
    super(props);
    this.state = {
      tcamlists: data.data,
      tcamlistsnew: getCamList(),
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
  var t = this;
  document.querySelector('.filter-submit').addEventListener("click", function(e) {
    t.getfinaldata()
    document.querySelector('.right-toggler.navbar-toggler').click();

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
     /* var mnselected = [] */
      const selectedel = {}
     

      if(slmonth!==''){
        selectedel.month = slmonth
        this.setState({selectedMonth: slmonth})
      }else{
        this.setState({selectedMonth: ''})
      }
      if(slyear!==''){
        selectedel.year = slyear
        this.setState({selectedYear: slyear})
      }else{
        this.setState({selectedYear: ''})
      }
      if(slzone!==''){
        selectedel.zone = slzone
      }
      if(slcity!==''){
        selectedel.city = slcity
      }
      if(slproduct!==''){
        selectedel.productname = slproduct
      }
      if(sladpos!==''){
        selectedel.addposition = sladpos
      }
      if(slduration!==''){
        selectedel.duration = slduration
      }
      //console.log(selectedel)
      const olddata = data.data;

      //before data
      const beforedata =
      [].concat.apply([], olddata
        .map((rowdata) => rowdata.before
        .map((data) => ({
          year: rowdata.year,
          month: rowdata.month,
          zone: rowdata.zone,
          city: rowdata.city,
          brandName: data.brandName,
          productname: data.productname,
          category: data.category,
          language: data.language,
          duration: data.duration,
          addposition: 'before'
        }))
      ))
      //after data
      const duringdata =
      [].concat.apply([], olddata
        .map((rowdata) => rowdata.during
        .map((data) => ({
          year: rowdata.year,
          month: rowdata.month,
          zone: rowdata.zone,
          city: rowdata.city,
          brandName: data.brandName,
          productname: data.productname,
          category: data.category,
          language: data.language,
          duration: data.duration,
          addposition: 'during'
        }))
      ))
      const newdatacon = beforedata.concat(duringdata)

      const newdata = _.remove(newdatacon, function (e) {
        return e.brandName !== '' && e.category !== '45' && e.category !== '30' && e.category !== '60' && e.brandName !== '30' && e.productname !== '30' && e.productname !== '40';
      });

      var filterddata = _.filter(newdata, selectedel);
      //console.log(filterddata)
      
     
      //this.setState({ tcamlists: mnselected })
      this.setState({ tcamlistsnew: filterddata })
  }
getBrand() {
  const camData = this.state.tcamlistsnew;
  const camBrand = [];
    _.map(camData, (item, index)=>{ 
      camBrand.push(item.brandName)
    });
  return _.uniq(camBrand);
}
getProduct() {
    const camData = this.state.tcamlistsnew;
    const camProduct = [];
     _.map(camData, (item, index)=>{ 
        camProduct.push(item.productname)
      });
    return _.uniq(camProduct);
}

  getCategory() {
      const camData = this.state.tcamlistsnew;
      const camCategory = [];
      _.map(camData, (item, index)=>{ 
        camCategory.push(item.category)
      });
      return _.uniq(camCategory);
  }

  getTopCategory() {
    const camData = this.state.tcamlistsnew;
    const camCategory = [];
    _.map(camData, (item, index)=>{ 
        camCategory.push({category :item.category})
      });

      var categoryObject = _.countBy(camCategory, "category");
      let result = _.chain(categoryObject)
      .map((val, key) => {
        return { name: key, count: val }
      })
      .sortBy('count')
      .reverse()
      .keyBy('name')
      .mapValues('count')
      .value();
  

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
    const camData = this.state.tcamlistsnew;
    const camBrand = [];
    _.map(camData, (item, index)=>{ 
      camBrand.push({brandName :item.brandName})
    });
      
      var brandObject = _.countBy(camBrand, "brandName");

      let result = _.chain(brandObject)
      .map((val, key) => {
        return { name: key, count: val }
      })
      .sortBy('count')
      .reverse()
      .keyBy('name')
      .mapValues('count')
      .value();

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
    const camData = this.state.tcamlistsnew            ;
    const camProduct = [];
    _.map(camData, (item, index)=>{ 
      camProduct.push({productname :item.productname})
    });
      
      var categoryObject = _.countBy(camProduct, "productname");

      let result = _.chain(categoryObject)
      .map((val, key) => {
        return { name: key, count: val }
      })
      .sortBy('count')
      .reverse()
      .keyBy('name')
      .mapValues('count')
      .value();

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
    //const { error, loading, camlist } = this.props;
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
                <a className="more" href="">
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
                <a className="more" href="">
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
                <a className="more" href="">
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
                  <div className="number">{this.state.tcamlistsnew.length}</div>
                  <div className="desc">Total Spots</div>
                </div>
                <a className="more" href="">
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
                        const percentageValue = Math.round((value/this.state.tcamlistsnew.length)*100);
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
                          const percentageValue = Math.round((value/this.state.tcamlistsnew.length)*100);
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
                          const percentageValue = Math.round((value/this.state.tcamlistsnew.length)*100);
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
