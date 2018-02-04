import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import ProductActionsContainer from '../containers/ProductActionsContainer';
import ProductTitle from '../components/ProductTitle';
import PricingPromotions from '../components/PricingPromotions';
import ImageCarousel from '../components/ImageCarousel';
import ReviewsSummary from '../components/ReviewsSummary';
import ProductHighlights from '../components/ProductHighlights';

const StyledProductDetailContainer = styled.div`
  display: flex;
  width: 1000px;
  margin-top: 20px;

  @media (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
  }
`;

const StyledLeftColumn = styled.div`
  width: 47.5%;
  margin-right: 2.5%;

  @media (max-width: 1000px) {
    width: 100%;
    margin-right: 0px;
  }
`;

const StyledRightColumn = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 96%;
    padding-left: 2%;
    padding-right: 2%;
  }
`;

const ProductDetailContainer = ({item}) => (
  <StyledProductDetailContainer>
    <StyledLeftColumn>
      <ProductTitle title={item.title} />
      <ImageCarousel images={item.Images[0]} />
      <MediaQuery query="(min-width: 1000px)">
        <ReviewsSummary reviews={item.CustomerReview[0]} />
      </MediaQuery>
    </StyledLeftColumn>
    <StyledRightColumn>
      <PricingPromotions offers={item.Offers} promotions={item.Promotions} />
      <ProductActionsContainer />
      <ProductHighlights highlights={item.ItemDescription[0].features} />
      <MediaQuery query="(max-width: 1000px)">
        <ReviewsSummary reviews={item.CustomerReview[0]} />
      </MediaQuery>
    </StyledRightColumn>
  </StyledProductDetailContainer>
);

const mapStateToProps = state => ({
  item: state.item
})

export default connect(
  mapStateToProps
)(ProductDetailContainer)
