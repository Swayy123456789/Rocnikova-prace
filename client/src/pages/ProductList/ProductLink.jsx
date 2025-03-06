import { Link } from "react-router-dom"

export default function ProductLink(props) {
  return (
    <>
        <Link to={`/products/${props._id}`}>
            <p>{props.name}</p>
        </Link>
    </>
  )
}
