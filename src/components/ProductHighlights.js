import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

const Container = styled.div`
  font-size: 14px;
  color: ${colors.darkGray};
  margin-bottom: 30px;
`;

const Header = styled.h1`
  font-size: 36px;
  font-weight: normal;
  margin-top: 0px;
  color: #000;
`;

const BulletedList = styled.ul`
  list-style-position: inside;
  padding-left: 0px;
  line-height: 2em;
`;

const ProductHighlights = ({ highlights }) => {

  const bulletedHighlights = highlights.map((highlight, index) => {
    return (
      //#TODO - Write parser to convert tags to styled components (so we don't have to use dangerouslySetInnerHTML)
      <li key={index} dangerouslySetInnerHTML={{__html: highlight}}></li>
    );
  });

  return (
    <Container>
      <Header>product highlights</Header>
      <BulletedList>
        {bulletedHighlights}
      </BulletedList>
    </Container>
  );
}

export default ProductHighlights;
