import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllProduct } from "../../models/Product";
import ProductLink from "./ProductLink";
import Header from "../../components/Header";
import { Card } from "@mui/material";
import OutlinedCard from "../../components/Card/Card";


export default function ProductList() {
  
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
      <Header />
        <h1 className="text-center !my-10 font-bold">Our products</h1>
        {
          product.map((products, index) => (
            <ProductLink key={index} {...products} />
          ))
        }

        
        <OutlinedCard />
      </>
    )
  }
}
