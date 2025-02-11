import React from 'react';
import ProductList from '../../components/layout/Product/ProductsList';
import TitlePages from '../../components/ui/title/TitlePages';
import ButtonCreate from '../../components/ui/buttons/ButtonCreate';

const ProductPage = () => {
  return (
    <>
    <div>
      <TitlePages title="Products"/>

      <ButtonCreate buttonText="Create New Product" href="/products/create" />

      <ProductList />
    </div>
    </>
  );
};

export default ProductPage;