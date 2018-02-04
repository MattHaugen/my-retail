import * as types from '../constants/ActionTypes';

const quantity = (state = 1, action) => {
  switch (action.type) {
    case types.SET_QUANTITY:
      let newQuantity = action.quantity < 1 ? 1 : action.quantity;
      return newQuantity;
    default:
      return state;
  }
}

export default quantity;
