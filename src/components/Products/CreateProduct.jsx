import React, { useState, useEffect } from 'react';
import { createProduct } from '../../services/productService';
import { getCategories } from '../../services/categoryService';

const CreateProduct = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [costPrice, setCostPrice] = useState('');
    const [salePrice, setSalePrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unitOfMeasure, setUnitOfMeasure] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await getCategories();
                setCategories(data);
            } catch (error) {
                console.error('Erro ao buscar categorias', error);
            }
        };
        fetchCategories();
    }, []);

    const resetForm = () => {
        setName('');
        setDescription('');
        setCostPrice('');
        setSalePrice('');
        setQuantity('');
        setUnitOfMeasure('');
        setExpirationDate('');
        setCategory('');
    };    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const selectedCategory = categories.find(cat => cat.id === category);
            const newProduct = { 
                name, 
                description, 
                costPrice, 
                salePrice, 
                quantity, 
                unitOfMeasure, 
                expirationDate, 
                category: selectedCategory
            };
            await createProduct(newProduct);
            setMessage('Product created successfully!');
            resetForm();
        } catch (err) {
            setMessage('Error creating product');
        }
    };

    const profit = salePrice && costPrice ? (salePrice - costPrice).toFixed(2) : '0.00';


    const profitMargin = salePrice && costPrice ? (((salePrice - costPrice) / salePrice) * 100).toFixed(2) : '';

    return (
        <div className="p-6">
            <h1 className="text-2xl  text-gray-700 font-bold mb-6">Create Product</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Linha 1: Name e Description */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name:</label>
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Description:</label>
                        <input 
                            type="text" 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)} 
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                </div>

                {/* Linha 2: Cost Price, Sale Price, Profit e Profit Margin */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Cost Price:</label>
                        <input 
                            type="number" 
                            value={costPrice} 
                            onChange={(e) => setCostPrice(e.target.value)} 
                            required 
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Sale Price:</label>
                        <input 
                            type="number" 
                            value={salePrice} 
                            onChange={(e) => setSalePrice(e.target.value)} 
                            required 
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                  
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Profit Margin:</label>
                        <div className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100">
                            {profitMargin}%
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Profit:</label>
                        <div className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100">
                            {profit}
                        </div>
                    </div>
                </div>

                {/* Linha 3: Quantity e Unit of Measure */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Quantity:</label>
                        <input 
                            type="number" 
                            value={quantity} 
                            onChange={(e) => setQuantity(e.target.value)} 
                            required 
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Unit of Measure:</label>
                        <select 
                            value={unitOfMeasure} 
                            onChange={(e) => setUnitOfMeasure(e.target.value)} 
                            required 
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option disabled value="">Select a unit</option>
                            <option value="kg">Kilogram (kg)</option>
                            <option value="g">Gram (g)</option>
                            <option value="lb">Pound (lb)</option>
                            <option value="oz">Ounce (oz)</option>
                            <option value="l">Liter (L)</option>
                            <option value="ml">Milliliter (mL)</option>
                            <option value="unit">Unit</option>
                        </select>
                    </div>
                </div>

                {/* Linha 4: Category e Expiration Date */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Category:</label>
                        <select 
                            value={category} 
                            onChange={(e) => setCategory(e.target.value)} 
                            required 
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option value="">Select a category</option>
                            {categories.map((cat) => (
                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Expiration Date:</label>
                        <input 
                            type="date" 
                            value={expirationDate} 
                            onChange={(e) => setExpirationDate(e.target.value)} 
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                </div>

                {/* Botão de Envio */}
                <button 
                    type="submit" 
                    className="mt-4 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Create Product
                </button>
            </form>
            {message && <p className="mt-4 text-sm font-medium text-green-600">{message}</p>}
        </div>
    );
};

export default CreateProduct;