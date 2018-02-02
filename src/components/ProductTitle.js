import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
  font-size: 26px;
  text-align: center;
  font-weight: 200;
  padding-left: 25px;
  padding-right: 25px;
`;

const ProductTitle = ({ title }) => (
  <Header>{title}</Header>
)

export default ProductTitle;
