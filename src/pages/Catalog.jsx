import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Catalog.scss';

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="catalog">
      <div className="container">
        <h1>Catálogo de Produtos</h1>
        <p className="catalog-description">
          Conheça nossa linha completa de equipamentos agroindustriais
        </p>
        
        <div className="search-container">
          <input
            type="text"
            placeholder="Pesquisar produtos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;