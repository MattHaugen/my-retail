import quantity from './quantity';
import * as types from '../constants/ActionTypes';

describe('quantity reducer', () => {
  it('should handle initial state', () => {
    //ACT & ASSERT
    expect(quantity(undefined, {})).toEqual(1);
  });

  describe('SET_QUANTITY action', () => {
    it('should set new quantity if greater than threshold', () => {
      //ARRANGE
      let state = {};
      let expectedReturn = 2;

      let action = {
        type: types.SET_QUANTITY,
        quantity: 2
      }

      //ACT
      let result = quantity(state, action);

      //ASSERT
      expect(result).toEqual(expectedReturn);
    });

    it('should return 1 if quantity is zero', () => {
      //ARRANGE
      let state = {};
      let expectedReturn = 1;

      let action = {
        type: types.SET_QUANTITY,
        quantity: 0
      }

      //ACT
      let result = quantity(state, action);

      //ASSERT
      expect(result).toEqual(expectedReturn);
    });

    it('should return 1 if quantity is a negative number', () => {
      //ARRANGE
      let state = {};
      let expectedReturn = 1;

      let action = {
        type: types.SET_QUANTITY,
        quantity: -1
      }

      //ACT
      let result = quantity(state, action);

      //ASSERT
      expect(result).toEqual(expectedReturn);
    });
  });
});
