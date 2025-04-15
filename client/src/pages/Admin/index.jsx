import { Link } from "react-router-dom";
import React from 'react'
import { CirclePlus, Eye } from "lucide-react";

export default function Admin() {
  return (
    <>
      {/* main section */}
      <section className="min-h-screen bg-gradient-to-br !px-6 !py-16 text-white">
        <div className="max-w-6xl !mx-auto text-center">
          <h1 className="text-5xl font-bold !mb-50">Admin panel</h1>

          {/* admin action cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 !gap-10 place-items-center">

            {/* add product */}
            <Link
              to="/add-product"
              className="w-full max-w-xs group !p-10 rounded-2xl border border-black transition-all duration-300 shadow-md hover:shadow-2xl flex flex-col items-center text-center"
            >
              <CirclePlus className="w-14 h-14 text-teal-400 !mb-4 group-hover:scale-110 transition-transform duration-200" />
              <h2 className="text-2xl font-semibold">Add Product</h2>
              <p className="text-gray-200 !mt-2 text-sm">
                Create a new product entry.
              </p>
            </Link>

            {/* view products */}
            <Link
              to="/admin-product-view"
              className="w-full max-w-xs group !p-8 rounded-2xl border border-black transition-all duration-300 shadow-md hover:shadow-2xl flex flex-col items-center text-center"
            >
              <Eye className="w-14 h-14 text-indigo-400 !mb-4 group-hover:scale-110 transition-transform duration-200" />
              <h2 className="text-2xl font-semibold">View Products</h2>
              <p className="text-gray-200 !mt-2 text-sm">
                Browse and manage existing products.
              </p>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}