import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

const Container = styled.div`
  border: 1px solid ${colors.lightGray};
  border-radius: 3px;
  padding: 5px 10px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-basis: 50%;
`;

const Label = styled.div`
  font-family: 'Arial', sans-serif;
  color: ${colors.nearBlack};
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const QuantityLabel = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-left: 15px;
  margin-right: 15px;
`;

const QuantityButton = styled.button`
  color: #FFF;
  border: none;
  background-color: ${colors.lightGray};
  border-radius: 50%;
  font-size: 30px;
  font-weight: 200;
  line-height: 30px;
  height: 30px;
  width: 30px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.darkGray};
  }

  span {
    position: relative;
    top: -3px;
  }
`;

const QuantityControl = ({ quantity, setQuantity }) => (
  <Container>
    <Label>quantity:</Label>
    <Controls>
      <QuantityButton onClick={() => { setQuantity(quantity - 1) }}><span>-</span></QuantityButton>
      <QuantityLabel>{quantity}</QuantityLabel>
      <QuantityButton onClick={() => { setQuantity(quantity + 1) }}><span>+</span></QuantityButton>
    </Controls>
  </Container>
)

export default QuantityControl;
