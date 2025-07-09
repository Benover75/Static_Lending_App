import React from 'react';
import { Customer } from '../types/Customer';
import { FaEye, FaTrash, FaSearch } from 'react-icons/fa';

interface CustomerTableProps {
  customers: Customer[];
  onViewDetails: (customer: Customer) => void;
  onDeleteCustomer: (id: string) => void;
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const CustomerTable: React.FC<CustomerTableProps> = ({
  customers,
  onViewDetails,
  onDeleteCustomer,
  searchTerm,
  onSearchChange
}) => {
  return (
    <div className="bg-gray-900/80 backdrop-blur rounded-xl shadow-lg border border-purple-900/30 overflow-hidden">
      <div className="p-4 border-b border-gray-800">
        <div className="relative">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input 
            type="search"
            placeholder="Search customers by name or ID..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-800">
          <thead className="bg-gray-800/50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-purple-300 uppercase tracking-wider">ID</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-purple-300 uppercase tracking-wider">Name</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-purple-300 uppercase tracking-wider">Occupation</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-purple-300 uppercase tracking-wider">Loan ($)</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-purple-300 uppercase tracking-wider">Start</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-purple-300 uppercase tracking-wider">Due</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-purple-300 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-purple-300 uppercase tracking-wider">Balance</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-purple-300 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {customers.length === 0 ? (
              <tr>
                <td colSpan={9} className="px-4 py-4 text-center text-gray-400">
                  No customers found. Add a new loan to get started.
                </td>
              </tr>
            ) : (
              customers.map(customer => (
                <tr 
                  key={customer.ID}
                  className={`hover:bg-gray-800/50 transition-colors ${
                    customer.status === 'active' ? 'bg-indigo-900/20' : ''
                  }`}
                >
                  <td className="px-4 py-3 text-sm text-gray-300">{customer.ID}</td>
                  <td className="px-4 py-3 text-sm text-white font-medium">{customer.name}</td>
                  <td className="px-4 py-3 text-sm text-gray-300">{customer.occupation}</td>
                  <td className="px-4 py-3 text-sm text-gray-300">${customer.amount.toFixed(2)}</td>
                  <td className="px-4 py-3 text-sm text-gray-300">{customer.start_date}</td>
                  <td className="px-4 py-3 text-sm text-gray-300">{customer.end_date}</td>
                  <td className="px-4 py-3 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      customer.status === 'active' 
                        ? 'bg-green-900/40 text-green-400' 
                        : customer.status === 'closed'
                          ? 'bg-gray-700/40 text-gray-300'
                          : 'bg-red-900/40 text-red-400'
                    }`}>
                      {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-300">${customer.balance.toFixed(2)}</td>
                  <td className="px-4 py-3 text-sm text-gray-300 space-x-2">
                    <button
                      onClick={() => onViewDetails(customer)}
                      className="bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-300 p-1.5 rounded transition-colors"
                      title="View Details"
                    >
                      <FaEye />
                    </button>
                    <button
                      onClick={() => onDeleteCustomer(customer.ID)}
                      className="bg-red-600/30 hover:bg-red-600/50 text-red-300 p-1.5 rounded transition-colors"
                      title="Delete Customer"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerTable;
