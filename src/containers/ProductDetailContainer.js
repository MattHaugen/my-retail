import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ProductTitle from '../components/ProductTitle';
import PricingPromotions from '../components/PricingPromotions';

const StyledProductDetailContainer = styled.div`
  display: flex;
  width: 1000px;
`;

const StyledLeftColumn = styled.div`
  width: 475px;
  margin-right: 25px;
`;

const StyledRightColumn = styled.div`
  width: 500px;
`;

const ProductDetailContainer = ({item}) => (
  <StyledProductDetailContainer>
    <StyledLeftColumn>
      <ProductTitle title={item.title} />
    </StyledLeftColumn>
    <StyledRightColumn>
      <PricingPromotions offers={item.Offers} promotions={item.Promotions} />
    </StyledRightColumn>
  </StyledProductDetailContainer>
);

const mapStateToProps = state => ({
  item: state.item
})

export default connect(
  mapStateToProps
)(ProductDetailContainer)
