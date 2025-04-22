import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../../store/cartSlice';

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  // vypocitani celkove ceny
  const totalPrice = products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  return (
    <>
   <div className="min-h-screen bg-gradient-to-br text-white flex items-center justify-center !px-4 !py-10">
  <div className="w-full max-w-4xl shadow-2xl rounded-3xl !p-8 sm:p-10 lg:p-14 transition-all">
    <h2 className="text-3xl lg:text-4xl font-bold !mb-10 flex items-center !gap-3 text-white">
      <span>Your Cart</span>
    </h2>

    {products.length === 0 ? (
      <p className="text-white text-center !font-semibold !py-20 text-xl">Your cart is empty</p>
    ) : (
      <div className="!space-y-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between !px-5 !py-4 rounded-2xl shadow-sm border border-gray-200"
          >
            <div className="!mb-2 sm:mb-0">
              <p className="text-lg !font-semibold text-white">{product.name}</p>
              <p className="text-sm !font-semibold text-white">Quantity: {product.quantity}</p>
              <p className="text-sm !font-semibold text-white">Price: {product.price} $</p>
            </div>
            <button
              onClick={() => dispatch(removeFromCart(product.id))}
              className="text-sm bg-gray-500 !px-4 !py-2 rounded-lg hover:bg-gray-600 transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    )}

    {products.length > 0 && (
      <>
        <div className="!mt-10 text-right text-2xl font-bold text-white">
          Total: <span className="text-white">${totalPrice}</span>
        </div>

        <button
          onClick={() => dispatch(clearCart())}
          className="!mt-6 w-full bg-blue-500 text-white text-lg !font-semibold !py-3 rounded-xl hover:bg-blue-600 transition duration-400 shadow-md"
        >
          Clear Cart
        </button>
      </>
    )}
  </div>
</div>
    </>
  );
};

export default Cart;