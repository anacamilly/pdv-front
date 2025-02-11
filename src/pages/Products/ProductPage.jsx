import React from 'react';
import ProductList from '../../components/layout/Product/ProductsList';
import TitlePages from '../../components/ui/Titles/TitlePages';
import ButtonCreate from '../../components/ui/Buttons/ButtonCreate';

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