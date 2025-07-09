import React from 'react';
import { FaUsers, FaMoneyCheckAlt, FaCheckCircle, FaDollarSign, FaPercentage } from 'react-icons/fa';

interface DashboardProps {
  totalCustomers: number;
  totalLoans: number;
  activeLoans: number;
  totalPrincipal: number;
  totalOwed: number;
}

const Dashboard: React.FC<DashboardProps> = ({
  totalCustomers,
  totalLoans,
  activeLoans,
  totalPrincipal,
  totalOwed
}) => {
  const cards = [
    {
      label: 'Total Customers',
      value: totalCustomers,
      icon: <FaUsers />,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      label: 'Total Loans',
      value: totalLoans,
      icon: <FaMoneyCheckAlt />,
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      label: 'Active Loans',
      value: activeLoans,
      icon: <FaCheckCircle />,
      gradient: 'from-green-500 to-teal-600'
    },
    {
      label: 'Total Principal',
      value: `$${totalPrincipal.toFixed(2)}`,
      icon: <FaDollarSign />,
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      label: 'Total Owed',
      value: `$${totalOwed.toFixed(2)}`,
      icon: <FaPercentage />,
      gradient: 'from-pink-500 to-rose-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
      {cards.map((card, index) => (
        <div 
          key={index}
          className="bg-gray-900/80 backdrop-blur rounded-xl p-4 shadow-lg transition-all duration-300 hover:shadow-purple-500/20 hover:-translate-y-1"
        >
          <div className={`flex items-center mb-2 text-lg bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}>
            <span className="mr-2">{card.icon}</span>
            {card.label}
          </div>
          <div className="text-xl font-bold text-white">{card.value}</div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
