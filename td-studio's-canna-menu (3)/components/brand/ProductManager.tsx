
import React, { useState } from 'react';
import { Product, ProductCategory } from '../../types';

interface ProductManagerProps {
    products: Product[];
}

const ProductManager: React.FC<ProductManagerProps> = ({ products: initialProducts }) => {
    const [products, setProducts] = useState<Product[]>(initialProducts);
    
    // In a real app, these would be API calls.
    const addProduct = () => console.log("Add product functionality to be implemented.");
    const editProduct = (id: string) => console.log(`Edit product ${id} functionality to be implemented.`);
    const deleteProduct = (id: string) => {
        setProducts(products.filter(p => p.id !== id));
        console.log(`Deleted product ${id}`);
    };

    return (
        <div className="bg-brand-gray p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Manage Products</h3>
                <button onClick={addProduct} className="bg-brand-green hover:bg-brand-green-light text-white font-semibold py-2 px-4 rounded-lg text-sm">Add Product</button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-brand-light-gray">
                            <th className="p-3">Name</th>
                            <th className="p-3">Category</th>
                            <th className="p-3">Price</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id} className="border-b border-brand-light-gray hover:bg-brand-light-gray/50">
                                <td className="p-3">{product.name}</td>
                                <td className="p-3">{product.category}</td>
                                <td className="p-3">${(product.price / 100).toFixed(2)}</td>
                                <td className="p-3 space-x-2">
                                    <button onClick={() => editProduct(product.id)} className="text-blue-400 hover:text-blue-300">Edit</button>
                                    <button onClick={() => deleteProduct(product.id)} className="text-red-500 hover:text-red-400">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductManager;
