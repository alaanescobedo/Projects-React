import React from 'react';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';
class ProductTable extends React.Component {
  constructor(props) {
    super(props);
  }

  getProducts() {
    const rows = [];
    let lastCategory = null;
    this.props.renderProducts.filter((product, i) => {
      if (product.category !== lastCategory) {
        lastCategory = product.category;
        console.log(product.category);
        return rows.push(
          <ProductCategoryRow key={i} category={product.category} />
        );
      }

      return rows.push(
        <ProductRow
          key={i}
          name={product.name}
          price={product.price}
          inStock={product.stocked}
        />
      );
    });

    return rows;
  }

  render() {
    const products = this.getProducts();
    console.log(products);
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{products}</tbody>
      </table>
    );
  }
}

export default ProductTable;
{
  /* <ProductRow
        key={i}
        name={product.name}
        price={product.price}
        inStock={product.stocked}
      /> */
}
