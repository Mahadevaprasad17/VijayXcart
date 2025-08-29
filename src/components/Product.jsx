import React from 'react';

export default function Product({ name, price, img }) {
  return (
    <div className="card">
      <img src={img} alt={name} />
      <div className="card-body">
        <h3>{name}</h3>
        <div className="price">{price}</div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
