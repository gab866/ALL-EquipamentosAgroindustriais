import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Catalog.scss';

const Catalog = () => {
  return (
    <div className="catalog">
      <div className="container">
        <h1>Catálogo de Produtos</h1>
        <p className="catalog-description">
          Conheça nossa linha completa de equipamentos agroindustriais
        </p>
        
        <div className="products-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;