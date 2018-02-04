import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

const Container = styled.div`
  flex-grow: 1;

  hr {
    background-color: ${colors.darkGray};
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

const Header = styled.h3`
  font-family: 'Arial', sans-serif;
  font-size: 18px;
  font-weight: 200;
  line-height: 14px;
  text-transform: capitalize;
  margin: 0px;
`;

const SubTitle = styled.span`
  font-family: 'Arial', sans-serif;
  font-size: 12px;
  color: ${colors.darkGray};
`;

const MostHelpfulReviewSummary = ({ title, subtitle, review }) => (
  <Container>
    <Header>{title}</Header>
    <SubTitle>{subtitle}</SubTitle>
    <hr />
  </Container>
)

export default MostHelpfulReviewSummary;
