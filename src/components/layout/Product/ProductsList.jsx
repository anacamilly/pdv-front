import React, { useEffect, useState } from 'react';
import { getProducts } from '../../../services/productService';
import ButtonCreate from '../../ui/Buttons/ButtonCreate';
import Table from '../../ui/Tables/Table'; 

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError('Failed to fetch products');
      }
    };
    fetchProducts();
  }, []);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  const columns = [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Description', accessor: 'description' },
    { Header: 'SKU', accessor: 'sku' },
    { Header: 'Cost Price', accessor: 'costPrice' },
    { Header: 'Sale Price', accessor: 'salePrice' },
    { Header: 'Quantity', accessor: 'quantity' },
    { Header: 'Unit of Measure', accessor: 'unitOfMeasure' },
    { Header: 'Expiration Date', accessor: 'expirationDate' },
    { Header: 'Category', accessor: 'category.name' }
  ];

  return (
    <>
      <div>
        {message && <p className="text-green-500 mb-4">{message}</p>}

        <Table data={products} columns={columns} />
      </div>
    </>
  );
};

export default ProductList;