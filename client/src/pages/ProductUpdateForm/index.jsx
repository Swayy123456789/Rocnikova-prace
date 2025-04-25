import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateProduct, getProductById } from "../../models/Product";
import { createUpdate } from "../../models/Uploads";

export default function ProductUpdateForm() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);  // Ponechávám null, aby data nebyla předvyplněná
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState("");
  const [formData, setFormData] = useState({
    imgName: "",
    name: "",
    price: "",
    brand: "",
    type: "",
    material: "",
    strapMaterial: "",
    imgFile: null,
  });
  const navigate = useNavigate();

  // Načítání produktu (abychom získali data, pokud je potřebujeme)
  const load = async () => {
    const data = await getProductById(id);
    if (data.status === 200) {
      setProduct(data.payload);
      setLoaded(true);
    } else {
      setLoaded(null);
    }
  };


  useEffect(() => {
    load(); // Zavolání funkce na načtení dat
  }, []);

  // Funkce pro změnu hodnoty vstupů
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Funkce pro změnu souboru obrázku
  const handleImageChange = (e) => {
    setFormData({ ...formData, imgFile: e.target.files[0] });
  };

  // Funkce pro odeslání formuláře
  const submit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const [key, value] of Object.entries(formData)) {
      formDataToSend.append(key, value);
    }
  
   
    const update = await createUpdate(id, formDataToSend);
    if (update.status === 201) {
      navigate("/products");
    } else {
      setInfo(update.msg);
    }
  };

  if (isLoaded === null) {
    return <p>Product not found</p>;
  }

  if (!isLoaded) {
    return <p>Product is loading...</p>;
  }

  return (
    <div className="text-center font-bold min-h-screen flex flex-col items-center justify-center bg-gradient-to-br !px-4">
      <div className="rounded-2xl border border-gray-500 shadow-xl !p-6 !mb-6 w-fit mx-auto">
        <h1 className="text-4xl font-semibold text-white">Update</h1>
        <h2 className="text-2xl font-semibold text-white !mt-5">{product.name}</h2>
      </div>

      <div className="rounded-2xl shadow-xl !p-8 max-w-xl mx-auto !mt-6">
        <form className="flex flex-col gap-4 text-white" encType="multipart/form-data" onSubmit={submit}>
          <input
            className="!p-3 rounded-md outline-none focus:ring-2 focus:ring-teal-400 transition-all"
            type="text"
            name="imgName"
            placeholder="Enter image name"
            value={formData.imgName}
            onChange={handleChange}
          />
          <input
            className="!p-3 rounded-md outline-none focus:ring-2 focus:ring-teal-400 transition-all"
            type="text"
            name="name"
            required
            placeholder="Enter the name of the product"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className="!p-3 rounded-md outline-none focus:ring-2 focus:ring-teal-400 transition-all"
            type="number"
            name="price"
            required
            placeholder="Enter price"
            value={formData.price}
            onChange={handleChange}
          />
          <input
            className="!p-3 rounded-md outline-none focus:ring-2 focus:ring-teal-400 transition-all"
            type="text"
            name="brand"
            required
            placeholder="Enter brand"
            value={formData.brand}
            onChange={handleChange}
          />
          <input
            className="!p-3 rounded-md outline-none focus:ring-2 focus:ring-teal-400 transition-all"
            type="text"
            name="type"
            required
            placeholder="Enter type"
            value={formData.type}
            onChange={handleChange}
          />
          <input
            className="!p-3 rounded-md outline-none focus:ring-2 focus:ring-teal-400 transition-all"
            type="text"
            name="material"
            required
            placeholder="Enter material"
            value={formData.material}
            onChange={handleChange}
          />
          <input
            className="!p-3 rounded-md outline-none focus:ring-2 focus:ring-teal-400 transition-all"
            type="text"
            name="strapMaterial"
            required
            placeholder="Enter strap material"
            value={formData.strapMaterial}
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
            className="!mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold !py-2 !px-4 rounded-md transition-all shadow-md"
          >
            Update product
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
  );
}