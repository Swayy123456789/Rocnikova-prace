import { Link } from "react-router-dom";
import { deleteProduct } from "../../models/Product";
import { useNavigate } from "react-router-dom";
import { Trash } from "lucide-react";

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
    <div className="!mx-auto !my-4 rounded-xl bg-[#1e1e1e] !p-4 shadow-lg transition !px-7">
      <div className="flex items-center justify-between">
        <Link
          to={`/admin/product/${props._id}`}
          className="text-lg font-bold text-white hover:underline"
        >
          {props.name}
        </Link>
        <button
          onClick={handleDelete}
          className="transition duration-200 hover:scale-110 !mx-4"
        >
          <Trash size={20} />
        </button>
      </div>
    </div>
  );
}

