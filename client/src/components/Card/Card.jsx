import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ShoppingBasket } from "lucide-react";
import { Link } from "react-router-dom";

export default function MediaCard({ product }) {
  return (
    <>
      <Link to={`/product/${product._id}`}>
        <Card sx={{ width: 200 }} className="!w-full">
          <CardMedia
            sx={{ height: 150 }}
            image={product.imagePath}
            title={product.brand}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {product.price} $
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <ShoppingBasket />
            </Button>

            <Button size="small">Show details</Button>
          </CardActions>
        </Card>
      </Link>
    </>
  );
}
