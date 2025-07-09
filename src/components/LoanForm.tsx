import React, { useState } from 'react';
import { Customer } from '../types/Customer';
import { FaPlus, FaUser, FaBriefcase, FaEnvelope, FaPhone, FaHome, FaDollarSign, FaPercent, FaCalendarAlt, FaCheckCircle, FaWallet, FaHistory } from 'react-icons/fa';

interface LoanFormProps {
  onAddCustomer: (customer: Customer) => void;
}

const LoanForm: React.FC<LoanFormProps> = ({ onAddCustomer }) => {
  const [formVisible, setFormVisible] = useState(false);
  
  const initialFormState = {
    ID: '',
    name: '',
    occupation: '',
    email: '',
    phone_number: '',
    address: '',
    amount: '',
    interest: '10',
    start_date: '',
    end_date: '',
    status: 'active',
    balance: '',
    payment_history: ''
  };
  
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newCustomer = new Customer(
      formData.ID,
      formData.name,
      formData.occupation,
      formData.email,
      formData.phone_number,
      formData.address,
      formData.amount,
      formData.interest,
      formData.start_date,
      formData.end_date,
      formData.status as 'active' | 'closed' | 'defaulted',
      formData.balance,
      formData.payment_history
    );
    
    onAddCustomer(newCustomer);
    setFormData(initialFormState);
    setFormVisible(false);
  };

  return (
    <div className="mb-8">
      {!formVisible ? (
        <button
          onClick={() => setFormVisible(true)}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-4 rounded-lg shadow-lg flex items-center justify-center gap-2 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 w-full md:w-auto"
        >
          <FaPlus /> Add New Loan
        </button>
      ) : (
        <div className="bg-gray-900/80 backdrop-blur p-6 rounded-xl shadow-lg border border-purple-900/30 transition-all duration-300 animate-fadeIn">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-white">Add New Loan</h2>
            <button 
              onClick={() => setFormVisible(false)}
              className="text-gray-400 hover:text-white"
            >
              &times;
            </button>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="input-group">
                <label className="flex items-center text-purple-300 mb-1 gap-1">
                  <FaUser className="text-xs" /> Customer ID
                </label>
                <input
                  type="text"
                  name="ID"
                  value={formData.ID}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <div className="input-group">
                <label className="flex items-center text-purple-300 mb-1 gap-1">
                  <FaUser className="text-xs" /> Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <div className="input-group">
                <label className="flex items-center text-purple-300 mb-1 gap-1">
                  <FaBriefcase className="text-xs" /> Occupation
                </label>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <div className="input-group">
                <label className="flex items-center text-purple-300 mb-1 gap-1">
                  <FaEnvelope className="text-xs" /> Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <div className="input-group">
                <label className="flex items-center text-purple-300 mb-1 gap-1">
                  <FaPhone className="text-xs" /> Phone Number
                </label>
                <input
                  type="tel"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <div className="input-group md:col-span-2">
                <label className="flex items-center text-purple-300 mb-1 gap-1">
                  <FaHome className="text-xs" /> Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  rows={2}
                />
              </div>
              
              <div className="input-group">
                <label className="flex items-center text-purple-300 mb-1 gap-1">
                  <FaDollarSign className="text-xs" /> Loan Amount ($)
                </label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  required
                  min="0"
                  step="0.01"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <div className="input-group">
                <label className="flex items-center text-purple-300 mb-1 gap-1">
                  <FaPercent className="text-xs" /> Interest Rate (%)
                </label>
                <input
                  type="number"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                  min="0"
                  max="100"
                  step="0.1"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <div className="input-group">
                <label className="flex items-center text-purple-300 mb-1 gap-1">
                  <FaCalendarAlt className="text-xs" /> Start Date
                </label>
                <input
                  type="date"
                  name="start_date"
                  value={formData.start_date}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <div className="input-group">
                <label className="flex items-center text-purple-300 mb-1 gap-1">
                  <FaCalendarAlt className="text-xs" /> End Date
                </label>
                <input
                  type="date"
                  name="end_date"
                  value={formData.end_date}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <div className="input-group">
                <label className="flex items-center text-purple-300 mb-1 gap-1">
                  <FaCheckCircle className="text-xs" /> Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="active">Active</option>
                  <option value="closed">Closed</option>
                  <option value="defaulted">Defaulted</option>
                </select>
              </div>
              
              <div className="input-group">
                <label className="flex items-center text-purple-300 mb-1 gap-1">
                  <FaWallet className="text-xs" /> Balance ($)
                </label>
                <input
                  type="number"
                  name="balance"
                  value={formData.balance}
                  onChange={handleChange}
                  required
                  min="0"
                  step="0.01"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <div className="input-group md:col-span-2">
                <label className="flex items-center text-purple-300 mb-1 gap-1">
                  <FaHistory className="text-xs" /> Payment History (comma separated)
                </label>
                <textarea
                  name="payment_history"
                  value={formData.payment_history}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  rows={2}
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:from-purple-700 hover:to-indigo-700 transition-colors duration-300"
            >
              Add Loan
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoanForm;
