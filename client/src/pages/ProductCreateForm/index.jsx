import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createProduct } from "../../models/Product";

import React from "react";

export default function ProductCreateForm() {
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const product = await createProduct(formData);
    if (product.status === 201) {
      return navigate("/admin");
    }
    setInfo(product.message);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };

  return (
    <>
      <div style={{backgroundColor: "white"}}>
        <h1>Create product</h1>
        <form>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="brand"
            required
            placeholder="Enter brand"
            onChange={handleChange}
          />
          <input
            type="number"
            name="price"
            required
            placeholder="Enter price"
            onChange={handleChange}
          />
          <input
            type="text"
            name="type"
            required
            placeholder="Enter type"
            onChange={handleChange}
          />
          <input
            type="text"
            name="strapMaterial"
            required
            placeholder="Enter strap material"
            onChange={handleChange}
          />
          <input
            type="text"
            name="material"
            required
            placeholder="Enter material"
            onChange={handleChange}
          />
          <button onClick={handlePost}>Add product</button>
        </form>
        <p>{info}</p>
        <Link to={"/"}>
          <p>Go back</p>
        </Link>
      </div>
    </>
  );
}
