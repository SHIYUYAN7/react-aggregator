import React from 'react';
import { Carousel } from 'react-bootstrap';

const CardCarousel = ({ cart }) => {
    // use cart as key,when cart update，Carousel rerender
    return (
      <Carousel key={cart.length}>
        {cart.map((item) => (
          <Carousel.Item key={item.name}>
            <img
              className="d-block w-100 custom-img"
              src={item.image}
              alt={`Glasses: ${item.glasses}, Smoke: ${item.smoke}`}
            />
            <Carousel.Caption>
              <h3>{item.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  };

export default CardCarousel;
