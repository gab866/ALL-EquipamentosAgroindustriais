import { Link } from 'react-router-dom';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-content">
        <h3 className="product-name">{product.name}</h3>
        <Link to={`/produto/${product.id}`} className="btn">
          Ver produto
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;