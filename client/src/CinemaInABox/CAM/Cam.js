import React, { Component } from "react";
import { connect } from "react-redux";
//import { fetchCamlist } from "../../actions/camact";
import { Link } from 'react-router-dom';
import getCamList from './camData';
import data from '../../data/temp';
import { History } from "react-router"
import _ from 'lodash';
import filterddata from './camFilterdata';
//import removeEmptyObject from '../../validation/removeEmptyObject';

class Cam extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tcamlists: data.data,
      tcamlistsnew: filterddata(),
      totalscreen: data.data.length,
      totalcat: 0,
      totalproduct: 0,
      totalbrand: 0,
      totalspot: 0,
      rowdt: [],
      selectedMonth: '',
      selectedYear: '',
      brandshow: true,
      productshow: true,
      catshow: true,
      topcount: 10,
    }
    this.getTopCategory = this.getTopCategory.bind(this);

  }

  componentDidMount() {
    let t = this;
    document.querySelector('.filter-submit').addEventListener("click", function (e) {
      t.refilterdata()
      document.querySelector('.right-toggler.navbar-toggler').click();

    })
  }

  refilterdata() {
    function groupBy(dataToGroupOn, fieldNameToGroupOn, fieldNameForGroupName, fieldNameForChildren) {
      let result = _.chain(dataToGroupOn)
        .groupBy(fieldNameToGroupOn)
        .toPairs()
        .map(function (currentItem) {
          return _.zipObject([fieldNameForGroupName, fieldNameForChildren], currentItem);
        })
        .value();
      return result;
    }
    const screen = groupBy(filterddata(), 'screenid', 'screenid', 'display')
    this.setState({ selectedMonth: document.querySelector('.filter-month').value })
    this.setState({ selectedYear: document.querySelector('.filter-year').value })
    this.setState({ tcamlistsnew: filterddata() })
    this.setState({ totalscreen: screen.length })

  }

  getBrand() {
    const camData = this.state.tcamlistsnew;
    const camBrand = [];
    _.map(camData, (item, index) => {
      camBrand.push(item.brandName)
    });
    return _.uniq(camBrand);
  }
  getProduct() {
    const camData = this.state.tcamlistsnew;
    const camProduct = [];
    _.map(camData, (item, index) => {
      camProduct.push(item.productname)
    });
    return _.uniq(camProduct);
  }

  getCategory() {
    const camData = this.state.tcamlistsnew;
    const camCategory = [];
    _.map(camData, (item, index) => {
      camCategory.push(item.category)
    });
    return _.uniq(camCategory);
  }

  getTopCategory() {
    const camData = this.state.tcamlistsnew;
    const camCategory = [];
    const screen = [];
    _.map(camData, (item, index) => {
      camCategory.push({ category: item.category, screenid: item.screenid })
      screen.push({ category: item.category, screenid: item.screenid })
    });



    let arrayOfObjCat = _.map(
      _.uniq(
        _.map(camCategory, function (obj) {
          return JSON.stringify(obj);
        })
      ), function (obj) {
        return JSON.parse(obj);
      }
    );


    let categoryObject = _.countBy(arrayOfObjCat, "category");
    let result = _.chain(categoryObject)
      .map((val, key) => {
        return { name: key, count: val }
      })
      .sortBy('count')
      .reverse()
      .keyBy('name')
      .mapValues('count')
      .value();

    let count = 1;
    for (var key in result) {
      if (result.hasOwnProperty(key)) {
        if (count > this.state.topcount) {
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
    _.map(camData, (item, index) => {
      camBrand.push({ brandName: item.brandName, screenid: item.screenid })
    });

    let arrayOfObjBrand = _.map(
      _.uniq(
        _.map(camBrand, function (obj) {
          return JSON.stringify(obj);
        })
      ), function (obj) {
        return JSON.parse(obj);
      }
    );

    let brandObject = _.countBy(arrayOfObjBrand, "brandName");

    let result = _.chain(brandObject)
      .map((val, key) => {
        return { name: key, count: val }
      })
      .sortBy('count')
      .reverse()
      .keyBy('name')
      .mapValues('count')
      .value();

    let count = 1;
    for (var key in result) {
      if (result.hasOwnProperty(key)) {
        if (count > this.state.topcount) {
          delete result[key];
        }
        count++;
      }
    }
    return result;
  }
  goTolink(e) {
    const lnk = e.currentTarget.getAttribute('data-link')
    this.props.history.push('cat?catname=' + lnk)
  }
  showhidedata(e) {
    const sec = e.currentTarget.getAttribute('data-section')
    if (sec === 'category') {
      this.setState({ brandshow: false, productshow: false, catshow: true, topcount: 9999999 })
    } else if (sec === 'product') {
      this.setState({ brandshow: false, productshow: true, catshow: false, topcount: 9999999 })
    } else if (sec === 'brand') {
      this.setState({ brandshow: true, productshow: false, catshow: false, topcount: 9999999 })
    } else {
      this.setState({ brandshow: true, productshow: true, catshow: true, topcount: 10 })
    }
  }

  getTopproduct() {
    const camData = this.state.tcamlistsnew;
    const camProduct = [];
    _.map(camData, (item, index) => {
      camProduct.push({ productname: item.productname, screenid: item.screenid })
    });


    let arrayOfObjProduct = _.map(
      _.uniq(
        _.map(camProduct, function (obj) {
          return JSON.stringify(obj);
        })
      ), function (obj) {
        return JSON.parse(obj);
      }
    );


    let categoryObject = _.countBy(arrayOfObjProduct, "productname");

    let result = _.chain(categoryObject)
      .map((val, key) => {
        return { name: key, count: val }
      })
      .sortBy('count')
      .reverse()
      .keyBy('name')
      .mapValues('count')
      .value();

    let count = 1;
    for (var key in result) {
      if (result.hasOwnProperty(key)) {
        if (count > this.state.topcount) {
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
                <a className="more" onClick={this.showhidedata.bind(this)} data-section="category">
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
                <a className="more" onClick={this.showhidedata.bind(this)} data-section="product">
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
                <a className="more" onClick={this.showhidedata.bind(this)} data-section="brand">
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
                <a className="more">
                  &nbsp;
                  {/* View more <i className="m-icon-swapright m-icon-white" /> */}
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className={this.state.catshow ? 'col' : 'hidden'}>
              <div className="portlet light ">
                <div className="portlet-title">
                  <div className="caption">
                    <i className="icon-bar-chart font-green-sharp hide">&npbs;</i>
                    <span className="caption-subject font-green-sharp bold uppercase">
                      {this.state.productshow ? 'Top 10 Category' : 'Category'}
                    </span>
                    <span className="caption-helper">{this.state.selectedMonth}, {this.state.selectedYear}</span>
                  </div>
                </div>
                <div className="portlet-body">
                  <table className="table clickable">
                    <tbody>
                      {
                        Object.entries(this.getTopCategory()).map(([key, value], index) => {
                          const percentageValue = Math.round((value / this.state.totalscreen) * 100);
                          if (key !== 'undefined' && key !== '') {
                            return (
                              <tr key={index} onClick={this.goTolink.bind(this)} data-link={key}>
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
            <div className={this.state.brandshow ? 'col' : 'hidden'}>
              <div className="portlet light ">
                <div className="portlet-title">
                  <div className="caption">
                    <i className="icon-bar-chart font-blue-steel hide">&npbs;</i>
                    <span className="caption-subject font-blue-steel bold uppercase">
                      {this.state.productshow ? 'Top 10 Brands' : 'Brands'}
                    </span>
                    <span className="caption-helper">{this.state.selectedMonth}, {this.state.selectedYear}</span>
                  </div>
                </div>
                <div className="portlet-body">
                  <table className="table">
                    <tbody>
                      {
                        Object.entries(this.getTopbrand()).map(([key, value], index) => {
                          const percentageValue = Math.round((value / this.state.totalscreen) * 100);
                          if (key !== 'undefined' && key !== '') {
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
            <div className={this.state.productshow ? 'col' : 'hidden'}>
              <div className="portlet light ">
                <div className="portlet-title">
                  <div className="caption">
                    <i className="icon-bar-chart font-red-sunglo hide">&nbsp;</i>
                    <span className="caption-subject font-red-sunglo bold uppercase">
                      {this.state.brandshow ? 'Top 10 Products' : 'Products'}
                    </span>
                    <span className="caption-helper">{this.state.selectedMonth}, {this.state.selectedYear}</span>
                  </div>
                </div>
                <div className="portlet-body">
                  <table className="table">
                    <tbody>
                      {
                        Object.entries(this.getTopproduct()).map(([key, value], index) => {
                          const percentageValue = Math.round((value / this.state.totalscreen) * 100);
                          if (key !== 'undefined' && key !== '') {
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
