import {combineReducers} from 'redux';

import {CartReducer} from '../screens/dashboard/cart/';

export default combineReducers({
  Cart: CartReducer,
});
