import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components'
import colors from '../constants/colors';

const validOnlineCodes = ["0", "1"];
const validStoreCodes = ["0", "2"];

const Container = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 30px;
`;

const ButtonContainer = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  margin-left: 5px;
  margin-right: 5px;
  text-align: center;

  &:first-of-type {
    margin-left: 0px;
  }

  &:last-of-type {
    margin-right: 0px;
  }
`;

const Button = styled.button`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 3px;
  border: 1px solid #000;
  color: #FFF;
  background: linear-gradient(rgba(0, 0, 0, .5), #000 25%);
  text-transform: uppercase;
  font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  font-size: 18px;
  font-weight: 100;
  letter-spacing: 2px;
  cursor: pointer;

  ${props => props.red && css`
    border: 1px solid ${colors.targetRed};
    background: linear-gradient(rgba(${colors.targetRedRGB}, .5), ${colors.targetRed} 25%);
  `}
`;

const Link = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 12px;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const BuyingOptions = ({ purchasingChannelCode }) => {
  let purchaseButtons = [];
  if (validStoreCodes.includes(purchasingChannelCode)) {
    purchaseButtons.push(
      <ButtonContainer key='store'>
        <Button>Pick Up In Store</Button>
        <Link href='#'>find in a store</Link>
      </ButtonContainer>
    );
  }
  if (validOnlineCodes.includes(purchasingChannelCode)) {
    purchaseButtons.push(
      <ButtonContainer key='online'>
        <Button red>Add to Cart</Button>
      </ButtonContainer>
    );
  }

  return (
    <Container>
      {purchaseButtons}
    </Container>
  );
}

export default BuyingOptions;
