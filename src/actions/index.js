import redSky from '../api/redSky';
import * as types from '../constants/ActionTypes';

const loadItem = item => ({
  type: types.LOAD_ITEM,
  item: item
})

export const getItem = tcin => dispatch => {
  dispatch(loadItem(redSky.getItem(tcin)));
}
