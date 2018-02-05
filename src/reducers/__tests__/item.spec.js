import item from '../item';
import * as types from '../../constants/ActionTypes';

describe('item reducer', () => {
  it('should handle initial state', () => {
    //ACT & ASSERT
    expect(item(undefined, {})).toEqual({});
  });

  describe('LOAD_ITEM action', () => {
    it('should set the proper item data', () => {
      //ARRANGE
      let state = {};
      let expectedReturn = {
        tcin: 1234
      };

      let action = {
        type: types.LOAD_ITEM,
        item: {
          CatalogEntryView: [
            expectedReturn
          ]
        }
      }

      //ACT
      let result = item(state, action);

      //ASSERT
      expect(result).toEqual(expectedReturn);
    });
  });
});
