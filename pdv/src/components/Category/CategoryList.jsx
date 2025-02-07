import React, { useEffect, useState } from 'react';
import { getCategories, deleteCategory } from '../../services/categoryService';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (err) {
        setError('Failed to fetch categories');
      }
    };
    fetchCategories();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteCategory(id);
      setMessage('Category deleted successfully!');
      setCategories(categories.filter((category) => category.id !== id));
    } catch (err) {
      setMessage('Failed to delete category');
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
  <div>
      <h1 className="text-lg font-semibold p-4">Categories</h1>
      <a href='/categories/create' className="text-blue-600 hover:underline p-4 block">Create New Category</a>
      {message && <p className="text-green-600 p-4">{message}</p>}
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">Category Name</th>
            <th scope="col" className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id} className="odd:bg-white  even:bg-gray-50 border-b border-gray-200">
              <td className="px-6 py-4 font-medium text-gray-900 ">{category.name}</td>
              <td className="px-6 py-4">
                <button 
                  onClick={() => handleDelete(category.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
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

export default CategoryList;
