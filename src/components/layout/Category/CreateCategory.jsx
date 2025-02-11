import React, { useState } from 'react';
import { createCategory } from "../../../services/categoryService";
import Breadcrumbs from "../../ui/Breadcrumbs";
import ButtonSave from '../../ui/Buttons/ButtonSave';
import TitlePages from '../../ui/Titles/TitlePages';

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

  const breadcrumbLinks = [
    { label: "Categories", to: '/categories'},
    { label: "Create Category"}
  ];

  return (
    <>
      <div>

        <Breadcrumbs links={breadcrumbLinks} />

        <TitlePages title="Create Category"/>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Category Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 bg-white block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <ButtonSave buttonText="Save Category" />

        </form>

        {message && (
          <p className="mt-4 text-sm font-medium text-green-600">{message}</p>
        )}
      </div>
    </>
  );
};

export default CreateCategory;