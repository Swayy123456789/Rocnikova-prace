import { Link, useParams, useNavigate } from "react-router-dom";
import { deleteProduct, getProductById } from "../../models/Product";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { ArrowLeft } from "lucide-react";

export default function ProductView() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  //const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);


  const load = async () => {
    const data = await getProductById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setProduct(data.payload);
      setLoaded(true);
    }
  };

  /*const handleChange = (e) => {
    setFormData(e.target.value);
  };
  */


  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, id: crypto.randomUUID(), quantity: 1 }));
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
      <div className="min-h-screen flex items-center justify-center text-white">
        <p className="text-2xl font-bold">Product not found</p>
      </div>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
      <div className="min-h-screen flex items-center justify-center text-white">
        <p>Product is loading...</p>
      </div>
      </>
    );
  }

  return (

    <div className="relative">
      {showPopup && (
        <div className="absolute top-2 right-2 bg-gray-400 text-white text-lg font-bold !px-3 !py-1 rounded shadow-lg">
          Product has been added to cart!
        </div>
      )}
      
    
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br">
      

      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-10 items-center rounded-3xl !p-8 shadow-xl text-white transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
        
        {/* obrazek */}
        <div className="flex justify-center items-center h-[500px]">
          <img
            src={product.imagePath}
            alt={product.name}
            className="max-w-sm w-full rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>

        {/* info */}
        <div className="h-[520px] flex flex-col justify-between">
          <div className="!space-y-6">
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <p className="text-sm text-gray-300">Product ID: {id}</p>
            <p><span className="font-semibold">Brand:</span> {product.brand}</p>
            <p><span className="font-semibold">Price:</span> ${product.price}</p>
            <p><span className="font-semibold">Type:</span> {product.type}</p>
            <p><span className="font-semibold">Strap Material:</span> {product.strapMaterial}</p>
            <p><span className="font-semibold">Material:</span> {product.material}</p>
          </div>

          {/* pridani do kosiku tlacitko */}
          <button
            onClick={handleAddToCart}
            className="bg-gray-500 hover:bg-green-700 transition text-white font-semibold !px-4 !py-2 rounded-xl shadow">
            Add to cart
          </button>

          <Link
            to={"/products"}
            className="inline-flex items-center gap-2 !mt-1 !px-4 !py-2 max-w-52 bg-gray-700 hover:bg-gray-600 transition-all duration-300 rounded-xl shadow text-white hover:translate-x-1 hover:shadow-lg"
          >
            <ArrowLeft size={18} />
            <span>Back to products</span>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}