import data from '../../data/temp';
import _ from 'lodash';


export default function () {
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
  const beforedata =
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
  const duringdata =
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
  const newdatacon = beforedata.concat(duringdata)

  const newdata = _.remove(newdatacon, function (e) {
    return e.brandName !== '' && e.category !== '45' && e.category !== '30' && e.category !== '60' && e.brandName !== '30' && e.productname !== '30' && e.productname !== '40';
  });

  const filterddatafinal = _.filter(newdata, selectedel);

  /* function groupBy(dataToGroupOn, fieldNameToGroupOn, fieldNameForGroupName, fieldNameForChildren) {
    var result = _.chain(dataToGroupOn)
      .groupBy(fieldNameToGroupOn)
      .toPairs()
      .map(function (currentItem) {
        return _.zipObject([fieldNameForGroupName, fieldNameForChildren], currentItem);
      })
      .value();
    return result;
  } */
  //const screen = groupBy(filterddata, 'screenid', 'screenid', 'display')
  //this.setState({ tcamlistsnew: filterddata })
  //this.setState({ totalscreen: screen.length })
  return filterddatafinal
}