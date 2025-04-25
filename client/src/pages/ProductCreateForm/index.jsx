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
      return navigate("/products");
    }
    setInfo(product.message);
  };


  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };

  return (
    <>
      <div className="text-center font-bold min-h-screen flex flex-col items-center justify-center bg-gradient-to-br !px-4">
      <div className="rounded-2xl border border-gray-500 shadow-xl !p-6 !mb-6 w-fit mx-auto">
          <h1 className="text-4xl font-semibold text-white">Create product</h1>
            </div>
  
            <div className="rounded-2xl shadow-xl !p-8 max-w-xl mx-auto !mt-6">
  <form className="flex flex-col gap-4 text-white" encType="multipart/form-data">
    <input
      className="!p-3 rounded-md outline-none focus:ring-2 focus:ring-teal-400 transition-all"
      type="text"
      name="imgName"
      placeholder="Enter image name"
      onChange={handleChange}
    />

    <input
      className="!p-3 rounded-md outline-none focus:ring-2 focus:ring-teal-400 transition-all"
      type="text"
      name="name"
      required
      placeholder="Enter the name of the watch"
      onChange={handleChange}
    />

    <input
      className="!p-3 rounded-md outline-none focus:ring-2 focus:ring-teal-400 transition-all"
      type="number"
      name="price"
      required
      placeholder="Enter price"
      onChange={handleChange}
    />

    <input
      className="!p-3 rounded-md outline-none focus:ring-2 focus:ring-teal-400 transition-all"
      type="text"
      name="brand"
      required
      placeholder="Enter brand"
      onChange={handleChange}
    />

    <input
      className="!p-3 rounded-md outline-none focus:ring-2 focus:ring-teal-400 transition-all"
      type="text"
      name="type"
      required
      placeholder="Enter type"
      onChange={handleChange}
    />

    <input
      className="!p-3 rounded-md outline-none focus:ring-2 focus:ring-teal-400 transition-all"
      type="text"
      name="material"
      required
      placeholder="Enter material"
      onChange={handleChange}
    />

    <input
      className="!p-3 rounded-md outline-none focus:ring-2 focus:ring-teal-400 transition-all"
      type="text"
      name="strapMaterial"
      required
      placeholder="Enter strap material"
      onChange={handleChange}
    />

    <div className="!mt-2">
      <input
        type="file"
        name="imgFile"
        onChange={handleImageChange}
        className="text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600 transition-all"
      />
    </div>

    <button
      type="submit"
      onClick={submit}
      className="!mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold !py-2 !px-4 rounded-md transition-all shadow-md">
    
      Upload product

    </button>


    <Link to={"/admin"} className="!mt-4">
          <button className="bg-gray-700 hover:bg-gray-600 text-white hover:text-yellow-500 !py-2 !px-4 rounded-xl transition-all duration-325 hover:translate-x-1 hover:shadow-lg shadow-md">
            Back to admin page
          </button>
        </Link>
  </form>
</div>
  
        <p className="text-white !mt-4">{info}</p>
  
      </div>
    </>
  );
}
