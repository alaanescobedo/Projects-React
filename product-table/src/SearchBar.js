import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="product-table__search-bar">
        <input className="product-table__search-input" type="text" />

        <label htmlFor="inStock" className="product-table__check-inStock">
          <input type="checkbox" id="inStock" />
          Only products in stock
        </label>
      </div>
    );
  }
}

export default SearchBar;
