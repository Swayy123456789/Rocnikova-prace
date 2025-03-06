import { Link } from "react-router-dom";
import Header from "../../components/Header/index";
import React from 'react'
import ProductListAdmin from "../ProductListAdmin";

export default function Admin() {
  return (
    <>
        <Header />
        <h1>Admin mode</h1>
        <Link to={"/add-product"}>
            <p>Add product</p>
        </Link>

        <Link to={"/view-product"}>
            <p>View product</p>
        </Link>
        <ProductListAdmin></ProductListAdmin>
    </>
  )
}
