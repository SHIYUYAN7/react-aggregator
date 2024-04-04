import './App.css';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col, Toast } from 'react-bootstrap';
import crytopunks from "./assets/crytopunks.json";
import PunksItem from './components/PunksItem';
import CardCarousel from './components/CardCarousel';

crytopunks.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {
  // use useState to create a state variable to hold the state 
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState({ glasses: false, smoke: false });
  const [sortOrder, setSortOrder] = useState(null); // null means no sorting
  const [show, setShow] = useState(false);

  // const addToCart = (newItem) => {
  //   setCart((currentCart) => {
  //     // check if the item is in the cart
  //     const existingItemIndex = currentCart.findIndex(item => item.name === newItem.name);
      
  //     // found then increment its quantity
  //     if (existingItemIndex >= 0) {
  //       // Increment the quantity of the existing item
  //       const newCart = [...currentCart];
  //       newCart[existingItemIndex] = {
  //         ...newCart[existingItemIndex],
  //         quantity: newCart[existingItemIndex].quantity + 1
  //       };
  //       return newCart;
  //     } else {
  //       // not found add the new item with a quantity of 1
  //       return [...currentCart, {...newItem, quantity: 1}];
  //     }
  //   });
  // };

  const addToCart = (newItem) => {
    setCart((currentCart) => {
      const isExisting = currentCart.some(item => item.name === newItem.name);
      
      if (isExisting) {
        setShow(true); //  Toast
        return currentCart;
      }
      
      return [...currentCart, { ...newItem, quantity: 1 }];
    });
  };

  const removeFromCart = (itemName) => {
    setCart((currentCart) => {
      return currentCart.reduce((acc, item) => {
        if (item.name === itemName) {
          if (item.quantity > 1) {
            // reduce the quantity
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        // If quantity is 1, it will not be added back, effectively removing it
        } else {
          // This item is not the one to remove, add back to the new cart
          acc.push(item);
        }
        return acc;
      }, []);
    });
  };

  // filter
  const handleFilterChange = ({ target }) => {
    setFilter(prevFilter => ({
      ...prevFilter,
      [target.name]: target.checked
    }));
  };

  const handleSortToggle = () => {
    // if null then sort asend first
    setSortOrder(sortOrder === null ? true : !sortOrder);
  };

  // reset 
  const handleReset = () => {
    setFilter({ glasses: false, smoke: false });
    setSortOrder(null);
  };

  // Get filtered and sorted crytopunks
  const getProcessedCrytopunks = () => {
    return crytopunks
      .filter(item => !filter.glasses || item.glasses)
      .filter(item => !filter.smoke || item.smoke)
      .sort((a, b) => {
        if (sortOrder === null) return 0; // null, not sorting
        return sortOrder ? a.price - b.price : b.price - a.price; // ascending : descending
      });
  };
  
  return (
    

    <div className="App">
      <header className="App-header">
        <div>CRYPTOPUNKS SHOP</div>
      </header>

      <div className="toast-container">
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <strong className="mr-auto">Cart Notification</strong>
          </Toast.Header>
          <Toast.Body>Item already in cart. You cannot purchase it again.</Toast.Body>
        </Toast>
      </div>

      <Container>
        <Row>
          <Col md={6}>
            <div className='spacing'></div>
            <CardCarousel cart={cart}></CardCarousel>
          </Col>
          <Col md={6}>
            <div className="cart">
                <h2>My Cart</h2>
                <ul>
                  {cart.map((item, index) => (
                    <li key={index}>
                      {item.name} ${item.price.toFixed(2)}
                      <button onClick={() => removeFromCart(item.name)}>Remove</button>
                    </li>
                  ))}
                </ul>
                <h3>
                  Total: $
                  {cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
                </h3>
            </div>
          </Col>
        </Row>
      </Container>
      
      <div className='spacing'></div>
      <div className="container mt-4">
        <div className="d-flex justify-content-between mb-3">
          {/* left */}
          <div className="d-flex align-items-center">
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Filter Options
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Form.Group>
                  <Form.Check
                    className='filter-checkbox'
                    type="checkbox"
                    label="Glasses"
                    name="glasses"
                    checked={filter.glasses}
                    onChange={handleFilterChange}
                    onClick={(e) => e.stopPropagation()} // stop dropdown item show up
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Check
                    className='filter-checkbox'
                    type="checkbox"
                    label="Smoke"
                    name="smoke"
                    checked={filter.smoke}
                    onChange={handleFilterChange}
                    onClick={(e) => e.stopPropagation()} // stop dropdown item show up
                  />
                </Form.Group>
              </Dropdown.Menu>
            </Dropdown>

            {/* sorting */}
            <button className="btn btn-info ms-2" onClick={handleSortToggle}>
              Sort by price {sortOrder === null ? '' : sortOrder ? '(ascending)' : '(descending)'}
            </button>
          </div>

          {/* reset*/}
          <div>
            <button className="btn reset-button" onClick={handleReset}>
              Reset Filters & Sort
            </button>
          </div>
        </div>

        {/* Punks List */}
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 shopping">
          {getProcessedCrytopunks().map((item) => (
            <div className="col" key={item.name}>
              <PunksItem item={item} addToCart={addToCart} />
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}

export default App;
