import React, { Component } from "react";
import { connect } from "react-redux";
//import { fetchCamlist } from "../../actions/camact";
import { Link } from 'react-router-dom';
import getCamList from './camData';
import data from '../../data/temp';
import { History } from "react-router"
import { Input, FormGroup, Label, Button } from 'reactstrap';
import _ from 'lodash';
import filterddata from './camFilterdata';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import Modal from 'react-responsive-modal';
import ReactChartkick, { LineChart, PieChart, ColumnChart } from 'react-chartkick'
import Chart from 'chart.js'

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
      consitmodal: false,
      brandmodal: false,
      currentcatname: '',
      brandItem: [],
      productModal: false,
      currentbrand: '',
      productItem: [],
      consistentBrandYear: '2017',
      consistentItem: []
    }
    this.getTopCategory = this.getTopCategory.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    let t = this;
    document.querySelector('.filter-submit').addEventListener("click", function (e) {
      t.refilterdata();
      t.consistentBrand();
      document.querySelector('.right-toggler.navbar-toggler').click();

    })
    document.querySelector('#consistentbrand').addEventListener("click", function (e) {
      t.onOpenModal()

    })
    this.consistentBrand();
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  consistentBrand() {
    const beforedata =
      [].concat.apply([], data.data
        .map((rowdata, index) => rowdata.before
          .map((data) => ({
            screenid: index,
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
      [].concat.apply([], data.data
        .map((rowdata, index) => rowdata.during
          .map((data) => ({
            screenid: index,
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
    const finaldata = beforedata.concat(duringdata)
    const reblank = _.remove(finaldata, function (e) {
      return e.brandName !== '' && e.category !== '45' && e.category !== '30' && e.category !== '60' && e.brandName !== '30' && e.productname !== '30' && e.productname !== '40';
    });
    let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let initmonth = document.querySelector('.filter-month').value;
    var d = new Date();
    var m = d.getMonth();
    let thismonth = mL[m];
    var selectedMonth, previousmonth;
    if (initmonth === '') {
      selectedMonth = thismonth;
    } else {
      selectedMonth = document.querySelector('.filter-month').value;
    }
    var prevIndex = (mL.indexOf(selectedMonth)) - 1;
    previousmonth = mL[prevIndex];

    //this.setState({ productModal: true });
    const cmcamData = reblank;
    const pmcamData = reblank;
    const cmData = [];
    const pmData = [];
    _.map(cmcamData, (item, index) => {
      if (item.month === selectedMonth) {
        cmData.push({ brandName: item.brandName, screenid: item.screenid })
      } else if (item.month === previousmonth) {
        pmData.push({ brandName: item.brandName, screenid: item.screenid })
      }

    });
    let cmuniqbrand = _.map(
      _.uniq(
        _.map(cmData, function (obj) {
          return JSON.stringify(obj);
        })
      ), function (obj) {
        return JSON.parse(obj);
      }
    );

    let cmbrandObject = _.countBy(cmuniqbrand, "brandName");

    let cmresult = _.chain(cmbrandObject)
      .map((val, key) => {
        return { name: key, count: val }
      })
      .sortBy('count')
      .reverse()
      .keyBy('name')
      .mapValues('count')
      .value();



    let count = 1;
    let countpm = 1;
    for (var key in cmresult) {
      if (cmresult.hasOwnProperty(key)) {
        if (count > this.state.topcount) {
          delete cmresult[key];
        }
        count++;
      }
    }
    /* for (var key in pmresult) {
      if (pmresult.hasOwnProperty(key)) {
        if (countpm > this.state.topcount) {
          delete pmresult[key];
        }
        countpm++;
      }
    } */
    const pmd = []
    _.map(pmData, (item, index) => {
      _.map(cmresult, function (val, key) {
        if (item.brandName === key) {
          pmd.push(item)
        }
      })
    })
    let pmuniqbrand = _.map(
      _.uniq(
        _.map(pmd, function (obj) {
          return JSON.stringify(obj);
        })
      ), function (obj) {
        return JSON.parse(obj);
      }
    );

    let pmbrandObject = _.countBy(pmuniqbrand, "brandName");
    let pmresult = _.chain(pmbrandObject)
      .map((val, key) => {
        return { name: key, count: val }
      })
      .sortBy('count')
      .reverse()
      .keyBy('name')
      .mapValues('count')
      .value();

    for (var key in pmresult) {
      if (pmresult.hasOwnProperty(key)) {
        if (countpm > this.state.topcount) {
          delete pmresult[key];
        }
        countpm++;
      }
    }

    const finalproduct = []

    finalproduct.push({ "name": selectedMonth, "data": cmresult }, { "name": previousmonth, "data": pmresult })
    this.setState({ consistentItem: finalproduct })


  }
  onOpenModal = () => {
    this.setState({ consitmodal: true });
  };
  onCloseModal = () => {
    this.setState({ consitmodal: false });
  };
  onOpenBrandModal = () => {
    this.setState({ brandmodal: true });
  };
  onCloseBrandModal = () => {
    this.setState({ brandmodal: false });
  };
  onOpenProductModal = () => {
    this.setState({ productModal: true });
  };
  onCloseProductModal = () => {
    this.setState({ productModal: false });
  };
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
  getrelatedProducts(e) {
    this.setState({ productModal: true });
    const brandname = e.currentTarget.getAttribute('data-link')
    const camData = this.state.tcamlistsnew;
    const camBrand = [];
    _.map(camData, (item, index) => {
      if (item.brandName === brandname) {
        camBrand.push({ productname: item.productname, screenid: item.screenid })
      }
    });
    let uniqbrand = _.map(
      _.uniq(
        _.map(camBrand, function (obj) {
          return JSON.stringify(obj);
        })
      ), function (obj) {
        return JSON.parse(obj);
      }
    );
    let brandObject = _.countBy(uniqbrand, "productname");
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
    const finalproduct = []
    finalproduct.push({ "data": result })
    this.setState({ productItem: finalproduct, currentbrand: brandname })
  }
  getrelatedBrand(e) {
    this.setState({ brandmodal: true });
    const catname = e.currentTarget.getAttribute('data-link')
    const camData = this.state.tcamlistsnew;
    const camBrand = [];
    _.map(camData, (item, index) => {
      if (item.category === catname) {
        camBrand.push({ brandName: item.brandName, screenid: item.screenid })
      }
    });
    let uniqbrand = _.map(
      _.uniq(
        _.map(camBrand, function (obj) {
          return JSON.stringify(obj);
        })
      ), function (obj) {
        return JSON.parse(obj);
      }
    );
    let brandObject = _.countBy(uniqbrand, "brandName");
    let result = _.chain(brandObject)
      .map((val, key) => {
        return { name: key, count: val, color: '#00aeef' }
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
    const finalbrand = []
    finalbrand.push({ "data": result })
    this.setState({ brandItem: finalbrand, currentcatname: catname })
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
    const { consitmodal, brandmodal, brandItem, currentcatname, productModal, currentbrand, productItem, consistentItem } = this.state;
    let mstyles = {
      width: '350px',
    };
    const data = [
      { "data": { "kausar": 3, "ansari": 4 } }
    ];

    return (
      <div className="clearfix">
        <h3 className="page-title">
          Cam <small>reports &amp; statistics</small>
        </h3>
        <div className="containercam">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
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
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="dashboard-stat red-intense">
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
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
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
                    <i className="icon-bar-chart font-blue-steel hide">&npbs;</i>
                    <span className="caption-subject font-blue-steel bold uppercase" onClick={this.showhidedata.bind(this)} style={{ cursor: 'pointer' }}>
                      {this.state.productshow ? 'Top 10 Category' : '<< Back to Top 10 Category'}
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
                              <tr key={index} onClick={this.getrelatedBrand.bind(this)} data-link={key}>
                                <td stule="w" style={{ verticalAlign: 'middle' }}>
                                  {key}
                                </td>
                                <td className="width100"><Progress
                                  type="circle"
                                  strokeWidth={6}
                                  width={60}
                                  percent={percentageValue}
                                  theme={{
                                    default: {
                                      symbol: percentageValue + '%',
                                      trailColor: 'rgba(135, 117, 167, 0.3)',
                                      color: '#4884b8'
                                    }
                                  }}
                                  status="default"
                                /></td>
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
                    <i className="icon-bar-chart font-red-sunglo hide">&npbs;</i>
                    <span className="caption-subject font-red-sunglo bold uppercase" onClick={this.showhidedata.bind(this)} style={{ cursor: 'pointer' }}>
                      {this.state.productshow ? 'Top 10 Brands' : '<< Back to Top 10 Brands'}
                    </span>
                    <span className="caption-helper">{this.state.selectedMonth}, {this.state.selectedYear}</span>
                  </div>
                </div>
                <div className="portlet-body">
                  <table className="table clickable">
                    <tbody>
                      {
                        Object.entries(this.getTopbrand()).map(([key, value], index) => {
                          const percentageValue = Math.round((value / this.state.totalscreen) * 100);
                          if (key !== 'undefined' && key !== '') {
                            return (
                              <tr key={index} onClick={this.getrelatedProducts.bind(this)} data-link={key}>
                                <td stule="w" style={{ verticalAlign: 'middle' }}>
                                  {key}
                                </td>
                                <td className="width100"><Progress
                                  type="circle"
                                  strokeWidth={6}
                                  width={60}
                                  percent={percentageValue}
                                  theme={{
                                    default: {
                                      symbol: percentageValue + '%',
                                      trailColor: 'rgba(135, 117, 167, 0.3)',
                                      color: '#e26a6a'
                                    }
                                  }}
                                  status="default"
                                /></td>
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
        <Modal open={productModal} onClose={this.onCloseProductModal} center classNames={{ 'modal': 'modalcontainer', 'overlay': 'constoverlay' }}>
          <ColumnChart colors={["#e26a6a"]} data={productItem} xtitle="Product" ytitle="Count" title={currentbrand + "'s Top 10 Product"} legend="false" height="600px" />
        </Modal>
        <Modal colors={["#4b77be"]} open={brandmodal} onClose={this.onCloseBrandModal} center classNames={{ 'modal': 'modalcontainer', 'overlay': 'constoverlay' }}>
          <ColumnChart data={brandItem} xtitle="Brand" ytitle="Count" title={currentcatname + "'s Top 10 Brand"} legend="false" height="600px" />
        </Modal>
        <Modal open={consitmodal} onClose={this.onCloseModal} center classNames={{ 'modal': 'modalcontainer', 'overlay': 'constoverlay' }}>
          <h2>Consistent Brands Month Wise</h2>
          <LineChart data={consistentItem} xtitle="2018" ytitle="Spots" height="600px" />
        </Modal>
      </div >
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  camlist: filterddata(),
  loading: state.camlist,
  error: state.camlist
});

export default connect(mapStateToProps)(Cam);
