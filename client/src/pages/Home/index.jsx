import { Link } from "react-router-dom";
import Header from "../../components/Header/index";
import "./home.css";

import React from "react";

export default function Home() {
  return (
    <>
      <Header />
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
      <div class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-8 rounded-lg shadow-lg text-white">
  <h1 class="text-3xl font-semibold">Welcome to My Page!</h1>
  <p class="mt-4">This is a simple div with a gradient background using TailwindCSS.</p>
</div>

    </>
  );
}
