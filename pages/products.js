import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../utils/data/productData';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const [products, setProducts] = useState([]);

  const getAllTheProducts = () => {
    getAllProducts().then(setProducts);
  };

  useEffect(() => {
    getAllTheProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1 className="collection">Product Collection</h1>
      <h5 className="collection">Browse through the Product Collection to learn about products that have proven to create and maintain curls for various hair types.</h5>
      <div className="d-flex flex-wrap">
        {products?.map((product) => (
          <ProductCard key={`product--${product.id}`} imageUrl={product.image_url} productType={product.product_type} name={product.name} purpose={product.purpose} date={product.date} onUpdate={getAllTheProducts} />
        ))}
      </div>
    </>
  );
}
