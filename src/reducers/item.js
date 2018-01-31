import * as types from '../constants/ActionTypes';

const item = (state = {}, action) => {
  switch (action.type) {
    case types.LOAD_ITEM:
      return action.item.CatalogEntryView[0];
    default:
      return state;
  }
}

export default item;
