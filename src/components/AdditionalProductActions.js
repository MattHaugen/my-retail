import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

const Container = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 30px;
`;

const Button = styled.button`
  flex-basis: 0;
  flex-grow: 1;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 3px;
  border: none;
  color: ${colors.nearBlack};
  background-color: ${colors.nearWhite};
  text-transform: uppercase;
  font-family: 'Arial', sans-serif;
  font-size: 12px;
  font-weight: 100;
  cursor: pointer;
  margin-right: 5px;

  &:last-of-type {
    margin-right: 0px;
  }
`;

const AdditionalProductActions = () => {

  //Leaving this here so it could potentially be powered by props in the future
  const actions = [
    {
      label: 'Add to Registry',
      action: 'A link to a function or redux action, depending on what needs to be done'
    },
    {
      label: 'Add to List',
      action: 'A link to a function or redux action, depending on what needs to be done'
    },
    {
      label: 'Share',
      action: 'A link to a function or redux action, depending on what needs to be done'
    }
  ];

  const actionComponents = actions.map((action, index) => {
    return <Button key={index}>{action.label}</Button>;
  })

  return (
    <Container>
      {actionComponents}
    </Container>
  )
}

export default AdditionalProductActions;
