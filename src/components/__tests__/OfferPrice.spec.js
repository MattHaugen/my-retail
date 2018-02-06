import React from 'react';
import OfferPrice from '../OfferPrice';
import renderer from 'react-test-renderer';

describe('OfferPrice component', () => {
  it('properly displays the offer price and qualifier', () => {
    //ARRANGE
    const inputOffers = [
      {
        OfferPrice: [
          {
            formattedPriceValue: "$139.99",
            priceQualifier: "Online Price",
          }
        ]
      },
      {
        PromoPrice: [
          {
            formattedPriceValue: "$99.99",
            priceQualifier: "Limited Time",
          }
        ]
      }
    ];

    //ACT
    const component = renderer.create(<OfferPrice offers={inputOffers} />);
    const json = component.toJSON();

    //ASSERT
    expect(json).toMatchSnapshot();
  });

  it('should display nothing if no OfferPrice', () => {
    //ARRANGE
    const inputOffers = [
      {
        PromoPrice: [
          {
            formattedPriceValue: "$99.99",
            priceQualifier: "Limited Time",
          }
        ]
      }
    ];

    //ACT
    const component = renderer.create(<OfferPrice offers={inputOffers} />);
    const json = component.toJSON();

    //ASSERT
    expect(json).toMatchSnapshot();
  });
});
