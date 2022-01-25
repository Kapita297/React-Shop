import { Item } from './Item';

export function ItemsList(props) {
  const { items = [], addToBasket = Function.prototype } = props;

  if (!items.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className="items">
      {items.map((item) => (
        <Item key={item.mainId} {...item} addToBasket={addToBasket} />
      ))}
    </div>
  );
}
