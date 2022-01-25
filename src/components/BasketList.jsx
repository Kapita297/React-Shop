import { BasketItem } from './BasketItem';
function BasketList(props) {
  const {
    order = [],
    hadleBaskestShow = Function.prototype,
    removeFromBasket = Function.prototype,
    incQuantity,
    decQuantity,
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.regularPrice * el.quantity;
  }, 0);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active blue-grey">Корзина</li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.mainId}
            removeFromBasket={removeFromBasket}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
            {...item}
          />
        ))
      ) : (
        <li className="collection-item ">Корзина пуста</li>
      )}
      <li className="collection-item active blue-grey lighten-1">
        Общая стомость: {totalPrice} грн.
      </li>
      <li className="collection-item active blue-grey lighten-1">
        <button className="btn blue-grey">Оформить</button>
      </li>
      <i className="material-icons basket-close" onClick={hadleBaskestShow}>
        highlight_off
      </i>
    </ul>
  );
}

export { BasketList };
