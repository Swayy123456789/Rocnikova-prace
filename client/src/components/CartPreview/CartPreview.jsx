import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function CartPreview({ onClose }) {
  const { products, totalPrice } = useSelector((state) => state.cart);

  return (
    <>
    <div
      className="absolute -right-39 !mt-2 !p-3 w-80 bg-gray-300 shadow-2xl rounded-2xl overflow-hidden border border-gray-300"
      style={{ zIndex: 9999, top: '60px' }} // zajistime, ze dropdown bude nad kartičkami
    >
      <div className="!p-4">
        <h3 className="text-lg font-semibold !mb-3 text-gray-800 border-b !pb-2">🛒 Your cart</h3>
        
        {products.length === 0 ? (
          <p className="text-sm text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="space-y-2 max-h-60">
            {products.map((product) => (
              <li
                key={product.id}
                className="text-sm text-gray-700 flex justify-between items-center !py-1 !px-2 hover:bg-gray-200 rounded-md transition">
                <span className="truncate !max-w-[60%] text-black">{product.name} × {product.quantity}</span>
                <span className="font-bold">{(product.price * product.quantity)} $</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      {products.length > 0 && (
        <div className="bg-gray-50 !px-4 !py-3 border-t border-gray-200">
          <div className="flex justify-between font-semibold text-gray-800 !mb-3">
            <span>Overall:</span>
            <span>{totalPrice} $</span>
          </div>
          <Link
            to="/cart"
            onClick={onClose}
            className="block text-center bg-blue-500 text-white !py-2 !px-4 rounded-md hover:bg-blue-600 transition-colors text-sm font-semibold"
          >
            View your cart
          </Link>
        </div>
      )}
    </div>
    </>
  );
}