import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';

const CartButton = () => {
  const { products } = useSelector((state) => state.cart);
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => setIsOpen(!isOpen);

  return (
    <div className="z-50">
      {/* Plovoucí tlačítko */}
      <button
        onClick={toggleCart}
        className="fixed !top-4 !right-4 bg-blue-500 text-white !p-3 rounded-full shadow-lg z-50 md:top-20"
      >
        <div className="relative">
          <FaShoppingCart size={20} />
          {products.length > 0 && (
            <span className="absolute !-top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {products.length}
            </span>
          )}
        </div>
      </button>

      {/* Overlay pro mobil + responsivní panel */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleCart}>
          <div
            className="absolute right-0 top-0 h-full w-full sm:w-96 bg-white shadow-lg rounded-l-lg p-4"
            onClick={(e) => e.stopPropagation()} // zabrání zavření při kliknutí dovnitř
          >
            <h2 className="text-xl font-bold mb-4">Váš košík</h2>
            {products.length === 0 ? (
              <p className="text-gray-500">Košík je prázdný.</p>
            ) : (
              <ul className="space-y-2 max-h-[60vh] overflow-y-auto">
                {products.map((product) => (
                  <li key={product.id} className="flex justify-between border-b pb-1">
                    <span>{product.name}</span>
                    <span>× {product.quantity}</span>
                  </li>
                ))}
              </ul>
            )}
            <button
              onClick={toggleCart}
              className="mt-6 w-full bg-gray-300 text-black py-2 rounded hover:bg-gray-400 transition"
            >
              Zavřít
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartButton;