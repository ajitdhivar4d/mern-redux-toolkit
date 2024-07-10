import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { removeFromCart } from "../redux/features/cart/cartSlice";
import { useState } from "react";

const Cart = () => {
  const [qty, setQty] = useState(1);

  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="container flex justify-around items-start wrap mx-auto mt-8">
      {cartItems.length == 0 ? (
        <div>
          Your cart is empty <Link to="/">Go To Shop</Link>
        </div>
      ) : (
        <div className="flex flex-col w-[80%]">
          <h1 className="text-2xl font-semibold mb-2">Shopping Cart</h1>
          {cartItems.map((item) => (
            <div key={item._id} className="flex items-center mb-[1rem] pb-2">
              <div className="w-[5rem] h-[5rem]">
                <img
                  src={item.img}
                  alt="IMG"
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="flex-1 ml-4">
                <Link>{item.name}</Link>
                <div className="mt-2 font-bold"> ₹ {item.price}</div>
              </div>
              <div className="w-24">
                <select
                  className="w-full p-1 border rounded text-black"
                  onChange={(e) => setQty(e.target.value)}
                >
                  {Array.from(Array(6), (e, i) => {
                    return (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                <button
                  className="text-red-500 mr-[5rem]"
                  onClick={() => removeFromCartHandler(item._id)}
                >
                  <FaTrash className="ml-[1rem] mt-[.5rem]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
