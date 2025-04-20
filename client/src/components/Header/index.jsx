import React, { useState, useRef, useEffect } from "react";
import s from "./Header.module.css"; // Používáme tvé CSS pro Header
import { Link } from "react-router-dom";
import { FadeLeft } from "../../../utils/animation";
import { motion } from "framer-motion";
import CartPreview from "../../components/CartPreview/CartPreview";
import { FaShoppingCart } from "react-icons/fa"; // Ikona košíku

export default function Header() {
  const [showCartPreview, setShowCartPreview] = useState(false);
  const cartRef = useRef(null);

  const toggleCart = () => {
    setShowCartPreview(prev => !prev);
  };

  // Zavření košíku při kliknutí mimo
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setShowCartPreview(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.navbar
      variants={FadeLeft(0.5)}
      initial="hidden"
      animate="visible"
    >
      <section className="container !mx-auto max-w-screen-xl">
        <header>
          <div className={s.outline}> {/* Používáme tvoje CSS třídy pro Header */}
            <Link to={"/"}>
              <img className={s.logo} src="../img/logo.png" alt="logo" />
            </Link>
            <nav>
              <ul className={s.nav__links}>
                <li><Link to={"/products"}>Products</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li className={s.cartWrapper}>
                  <button onClick={toggleCart} className="relative">
                    <FaShoppingCart size={24} className="text-white" />
                  </button>
                  {showCartPreview && <CartPreview onClose={() => setShowCartPreview(false)} />}
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </section>
    </motion.navbar>
  );
}
