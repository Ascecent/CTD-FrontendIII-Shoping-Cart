import PropTypes from "prop-types";
import { useState } from "react";
import Button from "./Button";

const Item = ({ item, quantity, onStockChange }) => {
  const [stock, setStock] = useState(quantity);
  const { nombre, descripcion } = item;

  return (
    <div className="product">
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <h5>En stock: {stock > 0 ? stock : <span>agotado</span>}</h5>
      <Button
        stockQuantity={stock}
        onClick={() => {
          setStock(stock - 1);
          onStockChange(stock);
        }}
      />
    </div>
  );
};

Item.defaultProps = {
  stock: 0,
};

Item.propTypes = {
  item: PropTypes.object.isRequired,
  stock: PropTypes.number,
  onStockChange: PropTypes.func,
};

export default Item;
