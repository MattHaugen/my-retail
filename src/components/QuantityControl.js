import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

const Container = styled.div`
  border: 1px solid ${colors.darkGray};
  flex-basis: 50%;
`;

const QuantityControl = ({ quantity, setQuantity }) => (
  <Container>{quantity}</Container>
)

export default QuantityControl;
