import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Sidebar from "./components/layout/Structure/Sidebar";
import CategoryPage from "./pages/Categories/CategoryPage";
import CreateCategory from "./components/layout/Category/CreateCategory";
import ProductPage from "./pages/Products/ProductPage";
import CreateProduct from "./components/layout/Product/CreateProduct";

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />

        <div className="flex-1 flex flex-col overflow-hidden p-4 bg-gray-100">
          <div className="flex-1 overflow-y-auto p-6">
            <Routes>
              <Route path="/categories" element={<CategoryPage />} />
              <Route path="/categories/create" element={<CreateCategory />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/products/create" element={<CreateProduct />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
