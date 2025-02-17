import { Link } from "react-router-dom";
import Header from "../../components/Header/index";
import s from "./Admin.module.css"

import React from 'react'

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
    </>
  )
}
