import React from 'react';
import OfferPrice from './OfferPrice';
import Promotions from './Promotions';

const PricingPromotions = ({ offers, promotions }) => (
  <div>
    <OfferPrice offers={offers} />
    <Promotions promotions={promotions} />
  </div>
)

export default PricingPromotions;
