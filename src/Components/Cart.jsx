import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseQty, deleteProduct } from "../../src/cartSlice";
import products from '../utils/products'; // Import the products file

const Cart = () => {
  const { cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cartList.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="cart-items" style={{ backgroundColor: 'rgb(38, 38, 39)', color: 'white' }}>
      <Container className="mt-12 mb-12">
        <Row className="justify-center">
          <Col md={8}>
            {cartList.length === 0 && (
              <h1 className="no-items product text-center">No Items are added in Cart</h1>
            )}
            {cartList.map((item) => {
              const productQty = item.price * item.qty;
              return (
                <div className="cart-list mb-4" key={item.id}>
                  <Row className="border-b border-gray-600 pb-4">
                    <Col className="image-holder" sm={4} md={3}>
                      <img src={item.imgUrl} alt={item.productName} className="w-full h-auto" />
                    </Col>
                    <Col sm={8} md={9}>
                      <Row className="cart-content justify-center">
                        <Col xs={12} sm={9} className="cart-details">
                          <h3>{item.productName}</h3>
                          <h4>
                            ₹{item.price.toFixed(2)} * {item.qty}
                            <span className="ml-2">₹{(productQty).toFixed(2)}</span>
                          </h4>
                        </Col>
                        <Col xs={12} sm={3} className="cartControl flex items-center">
                          <button
                            className="incCart bg-blue-600 hover:bg-blue-700 text-white p-2 rounded transition duration-300 transform hover:scale-105"
                            onClick={() => dispatch(addToCart({ product: item, num: 1 }))}
                          >
                            <i className="fa-solid fa-plus"></i>
                          </button>
                          <button
                            className="desCart bg-purple-600 hover:bg-purple-700 text-white p-2 rounded ml-2 transition duration-300 transform hover:scale-105"
                            onClick={() => dispatch(decreaseQty(item))}
                          >
                            <i className="fa-solid fa-minus"></i>
                          </button>
                        </Col>
                      </Row>
                    </Col>
                    <button
                      className="delete text-red-500"
                      onClick={() => dispatch(deleteProduct(item))}
                    >
                      <ion-icon name="close"></ion-icon>
                    </button>
                  </Row>
                </div>
              );
            })}
          </Col>
          <Col md={4}>
            <div className="cart-total bg-gray-700 p-4 rounded">
              <h2 className="text-xl">Cart Summary</h2>
              <div className="d_flex justify-between">
                <h4>Total Price :</h4>
                <h3>₹{totalPrice.toFixed(2)}</h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cart;
