import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from "./Home";
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
                <Route path="/add-product" element={<ProductCreateForm/>}/>
                <Route path="/view-product" element={<ProductList/>}/>
                <Route path="/product/:id" element={<ProductView/>}/>
                <Route path="/update-product/:id" element={<ProductUpdateForm/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}
