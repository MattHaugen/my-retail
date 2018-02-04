import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { changeQuantity } from '../actions';
import QuantityControl from '../components/QuantityControl';

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const ProductActionsContainer = ({quantity, changeQuantity}) => (
  <Container>
    <QuantityControl quantity={quantity} setQuantity={changeQuantity} />
  </Container>
);

const mapStateToProps = state => ({
  quantity: state.quantity
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeQuantity: (quantity) => {
    dispatch(changeQuantity(quantity));
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductActionsContainer)
