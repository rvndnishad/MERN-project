import React, { Component } from 'react';
import {Input, FormGroup, Label, Button } from 'reactstrap';

export default class CamFilter extends Component {
  constructor(){
    super();
    this.state = {
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

  }
  render() {
    return (
      <div className="filterCam-page">
        <div className="fiterCam">
            <FormGroup>
            <small><Label for="monthSelect" >Month</Label></small>
            <small><Input type="select" value={this.state.monthValue} className="filter-month">
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
              <Input type="select" value={this.state.yearValue} className="filter-year">
                {
                  this.state.optionYear.map(el => {
                    return <option key={el.value} label={el.label} value={el.value} />
                  })
                }
              </Input>
            </FormGroup>
            <FormGroup>
            <small><Label for="zoneSelect" >Zone</Label></small>
              <Input type="select" value={this.state.zoneValue} className="filter-Zone">
                {
                  this.state.optionZone.map(el => {
                    return <option key={el.value} label={el.label} value={el.value} />
                  })
                }
              </Input>
            </FormGroup>
            <FormGroup>
            <small><Label for="citySelect">City</Label></small>
              <Input type="select" value={this.state.cityValue} className="filter-City">
                {
                  this.state.optionCity.map(el => {
                    return <option key={el.value} label={el.label} value={el.value} />
                  })
                }
              </Input>
            </FormGroup>
            <FormGroup>
            <small><Label for="productSelect" >Product wise</Label></small>
              <Input type="select" value={this.state.productValue} className="filter-product">
                {
                  this.state.optionProduct.map(el => {
                    return <option key={el.value} label={el.label} value={el.value} />
                  })
                }
              </Input>
            </FormGroup>
            <FormGroup>
            <small><Label for="adPositionSelect" >Ad Positioning (BMP / Interval)</Label></small>
              <Input type="select" value={this.state.adPositionValue} className="filter-adPosition">
                {
                  this.state.optionAdPosition.map(el => {
                    return <option key={el.value} label={el.label} value={el.value} />
                  })
                }
              </Input>
            </FormGroup>
            <FormGroup >
            <small><Label for="adDurationSelect" >Ad Duration (in seconds)</Label></small>
              <Input type="select" outline="true" value={this.state.adDurationValue} className="filter-adDuration">
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
        </div>
        <Button color="success"  className="filter-submit mb-2 mr-sm-2 mb-sm-0" block >Submit</Button>
      </div>
    )
  }
}
