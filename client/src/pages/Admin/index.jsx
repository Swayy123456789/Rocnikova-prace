import { Link } from "react-router-dom";
import Header from "../../components/Header/index";
import React from 'react'
import ProductListAdmin from "../ProductListAdmin";
import { CirclePlus } from "lucide-react";
import { Info } from "lucide-react";

export default function Admin() {
  return (
    <>
        <section className="p-5 !text-center">
        <div className="!my-4 font-bold">
        <h1 className="!my-10 font-bold text-5xl text-white">Admin panel</h1>
        <Link to={"/add-product"}>
            <p>Add product</p>  
        </Link>
        
        <Link to={"/view-product"}>
            <p className="!my-10">View product</p>
        </Link>
       
         </div>
        </section>
        <ProductListAdmin />
    </>
  )
}
