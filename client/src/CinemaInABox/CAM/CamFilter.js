import React, { Component } from 'react';
import {Input, FormGroup, Label, Button } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
      optionsMonth: [{
        value: 'Option0',
        label: 'All Months'
      }, {
        value: 'Month1',
        label: 'July'
      }, {
        value: 'Month2',
        label: 'August'
      }],
      optionYear: [
        {
          value:"Option0",
          label: "All Year"
        },
        {
          value: "Option1",
          label: "2015"
        },
        {
          value: "Option2",
          label: "2016"
        },
        {
          value: "Option3",
          label: "2017"
        },
        {
          value: "Option4",
          label: "2018"
        }
      ],
      optionZone: [
        {
          value:"Option0",
          label: "All Zone"
        },
        {
          value: "Option1",
          label: "East"
        },
        {
          value: "Option2",
          label: "West"
        },
        {
          value: "Option3",
          label: "North"
        },
        {
          value: "Option4",
          label: "South"
        }
      ],
      optionCity: [
        {
          value:"Option0",
          label: "All City"
        },
        {
          value: "Option1",
          label: "Mumbai"
        },
        {
          value: "Option2",
          label: "Delhi"
        },
        {
          value: "Option3",
          label: "Chennai"
        },
        {
          value: "Option4",
          label: "Bangalore"
        }
      ],
      optionProduct: [
        {
          value:"Option0",
          label: "All Products"
        },
        {
          value: "Option1",
          label: "dummy1"
        },
        {
          value: "Option2",
          label: "dummy2"
        },
        {
          value: "Option3",
          label: "dummy3"
        },
        {
          value: "Option4",
          label: "dummy4"
        }
      ],
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

  componentWillReceiveProps(props){
    console.log("Component will receive props")
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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
    return (
      <div className="filterCam-page">
        <div className="fiterCam">
          <form onSubmit={this.handleSubmit}>
                <FormGroup>
                <small><Label for="monthSelect" >Month</Label></small>
                <small><Input type="select" value={this.state.month} name="month" onChange={this.onChange} className="filter-month">
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
