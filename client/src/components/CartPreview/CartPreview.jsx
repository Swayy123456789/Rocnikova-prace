import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function CartPreview({ onClose }) {
  const { products, totalPrice } = useSelector((state) => state.cart);

  return (
    <div
      className="absolute right-0 mt-2 w-80 bg-white shadow-2xl rounded-2xl z-50 overflow-hidden border border-gray-200"
      style={{ zIndex: 9999, top: '60px' }} // Zajistíme, že dropdown bude nad kartičkami
    >
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">🛒 Your cart</h3>
        {products.length === 0 ? (
          <p className="text-sm text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="space-y-2 max-h-60">
            {products.map((product) => (
              <li
                key={product.id}
                className="text-sm text-gray-700 flex justify-between items-center py-1 px-2 hover:bg-gray-100 rounded-md transition"
              >
                <span className="!truncate !max-w-[60%]">{product.name} × {product.quantity}</span>
                <span className="font-bold">{(product.price * product.quantity)} $</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      {products.length > 0 && (
        <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
          <div className="flex justify-between font-semibold text-gray-800 mb-3">
            <span>Overall:</span>
            <span>{totalPrice} $</span>
          </div>
          <Link
            to="/cart"
            onClick={onClose}
            className="block text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            View your cart
          </Link>
        </div>
      )}
    </div>
  );
}