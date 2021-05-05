import React from 'react';

class ProductRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, price } = this.props;
    return (
      <tr>
        <td>{name}</td>
        <td>{price}</td>
      </tr>
    );
  }
}

export default ProductRow;
