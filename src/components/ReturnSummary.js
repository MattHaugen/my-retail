import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

const Container = styled.div`
  width: 100%;
  display: flex;
  color: ${colors.darkGray};
  margin-bottom: 30px;
`;

const Header = styled.div`
  font-size: 20px;
  padding-right: 15px;
  border-right: 1px solid ${colors.lightGray};
`;

const Summary = styled.div`
  font-size: 10px;
  padding-left: 15px;
`;

const Link = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: ${colors.darkGray};

  &:hover {
    text-decoration: underline;
  }
`;

const ReturnSummary = ({ returnPolicy }) => (
  <Container>
    <Header>returns</Header>
    <Summary>
      This item must be returned within 30 days of the ship date.
      See <Link href='#'>return policy</Link> for details.
      Prices, promotions, styles and availability may vary by store and online.
    </Summary>
  </Container>
)

export default ReturnSummary;
