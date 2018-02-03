import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTag from '@fortawesome/fontawesome-free-solid/faTag';
import colors from '../constants/colors';

const StyledPromotions = styled.div`
  width: 100%;
  font-family: 'Arial', sans-serif;
  font-size: 18px;
  color: ${colors.targetRed};
  border-top: 1px solid ${colors.lightGray};
  border-bottom: 1px solid ${colors.lightGray};
  padding-top: 20px;
  padding-bottom: 20px;
  line-height: 25px;
  margin-bottom: 30px;

  .promo-icon {
    margin-right: 10px;
  }
`;

function renderPromotions(promotions) {
  return promotions.map(promotion => {
    return <div
      key={promotion.promotionIdentifier}
      >
      <FontAwesomeIcon icon={faTag} className='promo-icon'/>
      {promotion.Description[0].shortDescription}
      </div>
  })
}

const Promotions = ({ promotions }) => (
  <StyledPromotions>
    {renderPromotions(promotions)}
  </StyledPromotions>
)

export default Promotions;
