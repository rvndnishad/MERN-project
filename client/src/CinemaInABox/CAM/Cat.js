import React, {
    Component
} from 'react';
import { connect } from "react-redux";
import _ from 'lodash';
import cfilterddata from './camFilterdata';
import * as qs from 'query-string';
import data from '../../data/temp';


class Cat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ttcamlistsnew: [],
            ctotalcat: 0,
            ctotalproduct: 0,
            ctotalbrand: 0,
            ctotalspot: 0,
            crowdt: [],
            cselectedMonth: '',
            cselectedYear: '',
            ctotalscreen: 0,
            cbrand: []
        }
    }
    componentDidMount() {
        this.refilterdataCat()
        const t = this;
        document.querySelector('.filter-submit').addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            t.refilterdataCat()
            //document.querySelector('.right-toggler.navbar-toggler').click();

        })

    }


    refilterdataCat() {

        const slmonth = document.querySelector('.filter-month').value;
        const slyear = document.querySelector('.filter-year').value;
        const slzone = document.querySelector('.filter-Zone').value;
        const slcity = document.querySelector('.filter-City').value;
        const slproduct = document.querySelector('.filter-product').value;
        const sladpos = document.querySelector('.filter-adPosition').value;
        const slduration = document.querySelector('.filter-adDuration').value;
        /* var mnselected = [] */
        const selectedel = {}


        if (slmonth !== '') {
            selectedel.month = slmonth
            //this.setState({ selectedMonth: slmonth })
        } else {
            //this.setState({ selectedMonth: '' })
        }
        if (slyear !== '') {
            selectedel.year = slyear
            //this.setState({ selectedYear: slyear })
        } else {
            //this.setState({ selectedYear: '' })
        }
        if (slzone !== '') {
            selectedel.zone = slzone
        }
        if (slcity !== '') {
            selectedel.city = slcity
        }
        if (slproduct !== '') {
            selectedel.productname = slproduct
        }
        if (sladpos !== '') {
            selectedel.addposition = sladpos
        }
        if (slduration !== '') {
            selectedel.duration = slduration
        }
        //console.log(selectedel)
        const olddata = data.data;

        //before data
        const cbeforedata =
            [].concat.apply([], olddata
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
        const cduringdata =
            [].concat.apply([], olddata
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
        const cnewdatacon = cbeforedata.concat(cduringdata)

        const cnewdata = _.remove(cnewdatacon, function (e) {
            return e.brandName !== '' && e.category !== '45' && e.category !== '30' && e.category !== '60' && e.brandName !== '30' && e.productname !== '30' && e.productname !== '40';
        });

        const cfilterddatafinal = _.filter(cnewdata, selectedel);



        function groupBy(dataToGroupOn, fieldNameToGroupOn, fieldNameForGroupName, fieldNameForChildren) {
            var result = _.chain(dataToGroupOn)
                .groupBy(fieldNameToGroupOn)
                .toPairs()
                .map(function (currentItem) {
                    return _.zipObject([fieldNameForGroupName, fieldNameForChildren], currentItem);
                })
                .value();
            return result;
        }

        const parsed = qs.parse(this.props.location.search);
        const catdata = _.filter(cfilterddatafinal, { category: parsed.catname });
        const screen = groupBy(catdata, 'screenid', 'screenid', 'display')
        this.setState({ cselectedMonth: document.querySelector('.filter-month').value })
        this.setState({ cselectedYear: document.querySelector('.filter-year').value })
        this.setState({ ttcamlistsnew: catdata })
        this.setState({ ctotalscreen: screen.length })
    }
    getCatTopbrand() {
        const camData = this.state.ttcamlistsnew;
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

        return result;
    }
    cctotalspot(brand) {
        const camData = this.state.ttcamlistsnew;
        const camBrand = [];


        _.map(camData, (item, index) => {

            if (item.brandName = brand) {

                camBrand.push({ brandName: item.brandName })
            } else {

            }
        });

        return camBrand.length
    }

    render() {
        const parsed = qs.parse(this.props.location.search);
        //console.log(parsed);
        //console.log(this.props.location.search)
        //console.log(JSON.stringify(this.getCatTopbrand()))
        //console.log(JSON.stringify(this.state.ttcamlistsnew))
        return (
            <div className="clearfix" >
                <h3 className="page-title">
                    {parsed.catname} <small>Category</small>
                </h3>
                <div className="containercam">
                    <div className="portlet light ">
                        <table className="table catplist">
                            <thead>
                                <tr>
                                    <th style={{ verticalAlign: 'top', width: '800px' }}>Brand Name</th>
                                    <th style={{ verticalAlign: 'top', width: '300px' }}>Total No. of Scree<br /><small>(Where Play this add)</small></th>
                                    <th style={{ verticalAlign: 'top' }}>Overall</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.entries(this.getCatTopbrand()).map(([key, value], index) => {
                                        const percentageValue = Math.round((value / this.state.ctotalscreen) * 100);
                                        return (
                                            <tr key={index}>
                                                <td>{key}</td>
                                                <td>{value}</td>
                                                <td>{percentageValue}%
                                            <div className="graphcst">
                                                        <div className="grprogess" style={{ width: percentageValue + '%' }}></div>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth,
});
export default connect(mapStateToProps)(Cat);
