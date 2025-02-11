import React from 'react';
import CategoryList from '../../components/layout/Category/CategoryList';
import TitlePages from '../../components/ui/title/TitlePages';
import ButtonCreate from '../../components/ui/buttons/ButtonCreate';

const CategoryPage = () => {
  return (
    <>
    <div>
      <TitlePages title="Categories"/>
      
      <ButtonCreate buttonText="Create New Category" href="/categories/create" />

      <CategoryList />
    </div>
    </>
  );
};

export default CategoryPage;