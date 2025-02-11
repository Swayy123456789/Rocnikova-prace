import { Link } from "react-router-dom";
import "./home.css"
import "./navbar.css"

import React from 'react'

export default function Home() {
  return (
    <>
    <header>
      <img class="logo" src="" alt="logo"></img>
      <nav>
        <ul class="nav_links">
          <li><a href="#"/>Products</li>
          <li><a href="#"/>Contact</li>
          <li><a href="#"/>About us</li>
        </ul>
      </nav>
      <a class="cta" href="#">Admin mode</a>
    </header>
        <Link to={"/add-product"}>
            <p>Add product</p>
        </Link>

        <Link to={"/view-product"}>
            <p>View product</p>
        </Link>
    </>
  )
}
