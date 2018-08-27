import isEmpty from '../validation/is-empty';

import { SET_EXCEL_DATA } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_EXCEL_DATA:
      return {
        ...state
      };
    default:
      return state;
  }
}
