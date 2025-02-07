import API_URL from './apiConfig';

const PRODUCT_API_URL = `${API_URL}/products`; 

export const getProducts = async () => {
  const response = await fetch(PRODUCT_API_URL);
  if (!response.ok) throw new Error('Failed to fetch products');
  return await response.json();
};


export const getProductById = async (id) => {
  const response = await fetch(`${PRODUCT_API_URL}/${id}`);
  if (!response.ok) throw new Error('Failed to fetch product');
  return await response.json();
};

export const createProduct = async (product) => {
  const response = await fetch(PRODUCT_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  if (!response.ok) throw new Error('Failed to create product');
  return await response.json();
};

export const deleteProduct = async (id) => {
  const response = await fetch(`${PRODUCT_API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete product');
};
