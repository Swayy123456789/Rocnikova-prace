import { Link, useParams, useNavigate } from "react-router-dom";
import { deleteProduct, getProductById } from "../../models/Product";
import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";

export default function ProductView() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getProductById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setProduct(data.payload);
      setLoaded(true);
    }
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (product.name === formData) {
      const data = await deleteProduct(id);
      if (data.status === 200) {
        alert("Product deleted successfully!");
        navigate(`/`);
      } else {
        setInfo(data.message);
      }
    } else {
      setInfo("Wrong input");
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
      <div className="container !mx-auto !my-auto text-center font-bold text-2xl">
        <p>Product not found</p>
        </div>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
      

      <div className="container !mx-auto !my-auto text-center font-bold text-2xl">
        <p>Product is loading...</p>
        </div>

        
      </>
    );
  }

  return (
    <>
    
      <div className="container font-bold text-xl text-gray-200 text-center sm:text-base md:text-lg lg:text-xl xl:text-2xl">
        <h1>{product.name}</h1>
        <p>{id}</p>
        <p>Name: {product.name}</p>
        <p>Brand: {product.brand}</p>
        <p>Price: {product.price}</p>
        <p>Type: {product.type}</p>
        <p>Strap Material: {product.strapMaterial}</p>
        <p>Material: {product.material}</p>
        </div>

      <div className="container ">
        <img src={product.imagePath} alt="" />
      </div>

      <button className="shadow-lg">
        <Link to={"/products"}>
        <ArrowLeft />
        <p>Back to products</p>
        </Link>
        </button>
    </>
  );
}
