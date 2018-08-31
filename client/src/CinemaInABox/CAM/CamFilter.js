import React, { Component } from 'react';
import {Input, FormGroup, Label, Button } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import data from '../../data/temp';
import _ from 'lodash';

class CamFilter extends Component {
  constructor(props){
    super(props);
    this.state = {
      month:'june',
      year: '',
      zone: '',
      city: '',
      product: '',
      adPosition: '',
      duration: '',
      optionsMonth: [],
      optionYear: [],
      optionZone: [],
      optionCity: [],
      optionProduct: [],
      optionAdPosition: [
        {
          value:"Option0",
          label: "All (BMP & Interval)"
        },
        {
          value: "Option1",
          label: "Before the Movie"
        },
        {
          value: "Option2",
          label: "During Interval"
        }
      ],
      optionAdDuration: [
        {
          value:"Option0",
          label: "All Duration"
        },
        {
          value: "Option1",
          label: "10 seconds"
        },
        {
          value: "Option2",
          label: "20 seconds"
        },
        {
          value: "Option3",
          label: "30 seconds"
        }
      ]
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    //this.getallmonth()
  }
  componentWillReceiveProps(props){
    console.log("Component will receive props")
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  getallmonth() {
      const m = []
      const mf = []
      const y = []
      const yf = []
      const z = []
      const zf = []
      const c = []
      const cf = [];
      const totalproduct = []
      const totalproductfinal = []
      _.map(data.data, (item, index)=>{ 
        _.map(item, (rowData)=> { if(rowData.length !== 0) { 
           m.push(item.month)
           y.push(item.year) 
           z.push(item.zone)
           c.push(item.city)
          }
        });
        _.map(item.before, (bitem, bi)=>{ 
          totalproduct.push(bitem.productname)
        })
        _.map(item.during, (ditem, di)=>{ 
          totalproduct.push(ditem.productname)
        })
      });
      
      _.map(_.uniq(m), (itemm, i)=>{ 
        mf.push({"value": itemm, "label": itemm})
      });
      _.map(_.uniq(y), (itemy, i)=>{ 
        yf.push({"value": itemy, "label": itemy})
      });
      _.map(_.uniq(z), (itemz, i)=>{ 
        zf.push({"value": itemz, "label": itemz})
      });
      _.map(_.uniq(c), (itemc, i)=>{ 
        cf.push({"value": itemc, "label": itemc})
      });
      _.map(_.uniq(totalproduct), (itemd, i)=>{ 
        totalproductfinal.push({"value": itemd, "label": itemd})
      });
      
      this.state.optionProduct = _.uniq(totalproductfinal)
      this.state.optionsMonth = mf
      this.state.optionYear = yf
      this.state.optionZone = zf
      this.state.optionCity = cf
  }
  handleSubmit(e) {
    e.preventDefault();

    const payload = {
      month: this.state.month,
      year: this.state.year,
      zone: this.state.zome,
      city: this.state.city,
      product: this.state.product,
      adPosition: this.state.adPosition,
      duration: this.state.duration
    }
    console.log(payload)
  }
  render() {
    this.getallmonth()
    return (
      <div className="filterCam-page">
        <div className="fiterCam">
          <form onSubmit={this.handleSubmit}>
                <FormGroup>
                <small><Label for="monthSelect" >Month</Label></small>
                <small><Input type="select" value={this.state.month} name="month" onChange={this.onChange} className="filter-month">
                  <option value="">Select Month</option>
                    {
                      
                      this.state.optionsMonth.map(el => {
                        return <option key={el.value} label={el.label} value={el.value} />
                      })
                    }
                  </Input>
                  </small>
                </FormGroup>
                <FormGroup>
                <small><Label for="yearSelect" >Year</Label></small>
                  <Input type="select" value={this.state.year} name="year" onChange={this.onChange} className="filter-year">
                  <option value="">Select Years</option>
                    {
                      this.state.optionYear.map(el => {
                        return <option key={el.value} label={el.label} value={el.value} />
                      })
                    }
                  </Input>
                </FormGroup>
                <FormGroup>
                <small><Label for="zoneSelect" >Zone</Label></small>
                  <Input type="select" value={this.state.zone} name="zone" onChange={this.onChange} className="filter-Zone">
                  <option value="">Select Zone</option>
                    {
                      this.state.optionZone.map(el => {
                        return <option key={el.value} label={el.label} value={el.value} />
                      })
                    }
                  </Input>
                </FormGroup>
                <FormGroup>
                <small><Label for="citySelect">City</Label></small>
                  <Input type="select" value={this.state.city} name="city" onChange={this.onChange} className="filter-City">
                    <option value="">Select City</option>
                    {
                      this.state.optionCity.map(el => {
                        return <option key={el.value} label={el.label} value={el.value} />
                      })
                    }
                  </Input>
                </FormGroup>
                <FormGroup>
                <small><Label for="productSelect" >Product wise</Label></small>
                  <Input type="select" value={this.state.product} name="product" onChange={this.onChange} className="filter-product">
                  <option value="">Select Product</option>
                    {
                      this.state.optionProduct.map(el => {
                        return <option key={el.value} label={el.label} value={el.value} />
                      })
                    }
                  </Input>
                </FormGroup>
                <FormGroup>
                <small><Label for="adPositionSelect" >Ad Positioning (BMP / Interval)</Label></small>
                  <Input type="select" value={this.state.adPosition} name="adPosition" onChange={this.onChange} className="filter-adPosition">
                    {
                      this.state.optionAdPosition.map(el => {
                        return <option key={el.value} label={el.label} value={el.value} />
                      })
                    }
                  </Input>
                </FormGroup>
                <FormGroup >
                <small><Label for="adDurationSelect" >Ad Duration (in seconds)</Label></small>
                  <Input type="select" outline="true" value={this.state.duration} name="duration" onChange={this.onChange} className="filter-adDuration">
                    {
                      this.state.optionAdDuration.map(el => {
                        return <option key={el.value} label={el.label} value={el.value} />
                      })
                    }
                  </Input>
                </FormGroup>
                <FormGroup>
                  <small><Button color="primary" outline block >New Brand entry this month</Button></small>
                </FormGroup>
                <FormGroup>
                  <small><Button color="primary" outline block >Consistent brands month wise</Button></small>
                </FormGroup>     
            <Button color="success"  className="filter-submit mb-2 mr-sm-2 mb-sm-0" block >Submit</Button>
          </form>
          </div>
      </div>
    )
  }
}



const mapStateToProps = (state) => ({
  month: state.month,
  year: state.year,
  zone: state.zone,
  city: state.city,
  product: state.product,
  adPosition: state.adPositon,
  duration: state.duration

});

export default connect(mapStateToProps)(CamFilter);
