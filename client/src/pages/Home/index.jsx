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
        <ul class="nav__links">
          <li><a href="#">Products</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About us</a></li>
        </ul>
      </nav>
      <a class="cta" href="#"><button>Admin mode</button></a>
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
