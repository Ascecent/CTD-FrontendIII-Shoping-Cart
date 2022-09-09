import Item from "./Item";
import products from "./../data.json";

import PropTypes from "prop-types";

const ItemList = ({ onStockChange }) => {
  return (
    <div className="container">
      {products.map((product) => (
        <Item
          key={product.id}
          item={product.producto}
          quantity={product.stock}
          onStockChange={onStockChange}
        />
      ))}
    </div>
  );
};

ItemList.propTypes = {
  onStockChange: PropTypes.func,
};

export default ItemList;
