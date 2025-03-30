import { Link } from "react-router-dom";
import Header from "../../components/Header/index";
import React from 'react'
import ProductListAdmin from "../ProductListAdmin";
import { CirclePlus } from "lucide-react";
import { Info } from "lucide-react";

export default function Admin() {
  return (
    <>
        <Header />
        <section className="backdrop-blur-lg p-7 bg-opacity-40 !max-w-400 !text-center !mx-auto">
        <div className="!mx-40 !my-25 font-bold max-w-80">
        <h1 className="!my-20">Admin mode</h1>
        
        <div className="">
        <Link to={"/add-product"}>
            <p>Add product <CirclePlus className="!mx-57 !-my-6" /> </p>  
        </Link>
        </div>
        
        <div className="">
        <Link to={"/view-product"}>
            <p className="!my-19">View product <Info className="!mx-57 !-my-6"/></p>
        </Link>
        </div>
        </div>

        
        <ProductListAdmin></ProductListAdmin>
        
        </section>
    </>
  )
}
