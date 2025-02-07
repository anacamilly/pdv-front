import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importando corretamente o Router
import "./App.css";

import Sidebar from "./components/Sidebar";
import CategoryPage from "./pages/CategoryPage";
import CreateCategory from "./components/Category/CreateCategory";
import ProductPage from "./pages/ProductPage";
import CreateProduct from "./components/Products/CreateProduct";

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />

        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto p-6 bg-gray-100">
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
