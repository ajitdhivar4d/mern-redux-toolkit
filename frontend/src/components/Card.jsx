import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/features/cart/cartSlice";
import { toast } from "react-toastify";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";

const Card = ({ foodItem, options }) => {
  const priceOptions = useMemo(() => Object.keys(options).slice(1), [options]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(priceOptions[0]);

  const handleCartClick = () => {
    const itemPrice = foodItem.options[0][size];

    dispatch(
      addToCart({ ...foodItem, qty: Number(qty), size, price: itemPrice }),
    );
    navigate("/cart");
  };

  return (
    <div>
      <div className="transition    hover:scale-105 border hover:-translate-y-3  rounded-xl w-[248px] h-[324px]">
        <img
          src={foodItem.img}
          alt={foodItem.name}
          className="h-[50%] rounded-xl w-full object-cover"
        />
        <h3 className="text-lg ">{foodItem.name}</h3>
        <p className=" text-sm pb-2">
          {foodItem.description.substring(0, 50)}...
        </p>

        <div className="container flex justify-between">
          <select value={qty} onChange={(e) => setQty(Number(e.target.value))}>
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="m-2  bg-green-300 rounded"
          >
            <option selected disabled>
              Choose Size
            </option>
            {priceOptions.map((priceOption, index) => (
              <option key={index}>{priceOption}</option>
            ))}
          </select>
        </div>
        <div className="flex justify-between items-center px-3">
          <h1>₹ {qty * foodItem.options[0][size]}</h1>
          <button
            className="p-2 rounded-full"
            onClick={() => handleCartClick(foodItem, qty, size)}
          >
            <AiOutlineShoppingCart className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
