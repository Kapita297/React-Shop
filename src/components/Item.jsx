function Item(props) {
  const {
    mainId,
    displayName,
    displayDescription,
    price: { regularPrice },
    displayAssets: [{ full_background }],
    addToBasket = Function.prototype,
  } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img src={full_background} alt={displayName} />
      </div>
      <div className="card-content blue-grey darken-4 white-text">
        <span className="card-title">{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className="card-action blue-grey darken-3 white-text">
        <button
          className="btn blue-grey"
          onClick={() =>
            addToBasket({
              mainId,
              displayName,
              regularPrice,
            })
          }>
          Купить
        </button>
        <span className="right" style={{ fontSize: '1.8rem' }}>
          {regularPrice} грн.
        </span>
      </div>
    </div>
  );
}

export { Item };
