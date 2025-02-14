

import React from 'react'
import s from "./Header.module.css"

export default function Header() {
  return (
    <>
    
     <header>
      <img className="logo" src="../img/logo.png" alt="logo"></img>
      <nav>
        <ul className={s.nav__links}>
          <li><a href="products">Products</a></li>
          <li><a href="contact">Contact</a></li>
          <li><a href="aboutus">About us</a></li>
        </ul>
      </nav>
      <a className="cta" href="adminmode"><button>Admin mode</button></a>
    </header>

    </>
  )
}
