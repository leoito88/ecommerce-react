import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

export default function ProductCard(product) {
  const { id } = product;
  
  const nav = useNavigate();

  return (
    <div className="product-card-container">
      <div className="product-img">
        <img
          src={product.image}
          alt={product.title}
          style={{ height: "120px" }}
        />
      </div>

      <div className="product-title">
        <h3>{product.title}</h3>
      </div>

      <div className="product-price">${product.price}</div>

      <div className="product-button">
        <Button 
            color="inherit" 
            onClick={() => {nav(`/products/${id}`)}}
            >Buy Now
        </Button>
      </div>
    </div>
  );
}