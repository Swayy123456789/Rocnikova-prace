import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Admin from "./Admin";

import ProductCreateForm from "./ProductCreateForm";
import ProductList from "./ProductList";
import ProductView from "./ProductView";
import ProductUpdateForm from "./ProductUpdateForm";




export default function AppRoutes() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/add-product" element={<ProductCreateForm/>}/>
                <Route path="/view-product" element={<ProductList/>}/>
                <Route path="/product/:id" element={<ProductView/>}/>
                <Route path="/update-product/:id" element={<ProductUpdateForm/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}
