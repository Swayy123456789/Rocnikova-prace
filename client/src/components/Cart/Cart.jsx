import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../../store/cartSlice";
import CheckoutForm from "./CheckoutForm";
import { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { createPaymentIntent, getConfig } from "../../models/Stripe";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';


const Cart = () => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  // vypocitani celkove ceny
  const totalPrice = products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  const loadPromise = async () => {
    const data = await getConfig();
    console.log(data);
    setStripePromise(loadStripe(data.publishableKey));

    const data_2 = await createPaymentIntent();
    console.log(data_2);
    setClientSecret(data_2.clientSecret);
  };

  useEffect(() => {
    loadPromise();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br text-white flex items-center justify-center !px-4 !py-10">
        <div className="w-full max-w-4xl shadow-2xl rounded-3xl !p-8 sm:p-10 lg:p-14 transition-all hover:shadow-xl hover:scale-102">
          <h2 className="text-3xl lg:text-4xl font-bold !mb-10 flex items-center !text-center !gap-3 text-white">
            <span>Your Cart</span>
          </h2>

          {products.length === 0 ? (
            <p className="text-white text-center !font-semibold !py-20 text-xl">
              Your cart is empty
            </p>
          ) : (
            <div className="!space-y-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between !px-5 !py-4 rounded-2xl shadow-sm border border-gray-200"
                >
                  <div className="!mb-2 sm:mb-0">
                    <p className="text-2xl !font-semibold text-white">
                      {product.name}
                    </p>
                    <p className="text-md !font-semibold text-white !my-2">
                      Quantity: {product.quantity}
                    </p>
                    <p className="text-md !font-semibold text-white">
                      Price: {product.price} $
                    </p>
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
                    className="!mt-6 w-full bg-blue-500 text-white text-lg !font-semibold !py-3 rounded-xl hover:bg-blue-600 transition duration-400 shadow-md !my-10"
                  >
                    Clear Cart
                  </button>

        
                 
                  <div className="flex justify-between items-center !mt-6 w-full">
                        <Link
                          to="/products"
                          className="flex items-center gap-2 bg-gray-600 hover:bg-gray-500 text-gray-100 font-bold text-sm !px-5 !py-2 rounded-lg transition duration-200"
                        >
                          <ArrowLeft size={16} />
                    Continue browsing products
                        </Link>

                  </div>

                
                  <div className="flex items-center justify-center h-screen">
                  {clientSecret && stripePromise && (
                    <Elements
                  stripe={stripePromise}
                  options={{
                    clientSecret: clientSecret,
                    fonts: [
                      {
                        cssSrc:
                          "https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap",
                      },
                    ],
                    appearance: {
                      variables: {
                        colorText: "#ffffff",
                        colorPrimary: "#ffffff",
                        colorBackground: "#707070",
                        colorDanger: "#df1b41",
                        fontFamily: "Manrope",
                        spacingUnit: "6px",
                        borderRadius: "12px",
                      },
                    },
                  }}
                >
                    <CheckoutForm />
                    </Elements>
                    )}  
                  </div>
                  
                  
                
                
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
