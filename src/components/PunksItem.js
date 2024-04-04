import React from 'react';

const PunksItem = ({ item, addToCart }) => {
  return (
    // mb-4:margin bottom 4; shadow-sm:small shadow of card
    <div className="card ShoppingItem mb-4 shadow-sm">
      {/* card-img-top: make img at the top of card */}
      <img src={item.image} alt={`Price:${item.price}, Glasses: ${item.glasses}, Smoke: ${item.smoke}`} className="card-img-top" />
      {/* card-body: a container; card title; card text; */}
      <div className="card-body">
        <h4 className='card-title itemName'>{item.name}</h4>
        <p className='card-text itemDescription'>{item.description}</p>
        {/* d-flex:flex; justify-content-between; align-items-center */}
        <div className='d-flex justify-content-between align-items-center itemDetail'>
          {/* text-muted: fade the text */}
          <p className="text-muted mt-3">${item.price}</p>
          {/* btn: base button; btn-sm: small button; btn-outline-secondary: with border */}
          <button className="btn btn-sm btn-outline-secondary itemButton" onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default PunksItem;