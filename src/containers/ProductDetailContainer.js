import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ProductTitle from '../components/ProductTitle';
import PricingPromotions from '../components/PricingPromotions';
import ImageCarousel from '../components/ImageCarousel';
import ReviewsSummary from '../components/ReviewsSummary';
import ProductHighlights from '../components/ProductHighlights';

const StyledProductDetailContainer = styled.div`
  display: flex;
  width: 1000px;
  margin-top: 20px;
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
      <ImageCarousel images={item.Images[0]} />
      <ReviewsSummary reviews={item.CustomerReview[0]} />
    </StyledLeftColumn>
    <StyledRightColumn>
      <PricingPromotions offers={item.Offers} promotions={item.Promotions} />
      <ProductHighlights highlights={item.ItemDescription[0].features} />
    </StyledRightColumn>
  </StyledProductDetailContainer>
);

const mapStateToProps = state => ({
  item: state.item
})

export default connect(
  mapStateToProps
)(ProductDetailContainer)
