import React from "react";
import s from "./Header.module.css";
import { Link } from "react-router-dom";
import { FadeLeft } from "../../../utils/animation";
import { motion } from "framer-motion";


export default function Header() {
  return (
    <>
    
    <motion.navbar
     variants={FadeLeft(0.5)}
     initial="hidden"
     animate="visible">
      <section className='!container !mx-auto !max-w-260'>
      <header>
        <div className={s.outline}>
          <Link to={"/"}><img className={s.logo} src="../img/logo.png" alt="logo"></img></Link>
          <nav>
            <ul className={s.nav__links}>
              <li>
                <Link to={"/products"}>
                  <a>Products</a>
                </Link>
              </li>
              <li>
              <Link to={"/contact"}>
                <a>Contact</a>
                </Link>
              </li>
              <li>
              <Link to={"/about"}>
                <a>About</a>
                </Link>
              </li>
            </ul>
          </nav>
          
        </div>
      </header>
      </section>
      </motion.navbar>

      
    </>
  );
}
