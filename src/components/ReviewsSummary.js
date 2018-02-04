import React from 'react';
import styled from 'styled-components';
import StarScale from './StarScale';
import MostHelpfulReviewSummary from './MostHelpfulReviewSummary';
import colors from '../constants/colors';

const maxPossibleRating = 5;

const ReviewsSummaryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const OverallSummary = styled.div`
  width: 100%;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
  font-size: 14px;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;

const ReviewCountLink = styled.a`
  text-decoration: none;
  color: inherit;

  :hover {
    text-decoration: underline;
  }
`;

const ProConContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 15px 20px;
  background-color: ${colors.nearWhite};
`;

const ReviewsSummary = ({ reviews }) => (
  <ReviewsSummaryContainer>
    <OverallSummary>
      <div>
        <StarScale actualRating={reviews.consolidatedOverallRating} possibleRating={maxPossibleRating} iconSize='fa-lg'/> overall
      </div>
      <div>
        <ReviewCountLink href=''>view all {reviews.totalReviews} reviews</ReviewCountLink>
      </div>
    </OverallSummary>
    <ProConContainer>
      <MostHelpfulReviewSummary title='PRO' subtitle='most helpful 4-5 star review' review={reviews.Pro[0]} />
      <MostHelpfulReviewSummary title='CON' subtitle='most helpful 1-2 star review' review={reviews.Con[0]} />
    </ProConContainer>
  </ReviewsSummaryContainer>
)

export default ReviewsSummary;
