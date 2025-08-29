
import React from 'react';
import { Brand } from '../../types';

interface BrandManagerProps {
    brands: Brand[];
}

const BrandManager: React.FC<BrandManagerProps> = ({ brands }) => {
    return (
        <div className="bg-brand-gray p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Manage Brands</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-brand-light-gray">
                            <th className="p-3">Name</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {brands.map(brand => (
                            <tr key={brand.id} className="border-b border-brand-light-gray hover:bg-brand-light-gray/50">
                                <td className="p-3">{brand.name}</td>
                                <td className="p-3">
                                    <span className={`px-2 py-1 text-xs rounded-full ${brand.isActive ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                                        {brand.isActive ? 'Active' : 'Inactive'}
                                    </span>
                                </td>
                                <td className="p-3 space-x-2">
                                    <button className="text-blue-400 hover:text-blue-300">View</button>
                                    <button className="text-yellow-400 hover:text-yellow-300">Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BrandManager;
