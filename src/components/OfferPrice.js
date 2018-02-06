import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

const Container = styled.div`
  width: 100%;
  font-family: 'Arial', sans-serif;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 40px;

  .offer-price-qualifier {
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

const OfferPrice = ({ offers }) => (
  <Container>
    {getOfferPrice(offers).formattedPriceValue}
    <span className='offer-price-qualifier'>{getOfferPrice(offers).priceQualifier}</span>
  </Container>
)

export default OfferPrice;
