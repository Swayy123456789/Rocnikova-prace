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
        <p>Product not found</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Product is loading...</p>
      </>
    );
  }

  return (
    <>
      <section className="container max-w-300 text-center">
        <h1>{product.name}</h1>
        <p>ID of watches: {id}</p>
        <p>Name of the watches: {product.name}</p>
        <p>Brand: {product.brand}</p>
        <p>Price: {product.price}</p>
        <p>Type: {product.type}</p>
        <p>Material: {product.material}</p>
        <p>Strap Material: {product.strapMaterial}</p>
        
        <form>
          <input
            type="text"
            placeholder={product.name}
            onChange={handleChange}
          />
          <button onClick={handleDelete}>Delete watches</button>
        </form>
        <p>{info}</p>
        <Link to={`/update-product/${id}`}>
          <p>Update watches</p>
        </Link>

        <Link to={"/"}>
          <p>Go home</p>
        </Link>
      </section>
    </>
  );
}
