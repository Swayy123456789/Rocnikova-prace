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
      <>
        <p>Products not found</p>
      </>
    )
  }

  if (!isLoaded) {
    return (
      <>
        <p>Loading...</p>
      </>
    )
  }

  if (isLoaded) {
    return (
      <>
      <section className="container">
        <h1 className="font-bold">Product list</h1>
        
        {
          product.map((product, index) => (
            <ProductLinkAdmin key={index} {...product} />
          ))
        }

        <Link to={"/"}>
          <p>Go home</p>
        </Link>
        </section>
      </>
    )
  }
}
