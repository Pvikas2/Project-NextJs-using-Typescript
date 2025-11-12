"use client";

import { useCartStore } from "@/store/cartStore";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CartPage() {
  const { cart, getTotalPrice, increaseQty, decreaseQty, removeFromCart } =
    useCartStore();
  const total = getTotalPrice();

  if (cart.length === 0)
    return (
      <div className="flex flex-col items-center justify-center h-[80vh] text-center space-y-4">
        <h2 className="text-2xl font-semibold">Your cart is empty 🛒</h2>
        <Link
          href="/users/products"
          className="px-5 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition"
        >
          Shop Now
        </Link>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col md:flex-row gap-8">
      {/* Cart Items Section */}
      <div className="flex-1 bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

        <div className="space-y-4">
          {cart.map((item) => (
            <motion.div
              key={item.id}
              className="flex items-center gap-6 border-b pb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg border"
              />

              <div className="flex-1">
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>

                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-lg text-lg"
                  >
                    -
                  </button>
                  <span className="font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-lg text-lg"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-500 hover:text-red-700 text-sm font-medium"
                  >
                    Remove
                  </button>
                </div>
              </div>

              <p className="text-right font-semibold text-gray-700">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Order Summary Section */}
      <div className="md:w-80 bg-white shadow-md rounded-2xl p-6 h-fit">
        <h3 className="text-xl font-bold mb-4">Order Summary</h3>
        <div className="flex justify-between text-gray-700 mb-2">
          <span>Subtotal</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-700 mb-2">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="border-t my-3"></div>
        <div className="flex justify-between text-lg font-semibold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full mt-6 bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-lg transition font-semibold"
        >
          Proceed to Checkout
        </motion.button>
      </div>
    </div>
  );
}
