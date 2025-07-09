import React from 'react';
import { Customer } from '../types/Customer';
import { FaTimes } from 'react-icons/fa';

interface CustomerModalProps {
  customer: Customer | null;
  onClose: () => void;
}

const CustomerModal: React.FC<CustomerModalProps> = ({ customer, onClose }) => {
  if (!customer) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-gradient-to-b from-gray-900 to-gray-950 rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-auto" 
           onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-gray-900 px-6 py-4 border-b border-gray-800 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Customer Details</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-gray-800"
          >
            <FaTimes />
          </button>
        </div>
        
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-purple-300 text-sm">Customer ID</p>
              <p className="text-white font-medium">{customer.ID}</p>
            </div>
            
            <div className="space-y-1">
              <p className="text-purple-300 text-sm">Full Name</p>
              <p className="text-white font-medium">{customer.name}</p>
            </div>
            
            <div className="space-y-1">
              <p className="text-purple-300 text-sm">Occupation</p>
              <p className="text-white">{customer.occupation}</p>
            </div>
            
            <div className="space-y-1">
              <p className="text-purple-300 text-sm">Email</p>
              <p className="text-white">{customer.email || '-'}</p>
            </div>
            
            <div className="space-y-1">
              <p className="text-purple-300 text-sm">Phone</p>
              <p className="text-white">{customer.phone_number || '-'}</p>
            </div>
            
            <div className="col-span-2 space-y-1">
              <p className="text-purple-300 text-sm">Address</p>
              <p className="text-white">{customer.address || '-'}</p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-4">
            <h3 className="text-lg font-medium text-white mb-3">Loan Information</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-purple-300 text-sm">Loan Amount</p>
                <p className="text-white font-medium">${customer.amount.toFixed(2)}</p>
              </div>
              
              <div className="space-y-1">
                <p className="text-purple-300 text-sm">Interest Rate</p>
                <p className="text-white">{customer.interest}%</p>
              </div>
              
              <div className="space-y-1">
                <p className="text-purple-300 text-sm">Total Owed</p>
                <p className="text-white font-medium">${customer.getTotalOwed().toFixed(2)}</p>
              </div>
              
              <div className="space-y-1">
                <p className="text-purple-300 text-sm">Current Balance</p>
                <p className="text-white">${customer.balance.toFixed(2)}</p>
              </div>
              
              <div className="space-y-1">
                <p className="text-purple-300 text-sm">Start Date</p>
                <p className="text-white">{customer.start_date}</p>
              </div>
              
              <div className="space-y-1">
                <p className="text-purple-300 text-sm">Due Date</p>
                <p className="text-white">{customer.end_date}</p>
              </div>
              
              <div className="space-y-1">
                <p className="text-purple-300 text-sm">Status</p>
                <p className={`inline-block px-2 py-1 rounded-full text-xs ${
                  customer.status === 'active' 
                    ? 'bg-green-900/40 text-green-400' 
                    : customer.status === 'closed'
                      ? 'bg-gray-700/40 text-gray-300'
                      : 'bg-red-900/40 text-red-400'
                }`}>
                  {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-4">
            <h3 className="text-lg font-medium text-white mb-3">Payment History</h3>
            
            {customer.payment_history.length > 0 ? (
              <div className="bg-gray-800/50 rounded-lg p-3 max-h-[200px] overflow-y-auto">
                <ul className="space-y-1">
                  {customer.payment_history.map((payment, index) => (
                    <li key={index} className="text-gray-300 text-sm">
                      {payment || 'No details'}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-gray-400 text-sm">No payment history available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerModal;
