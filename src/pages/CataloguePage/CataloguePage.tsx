import React, { useState, useEffect } from 'react';
import ProductsList from '../../components/ProductsList/ProductsList';
import { IProduct } from '../../utils/interfaces';
import * as API from '../../utils/api';

type CatalogueProps = {
  products: IProduct[];
};

const Catalogue: React.FC<CatalogueProps> = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    API.fetchProducts()
      .then(res => setProducts(res.data))
      .catch(err => {
        throw new Error(err.message);
      });
  }, []);

  return (
    <div>
      <h1>Catalogue</h1>
      <ProductsList products={products} />
    </div>
  );
};

export default Catalogue;
