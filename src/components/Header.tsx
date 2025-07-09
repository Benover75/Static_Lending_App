import React from 'react';
import { FaChartLine } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="text-center mb-8 pt-6">
      <div className="flex items-center justify-center gap-2 mb-2">
        <FaChartLine className="text-purple-400 text-3xl" />
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          LoanMaster
        </h1>
      </div>
      <p className="text-purple-300 text-lg">Advanced Loan Management Dashboard</p>
    </header>
  );
};

export default Header;
