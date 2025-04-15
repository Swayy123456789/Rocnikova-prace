import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateProduct, getProductById } from "../../models/Product";
import { createUpdate } from "../../models/Uploads";

export default function ProductUpdateForm() {
  const { id } = useParams();
  const [ product, setProduct ] = useState();
  const [ isLoaded, setLoaded ] = useState();
  const [ info, setInfo ] = useState();
  const [ formData, setFormData ] = useState();
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setFormData({ ...formData, imgFile: e.target.files[0] });
  };

  const load = async () => {
    const data = await getProductById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setProduct(data.payload);
      setLoaded(true);
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const [key, value] of Object.entries(formData)) {
        formDataToSend.append(key, value);
      }
      console.log(Array.from(formDataToSend.entries()));
      const update = await createUpdate(formDataToSend);
      if (update.status === 201) return navigate("/products");
      setInfo(update.msg);
    }

  const updateForm = async () => {
    const data = await updateProduct(id, formData);
    if (data.status === 200) return navigate(`/product/${id}`);
    setInfo(data.message);
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
    e.preventDefault();
    updateForm();
  }


  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Product not found</p>
      </>
    )
  }

  if (!isLoaded) {
    return (
      <>
        <p>Product is loading...</p>
      </>
    )
  }

  return (
    <>
      <div className="text-center font-bold">
        <h1>Update product</h1>

        <form className="items-center" encType="multipart/form-data">
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

        <button className="!bg-black"><input type="submit" value="Update product" onClick={submit}/></button>

      </form>
        
        <p>{info}</p>
        <Link to={"/"}>
          <p>Go back</p>
        </Link>
      </div>
    </>
  )
}
