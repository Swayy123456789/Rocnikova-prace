import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../../store/cartSlice';

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  // Spočítej celkovou cenu
  const totalPrice = products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">🛒 Tvůj košík</h2>

      {products.length === 0 ? (
        <p className="text-gray-500">Košík je prázdný.</p>
      ) : (
        products.map((product) => (
          <div key={product.id} className="mb-3 flex justify-between items-center border-b pb-2">
            <span>{product.name} × {product.quantity}</span>
            <button
              onClick={() => dispatch(removeFromCart(product.id))}
              className="text-red-600 hover:text-red-800"
            >
              Odebrat
            </button>
          </div>
        ))
      )}

      <div className="font-semibold mt-4">Celkem: {totalPrice.toFixed(0)} Kč</div>

      {products.length > 0 && (
        <button
          onClick={() => dispatch(clearCart())}
          className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
        >
          Vymazat celý košík
        </button>
      )}
    </div>
  );
};

export default Cart;