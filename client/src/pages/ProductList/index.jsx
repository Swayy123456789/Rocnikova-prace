import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllProduct } from "../../models/Product";
import ProductLink from "./ProductLink";

export default function Home() {
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
        <h1>Product list</h1>
        {
          product.map((product, index) => (
            <ProductLink key={index} {...product} />
          ))
        }

        <Link to={"/"}>
          <p>Go home</p>
        </Link>
      </>
    )
  }
}
