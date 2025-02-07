import React, { useState } from 'react';
import { createCategory } from "../../../services/categoryService";

const CreateCategory = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newCategory = { name };
      await createCategory(newCategory);
      setMessage('Category created successfully!');
      setName('');
    } catch (err) {
      setMessage('Failed to create category');
    }
  };

  return (
    <>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-700">Create Category</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Category Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Create Category
        </button>
      </form>

      {message && (
        <p className="mt-4 text-sm font-medium text-green-600">{message}</p>
      )}
    </div>
    </>
  );
};

export default CreateCategory;