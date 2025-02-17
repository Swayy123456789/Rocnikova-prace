import { Link } from "react-router-dom";
import Header from "../../components/Header/index";
import "./home.css";

import React from 'react'

export default function Home() {
  return (
    <>
    <Header />
      <img className="img" src="../../../img/raycast-logo.png" alt="img"></img>
    </>
  )
}
