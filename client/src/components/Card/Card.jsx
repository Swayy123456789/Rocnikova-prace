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

        <Card sx={{  width: 300,             
      height: 380, 
      backgroundColor: "#cccccc",           
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignSelf: "start",
      transition: "transform 0.3s ease, box-shadow 0.3s ease", "&:hover": {
      transform: "scale(1.05)",  
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)" }}} className="shadow-md hover:shadow-xl transition duration-300">


          <CardMedia
  sx={{
    width: "100%",             
    height: 200,                
    overflow: "hidden",        
    display: "flex",
    alignItems: "center",      
    justifyContent: "center",   
  }}
>
  <img
    src={product.imagePath}
    alt={product.brand}
    style={{
      width: "100%",            
      height: "100%",        
      objectFit: "contain",    
    }}
  />


      </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {product.price} $
            </Typography>
          </CardContent>
          <CardActions>
            {product.brand},
            {" " + product.material}
          </CardActions>
        </Card>
      </Link>
    </>
  );
}
