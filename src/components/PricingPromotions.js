import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

const Price = styled.div`
  width: 100%;
  font-family: 'Arial', sans-serif;
  font-size: 30px;
  font-weight: bold;

  .qualifier {
    font-size: 12px;
    font-weight: normal;
    color: ${colors.darkGray};
    margin-left: 5px;
  }
`;

function getOfferPrice(offers) {
  let OfferPrice = offers.find(offer => !!offer.OfferPrice); //True/False depending on key existence

  if (OfferPrice && OfferPrice.OfferPrice.length) {
    return OfferPrice.OfferPrice[0];
  }

  return {};
}

const PricingPromotions = ({ offers, promotions }) => (
  <Price>
    {getOfferPrice(offers).formattedPriceValue}
    <span class="qualifier">{getOfferPrice(offers).priceQualifier}</span>
  </Price>
)

export default PricingPromotions;
