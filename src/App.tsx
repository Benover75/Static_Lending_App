import { useState, useEffect } from 'react';
import './index.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import LoanForm from './components/LoanForm';
import CustomerTable from './components/CustomerTable';
import CustomerModal from './components/CustomerModal';
import { useCustomers } from './hooks/useCustomers';
import { Customer } from './types/Customer';

export function App() {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const { customers, stats, addCustomer, deleteCustomer, searchTerm, setSearchTerm } = useCustomers();

  // Load Google Fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6 pb-12">
      <Header />
      
      <Dashboard 
        totalCustomers={stats.totalCustomers}
        totalLoans={stats.totalLoans}
        activeLoans={stats.activeLoans}
        totalPrincipal={stats.totalPrincipal}
        totalOwed={stats.totalOwed}
      />
      
      <LoanForm onAddCustomer={addCustomer} />
      
      <CustomerTable 
        customers={customers}
        onViewDetails={setSelectedCustomer}
        onDeleteCustomer={deleteCustomer}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      
      <CustomerModal
        customer={selectedCustomer}
        onClose={() => setSelectedCustomer(null)}
      />
    </div>
  );
}

export default App;
