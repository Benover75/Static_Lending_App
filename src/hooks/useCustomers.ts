import { useState, useEffect } from 'react';
import { Customer, CustomerData } from '../types/Customer';

export const useCustomers = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    const storedCustomers = localStorage.getItem('customers');
    if (storedCustomers) {
      try {
        const parsed = JSON.parse(storedCustomers);
        const loadedCustomers = parsed.map((c: CustomerData) => new Customer(
          c.ID, c.name, c.occupation, c.email, c.phone_number, c.address, 
          c.amount, c.interest, c.start_date, c.end_date, c.status, 
          c.balance, c.payment_history
        ));
        setCustomers(loadedCustomers);
      } catch (error) {
        console.error('Error loading customers from localStorage:', error);
      }
    }
  }, []);

  const saveToLocalStorage = (updatedCustomers: Customer[]) => {
    localStorage.setItem('customers', JSON.stringify(updatedCustomers));
  };

  const addCustomer = (newCustomer: Customer) => {
    const updated = [...customers, newCustomer];
    setCustomers(updated);
    saveToLocalStorage(updated);
  };

  const deleteCustomer = (id: string) => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      const updated = customers.filter(c => c.ID !== id);
      setCustomers(updated);
      saveToLocalStorage(updated);
    }
  };

  const filteredCustomers = customers.filter(
    c => c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
         c.ID.includes(searchTerm)
  );

  const stats = {
    totalCustomers: customers.length,
    totalLoans: customers.length,
    activeLoans: customers.filter(c => c.status === 'active').length,
    totalPrincipal: customers.reduce((acc, c) => acc + c.amount, 0),
    totalOwed: customers.reduce((acc, c) => acc + c.getTotalOwed(), 0)
  };

  return {
    customers: filteredCustomers,
    stats,
    addCustomer,
    deleteCustomer,
    searchTerm,
    setSearchTerm
  };
};
