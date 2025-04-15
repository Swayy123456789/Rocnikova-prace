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
      <div className="container mx-auto my-auto text-center font-bold text-2xl text-gray-300">
        <p>Product not found</p>
      </div>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
      <div className="container mx-auto my-auto text-center font-bold text-2xl text-gray-300">
        <p>Product is loading...</p>
      </div>
      </>
    );
  }

  return (
    <>
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product.imagePath}
            alt={product.name}
            className="w-full h-auto object-contain max-w-md"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col !space-y-5 !my-auto">
          <h1 className="text-4xl font-bold text-white">{product.name}</h1>
          <p className="text-xl text-white">{`ID: ${id}`}</p>
          
          <div className="!space-y-2 text-gray-100 text-lg !py-2">
            <p><span className="font-semibold">Brand:</span> {product.brand}</p>
            <p><span className="font-semibold">Price:</span> ${product.price}</p>
            <p><span className="font-semibold">Type:</span> {product.type}</p>
            <p><span className="font-semibold">Strap Material:</span> {product.strapMaterial}</p>
            <p><span className="font-semibold">Material:</span> {product.material}</p>
          </div>

          {/* Back Button */}
          <div className="mt-6">
            <Link to="/products">
              <button className="flex items-center !px-6 !py-3 bg-gray-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-400 transition ease-in-out duration-325">
                <ArrowLeft className="mr-2" />
                Back to products
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
