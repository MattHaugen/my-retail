import { combineReducers } from 'redux';
import item from './item';
import quantity from './quantity';

const productDetailApp = combineReducers({
  item,
  quantity
})

export default productDetailApp;
