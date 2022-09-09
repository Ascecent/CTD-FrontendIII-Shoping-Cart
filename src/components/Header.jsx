import PropTypes from "prop-types";

function Header({ productsQuantity }) {
  return (
    <header>
      <h1>Shopping Cart</h1>
      <p>
        Cantidad de productos: <span>{productsQuantity}</span>
      </p>
    </header>
  );
}

Header.defaultProps = {
  productsQuantity: 0,
};

Header.propTypes = {
  productsQuantity: PropTypes.number,
};

export default Header;
