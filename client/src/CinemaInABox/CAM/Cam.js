import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCamlist } from "../../actions/camact";
import getCamList from './camData';
import _ from 'lodash';
import removeEmptyObject from '../../validation/removeEmptyObject';

class Cam extends Component {

  constructor(){
    super();

    this.state = {
      topBrand: [
        {
          name: 'Clothing',
          value: 96 
        }
      ]
    }
    this.getTopCategory = this.getTopCategory.bind(this);
  }

  // componentDidMount() {
  //   this.props.dispatch(fetchCamlist());
  // }
  onClick = (e) => {
    e.preventDefault();
    this.props.history.push('cat')
  };

  getTotalSpots() {
    const camData = getCamList();
    let camSpots = 0;
     _.map(camData, (item, index)=>{ 
        _.map(item, (rowData)=> { if(rowData.length !== 0) {camSpots += rowData.length }  } );
      });
    return camSpots;
}
  
  getBrand() {
    const camData = getCamList();
    const camBrand = [];
     _.map(camData, (item, index)=>{ 
        _.map(item, (rowData)=> { if(rowData.length !== 0) {  camBrand.push(rowData[0].brandName) }} );
      });
    return _.uniq(camBrand);
}

  getProduct() {
    const camData = getCamList();
    const camProduct = [];
     _.map(camData, (item, index)=>{ 
        _.map(item, (rowData)=> { if(rowData.length !== 0) {  camProduct.push(rowData[0].productname) }} );
      });
    return _.uniq(camProduct);
}

  getCategory() {
      const camData = getCamList();
      
      const camCategory = [];
      _.map(camData, (item, index)=>{ 
          _.map(item, (rowData)=> { if(rowData.length !== 0) { camCategory.push(rowData[0].category) }  } );
        });
      return _.uniq(camCategory);
  }

  getTopCategory() {
    const camData = getCamList();
    const camCategory = [];
    _.map(camData, (item, index)=>{ 
        _.map(item, (rowData)=> { if(rowData.length !== 0) { camCategory.push({category :rowData[0].category} ) }} );
      });

      
      console.log(camCategory);
      
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
  

  render() {
    const { error, loading, camlist } = this.props;
    var camlistst = [
      {
        "cat": "aa"
      },
      {
        "cat": "bb"
      }
    ]
    console.log(this.getTopCategory());
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
                    <span className="caption-helper">July, 2018</span>
                  </div>
                </div>
                <div className="portlet-body">
                  <table className="table clickable">
                    <tbody>
                    {
                      Object.entries(this.getTopCategory()).map(([key, value], index) => {
                        const percentageValue = Math.round((value/200)*100);
                        return (
                          <tr key={index}>
                            <td stule="w">
                              {key}
                            </td>
                            <td className="width100">{percentageValue}%</td>
                          </tr>
                        )
                      })
                    }

                    {/*}
                      <tr onClick={this.onClick}>
                        <td>
                          Clothing
                        </td>
                        <td className="width100">96%</td>
                      </tr>
                      <tr>
                        <td>
                          Bankingand Finance
                        </td>
                        <td className="width100">90%</td>
                      </tr>
                      <tr>
                        <td>
                          Electrical Equipments
                        </td>
                        <td className="width100">85%</td>
                      </tr>
                      <tr>
                        <td>
                          Entertainment
                        </td>
                        <td className="width100">82%</td>
                      </tr>
                      <tr>
                        <td>
                          Footwear
                        </td>
                        <td className="width100">75%</td>
                      </tr>
                      <tr>
                        <td>
                          Real Estate
                        </td>
                        <td className="width100">70%</td>
                      </tr>
                      <tr>
                        <td>
                          Social Ad
                        </td>
                        <td className="width100">69%</td>
                      </tr>
                      <tr>
                        <td>
                          Food and Beverages
                        </td>
                        <td className="width100">65%</td>
                      </tr>
                      <tr>
                        <td>
                          Consumer Durables
                        </td>
                        <td className="width100">62%</td>
                      </tr>
                      <tr>
                        <td>
                          Accessories
                        </td>
                        <td className="width100">60%</td>
                      </tr>
                      */}
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
                    <span className="caption-helper">July, 2018</span>
                  </div>
                </div>
                <div className="portlet-body">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>AIRFORCE</td>
                        <td className="width100">99%</td>
                      </tr>
                      <tr>
                        <td>YOGA</td>
                        <td className="width100">95%</td>
                      </tr>
                      <tr>
                        <td>METRO</td>
                        <td className="width100">90%</td>
                      </tr>
                      <tr>
                        <td>ROAD SAFETY AWARENESS</td>
                        <td className="width100">88%</td>
                      </tr>
                      <tr>
                        <td>EVEREST</td>
                        <td className="width100">85%</td>
                      </tr>
                      <tr>
                        <td>SAVE WATER</td>
                        <td className="width100">80%</td>
                      </tr>
                      <tr>
                        <td>HONDA AMAZE</td>
                        <td className="width100">89%</td>
                      </tr>
                      <tr>
                        <td>FASHION BIG BAZAR</td>
                        <td className="width100">88%</td>
                      </tr>
                      <tr>
                        <td>GOWARDHAN</td>
                        <td className="width100">85%</td>
                      </tr>
                      <tr>
                        <td>VIJAY SALES</td>
                        <td className="width100">80%</td>
                      </tr>
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
                    <span className="caption-helper">July, 2018</span>
                  </div>
                </div>
                <div className="portlet-body">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>HOSPITAL</td>
                        <td className="width100">99%</td>
                      </tr>
                      <tr>
                        <td>FOOTWEAR</td>
                        <td className="width100">96%</td>
                      </tr>
                      <tr>
                        <td>MASALA</td>
                        <td className="width100">90%</td>
                      </tr>
                      <tr>
                        <td>INNER WEAR</td>
                        <td className="width100">88%</td>
                      </tr>
                      <tr>
                        <td>FOUR WHEELER</td>
                        <td className="width100">85%</td>
                      </tr>
                      <tr>
                        <td>GARMENTS</td>
                        <td className="width100">81%</td>
                      </tr>
                      <tr>
                        <td>GHEE</td>
                        <td className="width100">80%</td>
                      </tr>
                      <tr>
                        <td>EXHIBITION</td>
                        <td className="width100">75%</td>
                      </tr>
                      <tr>
                        <td>JEWELRIES</td>
                        <td className="width100">74%</td>
                      </tr>
                      <tr>
                        <td>SOFTDRINK</td>
                        <td className="width100">70%</td>
                      </tr>
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
