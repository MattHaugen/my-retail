import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';
import CustomerReview from './CustomerReview';

const Container = styled.div`
  font-family: 'Arial', sans-serif;
  flex-basis: 0;
  flex-grow: 1;

  hr {
    background-color: ${colors.darkGray};
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

const Header = styled.h3`
  font-size: 18px;
  font-weight: 200;
  line-height: 14px;
  text-transform: capitalize;
  margin: 0px;
`;

const SubTitle = styled.span`
  font-size: 12px;
  color: ${colors.darkGray};
`;

const CustomerReviewContainer = styled.div`
  padding-right: 15px;
`;

const MostHelpfulReviewSummary = ({ title, subtitle, review }) => (
  <Container>
    <Header>{title}</Header>
    <SubTitle>{subtitle}</SubTitle>
    <hr />
    <CustomerReviewContainer>
      <CustomerReview review={review} />
    </CustomerReviewContainer>
  </Container>
)

export default MostHelpfulReviewSummary;
