import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createProduct } from "../../models/Product";
import { createUpload } from "../../models/Uploads";

export default function ProductCreateForm() {
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }
  
  const handleImageChange = (e) => {
    setFormData({ ...formData, imgFile: e.target.files[0] });
  };

  const submit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const [key, value] of Object.entries(formData)) {
        formDataToSend.append(key, value);
    }
    console.log(Array.from(formDataToSend.entries()));
    const upload = await createUpload(formDataToSend);
    if (upload.status === 201) return navigate("/");
    setInfo(upload.msg);
  }

  const postForm = async () => {
    const product = await createProduct(formData);
    if (product.status === 201) {
      return navigate("/admin");
    }
    setInfo(product.message);
  };


  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };

  return (
    <>
      <div className="bg-black items-center font-bold">
        <h1>Create product</h1>

        <form encType="multipart/form-data">
        <input type="text" name="imgName" placeholder="Enter image name" onChange={handleChange} />
        
        <input
            type="text"
            name="name"
            required
            placeholder="Enter name"
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
            name="brand"
            required
            placeholder="Enter brand"
            onChange={handleChange}
          />

        <input
            type="text"
            name="type"
            required
            placeholder="Type"
            onChange={handleChange}
          />

        <input
            type="text"
            name="material"
            required
            placeholder="Enter material"
            onChange={handleChange}
          />

        <input
            type="text"
            name="strapMaterial"
            required
            placeholder="Enter strap material"
            onChange={handleChange}
          />

        

        
        <input type="file" name="imgFile" onChange={handleImageChange}/>

        <input type="submit" value="Upload product" onClick={submit}/>

        

      </form>
        
        <p>{info}</p>
        <Link to={"/"}>
          <p>Go back</p>
        </Link>
      </div>
    </>
  );
}
