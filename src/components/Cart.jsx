function Cart(props) {
  const { quantity = 0, hadleBaskestShow = Function.prototype } = props;
  return (
    <div className="cart blue darken-4 white-text" onClick={hadleBaskestShow}>
      <i className="material-icons">add_shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}

export { Cart };
