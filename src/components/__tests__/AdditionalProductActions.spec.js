import React from 'react';
import AdditionalProductActions from '../AdditionalProductActions';
import renderer from 'react-test-renderer';

describe('AdditionalProductActions component', () => {
  it('renders correctly (snapshot)', () => {
    //ACT
    const component = renderer.create(<AdditionalProductActions />);
    const json = component.toJSON();

    //ASSERT
    expect(json).toMatchSnapshot();
  });
});
