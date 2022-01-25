function BasketItem(props) {
  const {
    mainId,
    displayName,
    regularPrice,
    quantity,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;
  return (
    <li className="collection-item ">
      {displayName}
      <i
        className="material-icons  basket-quantity  "
        onClick={() => incQuantity(mainId)}>
        control_point{' '}
      </i>{' '}
      x{quantity}{' '}
      <i
        className="material-icons basket-quantity "
        onClick={() => decQuantity(mainId)}>
        remove_circle_outline
      </i>{' '}
      = {regularPrice * quantity} грн.
      <span
        className="secondary-content "
        onClick={() => removeFromBasket(mainId)}>
        <i className="material-icons basket-delete ">highlight_off </i>
      </span>{' '}
    </li>
  );
}

export { BasketItem };
