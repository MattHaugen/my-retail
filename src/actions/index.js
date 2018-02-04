import redSky from '../api/redSky';
import * as types from '../constants/ActionTypes';

const loadItem = item => ({
  type: types.LOAD_ITEM,
  item: item
})

const setQuantity = quantity => ({
  type: types.SET_QUANTITY,
  quantity: quantity
})

export const getItem = tcin => dispatch => {
  dispatch(loadItem(redSky.getItem(tcin)));
}

export const changeQuantity = quantity => dispatch => {
  dispatch(setQuantity(quantity));
}
