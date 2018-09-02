import data from '../../data/temp';
import _ from 'lodash';


export default function() {
  const beforedata =
  [].concat.apply([], data.data
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
  [].concat.apply([], data.data
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
  const finaldata= beforedata.concat(duringdata)
  const reblank = _.remove(finaldata, function (e) {
                      return e.brandName !== '' && e.category !== '45' && e.category !== '30' && e.category !== '60' && e.brandName !== '30' && e.productname !== '30' && e.productname !== '40';
                  });
  return reblank
  }