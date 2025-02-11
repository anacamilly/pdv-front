import React, { useEffect, useState } from 'react';
import { getCategories } from '../../../services/categoryService';
import Table from '../../ui/Tables/Table'; 

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

  if (error) {
    return <div>Error: {error}</div>;
  }

  const columns = [
    { Header: 'Name', accessor: 'name' }
  ];

  return (
    <>
      <div>
          {message && <p className="text-green-600 p-4">{message}</p>}

          <Table data={categories} columns={columns} />
      </div>
    </>
  );
};

export default CategoryList;
