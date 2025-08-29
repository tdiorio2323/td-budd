
import React from 'react';
import { Order } from '../../types';

interface OrderManagerProps {
    orders: Order[];
}

const OrderManager: React.FC<OrderManagerProps> = ({ orders }) => {
    
    const getStatusColor = (status: Order['status']) => {
        switch (status) {
            case 'pending': return 'text-yellow-400';
            case 'confirmed': return 'text-blue-400';
            case 'preparing': return 'text-indigo-400';
            case 'ready': return 'text-green-400';
            case 'completed': return 'text-gray-500';
            case 'cancelled': return 'text-red-500';
            default: return '';
        }
    };
    
    return (
        <div className="bg-brand-gray p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Recent Orders</h3>
            <div className="space-y-4">
                {orders.map(order => (
                    <div key={order.id} className="bg-brand-light-gray p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="font-bold">Order #{order.id.substring(0,6)}</p>
                                <p className="text-sm text-gray-400">{order.items.length} items &bull; ${ (order.totalAmount / 100).toFixed(2) }</p>
                            </div>
                            <div className={`font-semibold capitalize ${getStatusColor(order.status)}`}>
                                {order.status}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderManager;