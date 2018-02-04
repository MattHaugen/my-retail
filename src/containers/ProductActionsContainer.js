import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { changeQuantity } from '../actions';
import QuantityControl from '../components/QuantityControl';
import BuyingOptions from '../components/BuyingOptions';

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

const ProductActionsContainer = ({item, quantity, changeQuantity}) => (
  <Container>
    <QuantityControl quantity={quantity} setQuantity={changeQuantity} />
    <BuyingOptions purchasingChannelCode={item.purchasingChannelCode} />
  </Container>
);

const mapStateToProps = state => ({
  quantity: state.quantity,
  item: state.item
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
