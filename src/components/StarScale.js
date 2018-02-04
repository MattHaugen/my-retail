import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';
import colors from '../constants/colors';

const StarContainer = styled.span`
  .fa-star {
    color: ${colors.mediumGray};

    &.positive {
      color: ${colors.targetRed};
    }
  }
`;

const StarScale = ({ actualRating, possibleRating, iconSize }) => {
  const parsedActual = Number.parseInt(actualRating, 10);
  const parsePossible = Number.parseInt(possibleRating, 10);
  const ratingScale = Array(parsePossible).fill('').fill('positive', 0, parsedActual);

  const stars = ratingScale.map((rating, index) => {
    return <FontAwesomeIcon icon={faStar} key={index} className={`${rating} ${iconSize}`} />
  })

  return (
    <StarContainer>
      {stars}
    </StarContainer>
  )
}

export default StarScale;
