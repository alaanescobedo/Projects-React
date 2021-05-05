import React from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import productsData from './data/products.json';

class FilteredProductTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="product-table__container">
        <SearchBar />
        <ProductTable renderProducts={productsData} />
      </div>
    );
  }
}

export default FilteredProductTable;
