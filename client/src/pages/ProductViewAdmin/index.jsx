import { Link, useParams, useNavigate } from "react-router-dom";
import { deleteProduct, getProductById } from "../../models/Product";
import { useState, useEffect } from "react";

export default function ProductViewAdmin() {
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
        <p className="min-h-screen flex items-center justify-center !my-auto bg-gradient-to-br text-white text-4xl font-bold">
          Product not found
        </p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p className="min-h-screen flex items-center justify-center !my-auto bg-gradient-to-br text-white text-4xl font-bold">
          Product is loading...
        </p>
      </>
    );
  }

  return (
    <>
     <div className="text-center font-bold min-h-screen flex flex-col items-center justify-center bg-gradient-to-br !px-4 sm:px-6 md:px-8">
  <div className="rounded-2xl border border-gray-500 shadow-xl !p-6 !mb-6 w-full max-w-md sm:max-w-lg lg:max-w-xl mx-auto">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white break-words">{product.name}</h1>
  </div>

  <div className="rounded-2xl shadow-xl !p-6 sm:p-8 w-full max-w-md sm:max-w-lg lg:max-w-xl">
    <div className="flex flex-col gap-3 text-white text-left font-semibold text-sm sm:text-base !p-5">
      <p><span className="text-gray-300">ID:</span> {id}</p>
      <p><span className="text-gray-300">Name:</span> {product.name}</p>
      <p><span className="text-gray-300">Brand:</span> {product.brand}</p>
      <p><span className="text-gray-300">Price:</span> {product.price} $</p>
      <p><span className="text-gray-300">Type:</span> {product.type}</p>
      <p><span className="text-gray-300">Material:</span> {product.material}</p>
      <p><span className="text-gray-300">Strap Material:</span> {product.strapMaterial}</p>
    </div>

    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col !mt-6">
      <input
        type="text"
        placeholder={product.name}
        onChange={handleChange}
        className="!p-3 rounded-md outline-none focus:ring-2 focus:ring-teal-400 transition-all text-white placeholder-gray-500"
      />
      <button
        onClick={handleDelete}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold !py-2 !ml-20 !mt-6 rounded-md transition-all shadow-md"
      >
        Delete product
      </button>
    </form>

    <div className="flex-col sm:flex-row !mt-10">
      <Link
        to={`/update-product/${id}`}
        className="bg-blue-600 hover:bg-blue-500 text-white font-semibold !py-2 !px-4 !mt-6 rounded-md transition-all shadow-md text-center"
      >
        Update product
      </Link>
    </div>

    <div className="flex flex-col sm:flex-row justify-center mt-auto">
      <Link
        to="/admin"
        className="bg-gray-700 hover:bg-gray-600 text-white hover:text-yellow-500 font-semibold !py-2 !px-4 !mt-10 rounded-md transition-all shadow-md text-center"
      >
        Back to admin page
      </Link>
    </div>
  </div>

  {info && <p className="text-white !mt-4 text-sm sm:text-base text-center break-words">{info}</p>}
</div>
    </>
  );
}
