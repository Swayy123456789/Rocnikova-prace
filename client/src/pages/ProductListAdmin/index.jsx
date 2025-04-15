import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllProduct } from "../../models/Product";
import ProductLinkAdmin from "./ProductLink";


export default function ProductListAdmin() {
  const [product, setProduct] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllProduct();
    if (data.status === 404 || data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setProduct(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, [])

  if (isLoaded === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 text-white text-xl font-semibold">
        <p>Products not found</p>
      </div>
    );
  }
  
  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br text-white text-xl font-semibold animate-pulse">
        <p>Loading...</p>
      </div>
    );
  }
  
  if (isLoaded) {
    return (
      <>
        <section className="min-h-screen !px-6 !py-16 bg-gradient-to-br text-white">
          <h1 className="text-5xl font-bold text-center !mb-10">Product list admin</h1>
          <h1 className="text-xl font-bold text-center !mb-20">Click on each product for more details</h1>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 !gap-6 place-items-center">
            {product.map((product, index) => (
              <ProductLinkAdmin key={index} {...product} />
            ))}
          </div>
  
          <div className="!mt-12 flex justify-center">
            <Link
              to="/admin"
              className="inline-flex items-center !gap-2 !px-6 !py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-xl shadow transition-all duration-300 hover:translate-x-1 hover:shadow-lg"
            >
              <span>🏠 Go Back</span>
            </Link>
          </div>
        </section>
      </>
    );
  }}
