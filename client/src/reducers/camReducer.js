import { createStore, combineReducers} from 'redux';


//SORT BY MONTH
//SORT BY YEAR
//SORT BY ZONE
//SORT BY CITY
//SORT BY PRODUCT
//SORT BY AD POSITION
//SORT BY DURATION

const camReducerDefaultState = []; 

export default function(state = camReducerDefaultState, action ){
  switch(action.type) {
    default: 
      return state;
  }
}

//Store Creation


const demoStore = {
  camData : [
    {
      beforeTheMovie: 1,
      duringInterval: 0,
      brandName: 'test',
      product: 'hospital',
      category: 'Social',
      language:'English',
      durationInSecond: 20,
    }
  ], 
  filter: {
    month: 'text', //monthname
    year: 'text', //year
    zone: 'text',
    city: 'text',
    product: 'text',
    adPosition: 'text', // beforeTheMovie/DuringInterval
    duration: 'text'
  }
}