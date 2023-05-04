import { useContext } from "react";
import Products from "./Products";
import { ShopContext } from "./ShopContext";
import CartItems from "./CartItems";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCart } = useContext(ShopContext);
  const totalAmount = getTotalCart();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Cart Items: </h1>
      </div>
      <div className="cartitems">
        {Products.map((item) => {
          if (cartItems[item.id] !== 0) {
            return <CartItems key={item.id} item={item} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Total: ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1>Your cart is empty</h1>
      )}
    </div>
  );
};

export default Cart;
