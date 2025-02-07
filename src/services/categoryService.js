import API_URL from './apiConfig';

const CATEGORY_API_URL = `${API_URL}/categories`; 

export const getCategories = async () => {
  const response = await fetch(CATEGORY_API_URL);
  if (!response.ok) throw new Error('Failed to fetch categories');
  return await response.json();
};


export const getCategoryById = async (id) => {
  const response = await fetch(`${CATEGORY_API_URL}/${id}`);
  if (!response.ok) throw new Error('Failed to fetch category');
  return await response.json();
};

export const createCategory = async (category) => {
  const response = await fetch(CATEGORY_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(category),
  });
  if (!response.ok) throw new Error('Failed to create category');
  return await response.json();
};

export const deleteCategory = async (id) => {
  const response = await fetch(`${CATEGORY_API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete category');
};
