import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  ""
);

const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  const navigate = useNavigate();

  const [totalAmt, setTotalAmt] = useState("");
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price);
  }, [productData]);

  const handleCheckOut = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please sign in to Checkout");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  };

  const payment = async () => {
    try {
      const response = await fetch("http://localhost:8000/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: totalAmt * 100 }),
      });

      const session = await response.json();
      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId: session.id });
    } catch (error) {
      console.error("Payment error:", error);
      toast.error("Payment failed. Try again.");
    }
  };

  return (
    <div>
      <img
        className="w-full h-60 object-cover"
        src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="cartImg"
      />

      <div className="max-w-screen-xl mx-auto py-20 flex">
        <CartItem />
        <div className="w-1/3 bg-[#fafafa] py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium">cart totals</h2>
            <p className="flex items-center gap-4 text-base">
              Subtotal
              <span className="font-titleFont font-bold text-lg">
                $ {Number(totalAmt).toFixed(2)}
              </span>
            </p>
            <p className="flex items-start gap-4 text-base">
              Shipping
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                facilis.
              </span>
            </p>
          </div>
          <p className="font-titleFont font-semibold flex justify-between mt-6">
            total
            <span className="text-xl font-bold">
              $ {Number(totalAmt).toFixed(2)}
            </span>
          </p>
          <button
            onClick={handleCheckOut}
            className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300 cursor-pointer"
          >
            proceed to checkout
          </button>
          {payNow && (
            <div className="w-full mt-6 flex items-center justify-center ">
              <button
                onClick={payment}
                className="bg-black text-white w-full py-3 hover:bg-gray-800 duration-300 cursor-pointer"
              >
                Pay With Card
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
