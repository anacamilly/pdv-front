import React, { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from '../../../services/productService';
import Breadcrumbs from "../../ui/breadcrumbs";

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

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setMessage('Product deleted successfully!');
      setProducts(products.filter((product) => product.id !== id));
    } catch (err) {
      setMessage('Failed to delete product');
    }
  };

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  const breadcrumbLinks = [
    { label: "Products"}
];

  return (
    <div className="p-4">
      
      <Breadcrumbs links={breadcrumbLinks} />

      <h1 className="text-2xl font-bold mb-4">Products</h1>

      <a 
        href='/products/create' 
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block"
        aria-label="Create a new product"
      >
        Create New Product
      </a>

      {message && <p className="text-green-500 mb-4">{message}</p>}
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">SKU</th>
            <th className="py-2 px-4 border-b">Cost Price</th>
            <th className="py-2 px-4 border-b">Sale Price</th>
            <th className="py-2 px-4 border-b">Quantity</th>
            <th className="py-2 px-4 border-b">Unit of Measure</th>
            <th className="py-2 px-4 border-b">Expiration Date</th>
            <th className="py-2 px-4 border-b">Category</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{product.name}</td>
              <td className="py-2 px-4 border-b">{product.description}</td>
              <td className="py-2 px-4 border-b">{product.sku}</td>
              <td className="py-2 px-4 border-b">{product.costPrice}</td>
              <td className="py-2 px-4 border-b">{product.salePrice}</td>
              <td className="py-2 px-4 border-b">{product.quantity}</td>
              <td className="py-2 px-4 border-b">{product.unitOfMeasure}</td>
              <td className="py-2 px-4 border-b">{product.expirationDate}</td>
              <td className="py-2 px-4 border-b">{product.category.name}</td>
              <td className="py-2 px-4 border-b">
                <button 
                  onClick={() => handleDelete(product.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;