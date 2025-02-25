import React from "react";
import s from "./Header.module.css";
import { Link } from "react-router-dom";
import { FadeLeft } from "../../../utils/animation";
import { motion } from "framer-motion";


export default function Header() {
  return (
    <>
    <motion.navbar
     variants={FadeLeft(0.6)}
     initial="hidden"
     animate="visible">
      <header>
        <div className={s.outline}>
          <Link to={"/"}><img className={s.logo} src="../img/logo.png" alt="logo"></img></Link>
          <nav>
            <ul className={s.nav__links}>
              <li>
                <a href="product">Produkty</a>
              </li>
              <li>
                <a href="contact">Kontakt</a>
              </li>
              <li>
                <a href="about">O nás</a>
              </li>
            </ul>
          </nav>
          <a className="cta" href="admin">
            <button>Admin panel</button>
          </a>
        </div>
      </header>
      </motion.navbar>
      
    </>
  );
}
