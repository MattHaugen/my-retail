import React from 'react';
import Moment from 'react-moment';
import styled from 'styled-components';
import colors from '../constants/colors';
import StarScale from './StarScale';

const maxPossibleRating = 5;

const Container = styled.div`
  font-family: 'Arial', sans-serif;
  color: ${colors.nearBlack};
  font-size: 12px;

  p {
    margin-top: 5px;
  }
`;

const Title = styled.h4`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 0px;
`;

const Customer = styled.a`
  color: ${colors.blue};
  text-decoration: none;
  margin-right: 5px;

  :hover {
    text-decoration: underline;
  }
`;

const CustomerReview = ({ review }) => (
  <Container>
    <StarScale actualRating={review.overallRating} possibleRating={maxPossibleRating} />
    <Title>{review.title}</Title>
    <p>{review.review}</p>
    <p>
      <Customer href=''>{review.screenName}</Customer>
      <Moment format='MMMM DD, YYYY'>{review.datePosted}</Moment>
    </p>
  </Container>
)

export default CustomerReview;
