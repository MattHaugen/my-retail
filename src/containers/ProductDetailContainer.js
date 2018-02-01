import React from 'react';
import { connect } from 'react-redux';
import ProductTitle from '../components/ProductTitle';

const ProductDetailContainer = ({item}) => (
  <div className="product-detail-container">
    <ProductTitle title={item.title} />
  </div>
);

const mapStateToProps = state => ({
  item: state.item
})

export default connect(
  mapStateToProps
)(ProductDetailContainer)
