import PropTypes from "prop-types";

const Button = ({ stockQuantity, onClick }) => {
  return (
    <button disabled={!(stockQuantity > 0)} onClick={onClick}>
      {stockQuantity > 0 ? "comprar" : "agotado"}
    </button>
  );
};

Button.propTypes = {
  stockQuantity: PropTypes.number,
  onClick: PropTypes.func,
};

export default Button;
