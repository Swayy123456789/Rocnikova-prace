import { Link } from "react-router-dom";
import "./index.css";
import { deleteProduct } from "../../models/Product";
import { useNavigate } from "react-router-dom";

export default function ProductLinkAdmin(props) {
  const navigate = useNavigate();
  const handleDelete = async (e) => {
    e.preventDefault();
    const data = await deleteProduct(props._id);
    if (data.status === 200) {
      window.location.reload();
    }
  };

  return (
    <>
      <div className="!p-3">
        <div>
          <Link to={`/admin/product/${props._id}`}>{props.name}</Link>
          <button
            onClick={handleDelete}
            className="productLinkAdminBtn"
            style={{ color: "red" }}
          >
            X
          </button>
        </div>
      </div>
    </>
  );
}
