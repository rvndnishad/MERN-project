import data from '../../data/temp';
import _ from 'lodash';


export default function() {
    return _.map(data.data, (items)=> {
      const {before, during} = items;
      const BeforeMovie=  _.filter(before, (item)=>{ return item.brandName !== '' && item !== undefined })
      const DuringInterval =  _.filter(during, (item)=>{ return item.brandName !== '' && item !== undefined })
     

      return [
        BeforeMovie,
        DuringInterval
      ]
    });
  }