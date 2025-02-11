import React from 'react';
import CategoryList from '../../components/layout/Category/CategoryList';
import TitlePages from '../../components/ui/Titles/TitlePages';
import ButtonCreate from '../../components/ui/Buttons/ButtonCreate';

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