import { Link } from "react-router-dom";
import Header from "../../components/Header/index";
import React from 'react'
import ProductListAdmin from "../ProductListAdmin";
import { CirclePlus } from "lucide-react";
import { Info } from "lucide-react";

export default function Admin() {
  return (
    <>
        <section className="p-7 !text-center">
        <div className="!my-25 font-bold text-center">
        <h1 className="!my-20">Admin panel</h1>
        <Link to={"/add-product"}>
            <p>Add product <CirclePlus className="!mx-57 !-my-6" /> </p>  
        </Link>
        <Link to={"/view-product"}>
            <p className="!my-19">View product <Info className="!mx-57 !-my-6"/></p>
        </Link>
         </div>
        </section>
        <ProductListAdmin />
    </>
  )
}
