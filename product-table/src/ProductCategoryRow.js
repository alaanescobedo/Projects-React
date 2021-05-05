import React from 'react';

class ProductCategoryRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h4>{this.props.category}</h4>;
  }
}

export default ProductCategoryRow;
