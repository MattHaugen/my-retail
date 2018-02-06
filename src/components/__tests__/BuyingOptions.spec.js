import React from 'react';
import BuyingOptions from '../BuyingOptions';
import renderer from 'react-test-renderer';

describe('BuyingOptions component', () => {
  it('displays two buttons if the purchasingChannelCode prop is 0', () => {
    //ACT
    const component = renderer.create(<BuyingOptions purchasingChannelCode="0" />);
    const json = component.toJSON();

    //ASSERT
    expect(json).toMatchSnapshot();
  });

  it('displays the buy online button if the purchasingChannelCode prop is 1', () => {
    //ACT
    const component = renderer.create(<BuyingOptions purchasingChannelCode="1" />);
    const json = component.toJSON();

    //ASSERT
    expect(json).toMatchSnapshot();
  });

  it('displays the pick up in store button if the purchasingChannelCode prop is 2', () => {
    //ACT
    const component = renderer.create(<BuyingOptions purchasingChannelCode="2" />);
    const json = component.toJSON();

    //ASSERT
    expect(json).toMatchSnapshot();
  });
});
