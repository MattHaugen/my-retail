import * as types from '../constants/ActionTypes';

const quantity = (state = 1, action) => {
  switch (action.type) {
    case types.SET_QUANTITY:
      return action.quantity;
    default:
      return state;
  }
}

export default quantity;
